import { IDocGuide, IDocSubsection } from '@/types';
import { documentationGuides } from '@/data/documentationGuides';

export interface ISearchRecord {
    id: string;
    guideSlug: string;
    guideTitle: string;
    sectionId?: string;
    sectionTitle?: string;
    subsectionTitle?: string;
    text: string;
    url: string;
}

function stripHtml(html: string): string {
    return html
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#39;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/\s+/g, ' ')
        .trim();
}

function collectSubsectionText(sub: IDocSubsection): string {
    const parts: string[] = [];
    if (sub.content) parts.push(stripHtml(sub.content));
    if (sub.bullets && sub.bullets.length > 0) {
        parts.push(sub.bullets.map(stripHtml).join('. '));
    }
    if (sub.steps && sub.steps.length > 0) {
        parts.push(
            sub.steps
                .map((step) =>
                    typeof step === 'string'
                        ? stripHtml(step)
                        : `${step.step} ${step.description ?? ''}`.trim()
                )
                .join('. ')
        );
    }
    if (sub.table) {
        parts.push(sub.table.rows.map((row) => row.map(stripHtml).join(' ')).join('. '));
    }
    return parts.filter(Boolean).join(' ').trim();
}

/**
 * Flattens IDocGuide content into one search record per section (or per
 * subsection, when a section has subsections) so results can deep-link
 * straight to the relevant part of a guide.
 */
export function buildSearchIndex(guides: IDocGuide[]): ISearchRecord[] {
    const records: ISearchRecord[] = [];
    const indexedSlugs = new Set<string>();

    for (const guide of guides) {
        indexedSlugs.add(guide.slug);
        const guideTitle = guide.title ?? guide.slug;

        for (const section of guide.sections) {
            const sectionBaseText = section.content ? stripHtml(section.content) : '';
            const sectionTableText = section.table
                ? section.table.rows.map((row) => row.map(stripHtml).join(' ')).join('. ')
                : '';

            if (section.subsections && section.subsections.length > 0) {
                section.subsections.forEach((sub, idx) => {
                    const text = [sectionBaseText, sectionTableText, collectSubsectionText(sub)]
                        .filter(Boolean)
                        .join(' ');
                    if (!text && !sub.title) return;
                    records.push({
                        id: `${guide.slug}#${section.id}-${idx}`,
                        guideSlug: guide.slug,
                        guideTitle,
                        sectionId: section.id,
                        sectionTitle: section.title,
                        subsectionTitle: sub.title,
                        text: text || sub.title || '',
                        url: `/docs/${guide.slug}#${section.id}`,
                    });
                });
            } else {
                const text = [sectionBaseText, sectionTableText].filter(Boolean).join(' ');
                records.push({
                    id: `${guide.slug}#${section.id}`,
                    guideSlug: guide.slug,
                    guideTitle,
                    sectionId: section.id,
                    sectionTitle: section.title,
                    text: text || section.title || '',
                    url: `/docs/${guide.slug}#${section.id}`,
                });
            }
        }
    }

    // Guarantee every real doc page is searchable, even ones that aren't
    // built from IDocGuide data (e.g. the bespoke Invoicing / Accounting
    // Integration pages) — these get a shallow title/description record.
    for (const meta of documentationGuides) {
        const slug = meta.url.replace('/docs/', '');
        if (indexedSlugs.has(slug)) continue;
        records.push({
            id: slug,
            guideSlug: slug,
            guideTitle: meta.title,
            text: meta.description,
            url: meta.url,
        });
    }

    return records;
}
