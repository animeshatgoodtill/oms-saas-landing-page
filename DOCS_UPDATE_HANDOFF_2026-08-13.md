# Docs update handoff — asset import overhaul (shipped to production 2026-08-13)

Audience: website/docs agents working ONLY in this repo. Every product claim below has been
verified against the product codebase — you do not need product-repo access. Treat quoted
"stale text" as search anchors.

## What shipped (context, one paragraph)

Asset CSV import was rebuilt. The site is now chosen IN THE UI before upload (customer →
service address); the file needs no address/postcode/customer columns and any present are
ignored. Files without a Name column get names auto-derived from Device Type + panel position
("Sounder N1 L1 A45", "#2" suffix on collisions). A new blocking "Device types" wizard step
requires every unrecognised device-type value to be mapped to a canonical Opscel asset type
(previously unknown types imported silently as junk); mappings can be saved as a reusable
per-customer profile. Re-importing into a site that already holds assets of the incoming types
shows a warning and requires an explicit acknowledgement checkbox. Asset CSV import is gated
to the Business/Max plan (the Asset Management feature) — Team keeps CSV import for customers/
contacts/addresses/jobs. Imported assets now share the app's real `AST-` numbering and get
register positions. New capture columns: Node, Zone Number, Loop Number, Loop Address (TEXT —
panels emit "1.045"), Panel Type, Alarm Category, plus extinguisher service-clock fields.
Registry is 43 asset types (interface_unit + relay_module recently added).

## File-by-file instructions

### 1. `src/data/docs/asset-lifecycle-guide.ts` — section id `bulk-import` (~line 151)
Rewrite the bulk-import section to describe the NEW flow, in this order:
1. Pick customer, then service address, BEFORE uploading — every row imports to that one
   site. No postcode/street/customer-name columns needed; any present are ignored.
2. No Name column → names derived from Device Type + Node/Loop/Address (e.g.
   "Sounder N1 L1 A45"); duplicate derivations get " #2".
3. The "Device types" step: every distinct device-type value must be mapped to an Opscel
   asset type before preview — unmapped types BLOCK the import (change from before, when
   unknown types imported silently). Mapping can be saved as a reusable profile tied to the
   customer and is offered on their next import.
4. Re-import guard: importing into a site that already holds assets of the incoming types
   shows a warning listing them and requires ticking an acknowledgement before confirm.
5. Tier: bulk asset import needs the plan that includes Asset Management (Business/Max);
   lower tiers see an upgrade prompt.
6. Imported assets get real `AST-` numbers and register positions — one numbering sequence
   with manually-added assets.
Also amend the "Duplicate detection matches on type and identity" bullet: for auto-derived
names matching is EXACT-only (prevents merging adjacent devices); fuzzy matching still
applies to files that carry their own Name column.

### 2. `src/data/docs/asset-tracking-guide.ts`
- FAQ "How do existing assets get into Opscel?" (~line 219): keep the three-way structure;
  expand way (1) to "bulk CSV import from Settings → Data Management — you pick the customer
  and site first, then map any unrecognised device types before the import runs" and
  cross-link `/docs/asset-lifecycle#bulk-import`.
- ADD FAQ: "Why does the import say 'unknown device type'?" → the blocking Device-types
  mapping step + reusable profiles.
- FIX independent stale claim (~line 214-217): "What worksheets can produce assets? Today:
  Fire Extinguisher Service and Fire Alarm Commissioning" — the real list is FIVE:
  **Fire Alarm Service, Fire Alarm Commissioning, Fire Extinguisher Service, Asset Service
  (generic), and Remedials Scope.** (Verified against the product repo 2026-08-13.)

### 3. `src/data/featureDetails/assets.ts` (marketing /features page)
- FAQ (~line 183): DELETE the sentence "Parent reference resolution links assets to
  customers by business name or email." Replace with: "You choose the customer and site
  before uploading, so no address or customer-name columns are needed in the file itself."
  Keep fuzzy column matching + "thousands of assets" claims (still true).
- FAQ "Is asset tracking available on all plans?" (~line 178): add that bulk CSV asset
  import specifically carries the same Business/Max gate.

### 4. `src/data/featureDetails/data-import.ts` (marketing /features page)
- Tier highlight (~line 57-59) "Data import available on Team tier… Supports all 5 entity
  types": reword — "Customer, contact, address and job import is available on Team tier;
  asset import requires the Business/Max plan (Asset Management)." Apply the same scoping to
  the "Team tier includes import — no enterprise tier jump required" bullet (~line 95).
- Parent-reference FAQ (~line 197-198, also featureHighlights ~line 29): the "Importing
  assets for customer sites? Links by address match" half is now FALSE. Scope address/name
  matching claims to contacts/addresses, and add: "Asset imports don't use address matching —
  you select the site once in the UI before uploading, and every row imports to it."

### 5. `src/data/pricing.ts` — OWNER DECISION NEEDED, do not change unilaterally
Team's "CSV data import" bullet (~line 25) doesn't say assets are excluded; Business's
"Asset and equipment tracking" (~line 38) doesn't mention import. Proposed minimal fix:
Business bullet → "Asset and equipment tracking (incl. bulk CSV import)". Confirm wording
with the owner — sales-affecting page.

### 6. `src/data/docs/settings-tour-guide.ts` (~line 314-319)
No change now. CONSTRAINT for the future "Data import/export guide": do NOT present assets
alongside customers/jobs/invoices as one shared flow — asset import is site-scoped and
tier-gated differently.

## New content to create

**"Importing a Fire Alarm Panel Export"** — subsection of asset-lifecycle (or standalone
support article). Outline:
- Why: panel exports have no Name column and no address columns — this flow exists for them.
- Steps: pick customer → pick site → upload → column mapping → Device-types mapping
  (blocking; save-as-profile) → re-import warning if applicable → confirm.
- What's captured: Node, Zone Number, Loop Number, Loop Address ("1.045" is text on purpose —
  real panels use dotted addresses), Panel Type, Alarm Category.
- Auto-generated names and the "#2" collision rule.
- Combined devices: a sounder/beacon at one address is usually listed twice (e.g. 48.1 and
  48.2) because each function is programmed separately — the register keeps one row per
  listing, matching the panel.
- Second imports: the acknowledgement guard.

**FAQ additions** (whichever page owns bulk import): unknown device type → mapping step;
reusable per-customer profiles; re-import acknowledgement; which plan includes asset import.

## Not covered / flags
- No UI screenshots exist in docs today (`public/images/docs/asset-*` absent) — retaking is
  an enhancement, not a fix.
- No changelog/release-notes page exists under `src/app/docs` — if one lives elsewhere, add
  this ship to it.
