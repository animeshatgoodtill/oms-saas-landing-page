/**
 * The product's visit-plan chunking rule, ported verbatim from the app
 * (lib/service-contracts/visit-plan.ts: chunkGroupsAcrossVisits) so the docs
 * card previews exactly what a real contract would do.
 *
 * Groups are walked in order and dealt into exactly N contiguous chunks; a
 * group is never split. A chunk closes when adding the next group would take
 * its count FURTHER from the ideal share (total / N) than leaving it - the
 * count-balanced cut, not a greedy "fill to the target" one. The last chunk
 * takes everything left.
 */
export interface DealGroup {
  label: string;
  count: number;
}

export function dealGroupsAcrossVisits<T extends DealGroup>(groups: T[], visitsPerCycle: number): T[][] {
  const n = Math.max(1, Math.floor(visitsPerCycle));
  const total = groups.reduce((sum, g) => sum + g.count, 0);
  const target = total / n;

  const chunks: T[][] = [];
  let current: T[] = [];
  let cur = 0;

  for (const g of groups) {
    const buildingLastChunk = chunks.length === n - 1;
    if (!buildingLastChunk && current.length > 0 && Math.abs(cur + g.count - target) > Math.abs(cur - target)) {
      chunks.push(current);
      current = [g];
      cur = g.count;
    } else {
      current.push(g);
      cur += g.count;
    }
  }

  chunks.push(current);
  while (chunks.length < n) chunks.push([]);
  return chunks;
}
