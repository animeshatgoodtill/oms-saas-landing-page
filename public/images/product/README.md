# Product Mockup Images

This directory contains the product feature mockups for the sticky scroll section.

## Required Images

Place the following images in this directory (all in `.webp` format for optimal performance):

1. **dashboard-overview.webp** (1600×1200px recommended)
   - The large dashboard screenshot showing:
     - Active Jobs, Customers, Scheduled This Week, Completed This Month metrics
     - Needs Attention section
     - This Week calendar view
     - Recent Activity feed
     - Service Type Distribution chart

2. **jobs-kanban.webp** (1600×1200px recommended)
   - The large jobs kanban board screenshot showing:
     - Scheduled, In Progress, On Hold, Completed columns
     - Job cards with details
     - Filters panel

3. **quote-pipeline.webp** (800×600px recommended)
   - The Quote Pipeline widget showing:
     - Draft, Sent, Accepted, Converted stages
     - Total quotes this month

4. **team-utilisation.webp** (800×600px recommended)
   - The Team Utilisation widget showing:
     - Engineer names
     - Hours scheduled / total hours
     - Progress bars
     - Summary at bottom

5. **remedial-quotes.webp** (1000×700px recommended)
   - The Jobs Pending Remedial Quotes widget showing:
     - Critical/Major defect badges
     - Job cards with customer names
     - Quote buttons

## Converting to WebP

If you have PNG or JPG screenshots, convert them to webp using:

```bash
# Single file
cwebp input.png -o output.webp -q 85

# Or use online converter: https://cloudconvert.com/png-to-webp
```

## Image Optimization

- Max width: 1600px for large mockups, 1000px for widgets
- Quality: 85-90%
- Format: WebP
- Keep file size under 200KB per image for fast loading
