'use client';

import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { ISearchRecord } from '@/lib/searchIndex';

interface HelpSearchProps {
  records: ISearchRecord[];
}

interface IGroupedMatch {
  sectionTitle?: string;
  subsectionTitle?: string;
  url: string;
  score: number;
  snippet: string;
}

interface IGroupedResult {
  guideSlug: string;
  guideTitle: string;
  bestScore: number;
  matches: IGroupedMatch[];
}

function makeSnippet(text: string, maxLen = 160): string {
  const trimmed = text.trim();
  if (trimmed.length <= maxLen) return trimmed;
  return trimmed.slice(0, maxLen).trim() + '…';
}

const HelpSearch: React.FC<HelpSearchProps> = ({ records }) => {
  const [query, setQuery] = useState('');

  const fuse = useMemo(
    () =>
      new Fuse(records, {
        keys: [
          { name: 'guideTitle', weight: 0.35 },
          { name: 'sectionTitle', weight: 0.25 },
          { name: 'subsectionTitle', weight: 0.2 },
          { name: 'text', weight: 0.2 },
        ],
        includeScore: true,
        threshold: 0.4,
        ignoreLocation: true,
        minMatchCharLength: 2,
      }),
    [records]
  );

  const trimmedQuery = query.trim();
  const hasQuery = trimmedQuery.length >= 2;

  const grouped = useMemo<IGroupedResult[]>(() => {
    if (!hasQuery) return [];
    const results = fuse.search(trimmedQuery, { limit: 80 });
    const byGuide = new Map<string, IGroupedResult>();

    for (const { item, score } of results) {
      const s = score ?? 1;
      let group = byGuide.get(item.guideSlug);
      if (!group) {
        group = { guideSlug: item.guideSlug, guideTitle: item.guideTitle, bestScore: s, matches: [] };
        byGuide.set(item.guideSlug, group);
      }
      group.bestScore = Math.min(group.bestScore, s);
      if (group.matches.length < 3) {
        group.matches.push({
          sectionTitle: item.sectionTitle,
          subsectionTitle: item.subsectionTitle,
          url: item.url,
          score: s,
          snippet: makeSnippet(item.text),
        });
      }
    }

    return Array.from(byGuide.values())
      .map((group) => ({ ...group, matches: group.matches.sort((a, b) => a.score - b.score) }))
      .sort((a, b) => a.bestScore - b.bestScore);
  }, [fuse, hasQuery, trimmedQuery]);

  return (
    <div>
      <div className="relative max-w-2xl mx-auto">
        <FiSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          size={20}
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search the help centre — e.g. "EICR certificate" or "deposit"'
          className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary text-base"
        />
      </div>

      {hasQuery && (
        <div className="max-w-3xl mx-auto mt-8">
          {grouped.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">
              No results for &ldquo;{trimmedQuery}&rdquo;. Try different words, or{' '}
              <a href="mailto:support@opscel.com" className="text-secondary hover:underline">
                ask support
              </a>
              .
            </p>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground mb-2">
                {grouped.length} page{grouped.length === 1 ? '' : 's'} matched &ldquo;{trimmedQuery}&rdquo;
              </p>
              {grouped.map((group) => {
                const relevancy = Math.round((1 - group.bestScore) * 100);
                return (
                  <div
                    key={group.guideSlug}
                    className="border border-border rounded-xl bg-white p-5 hover:border-secondary/50 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <Link
                        href={`/docs/${group.guideSlug}`}
                        className="font-heading font-bold text-lg text-foreground hover:text-secondary transition-colors"
                      >
                        {group.guideTitle}
                      </Link>
                      <span className="text-xs font-mono px-2 py-1 rounded-full bg-secondary/10 text-secondary flex-shrink-0 whitespace-nowrap">
                        {relevancy}% match
                      </span>
                    </div>
                    <div className="space-y-2">
                      {group.matches.map((m, idx) => (
                        <Link key={idx} href={m.url} className="block text-sm py-1.5 group">
                          {(m.subsectionTitle || m.sectionTitle) && (
                            <span className="text-foreground font-medium group-hover:text-secondary transition-colors">
                              {m.subsectionTitle || m.sectionTitle}
                            </span>
                          )}
                          {m.snippet && <span className="text-muted-foreground"> — {m.snippet}</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HelpSearch;
