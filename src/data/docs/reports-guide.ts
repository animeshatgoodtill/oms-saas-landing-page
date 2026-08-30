import { IDocGuide } from '@/types';

export const reportsGuide: IDocGuide = {
    title: 'Reports & Analytics',
    description: 'Track job performance, quote conversion rates, and team productivity. Generate custom reports, export data, and make data-driven decisions for your business.',
    slug: 'reports',
    lastUpdated: 'May 21, 2026',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    content: '<strong>30-Second Version:</strong> Opscel\'s reporting suite gives you insights into jobs, quotations, and team performance. Generate reports with custom date ranges, filter by engineer or customer, and export data to CSV for deeper analysis. Access is role-based, not tier-based — any role with reporting permissions can use every report, on any tier. Designed for roles that need operational visibility.',
                },
                {
                    title: 'Who Uses Reports',
                    bullets: [
                        '<strong>Managers:</strong> Track team productivity, identify bottlenecks, monitor quote acceptance rates',
                        '<strong>Admins:</strong> Analyze revenue trends, forecast workload, prepare financial reports',
                        '<strong>Business Owners:</strong> Review high-level KPIs, compare period-over-period performance',
                    ],
                },
                {
                    title: 'Available Insights',
                    bullets: [
                        'Job completion rates and overdue job counts',
                        'Revenue by job type, engineer, or customer',
                        'Quote acceptance and rejection rates',
                        'Average job duration and engineer utilization',
                        'Customer lifetime value and repeat business metrics',
                    ],
                },
            ],
        },
        {
            id: 'jobs-report',
            title: 'Jobs Report',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Any role with reporting access — Super Admin, Admin, Accounts, Contract Manager, Sales Manager, Viewer',
                },
                {
                    title: 'What the Jobs Report Shows',
                    content: 'The Jobs Report provides a comprehensive view of your field service operations: job completion rates, revenue, overdue jobs, average duration, and engineer performance.',
                },
                {
                    title: 'Steps to Generate Jobs Report',
                    steps: [
                        'Navigate to <strong>Reports → Jobs Report</strong>',
                        'Select <strong>Date Range</strong>: This Week, This Month, This Quarter, This Year, or Custom',
                        'Apply filters (optional): Engineer, Customer, Job Status, Job Type',
                        'Click <strong>Generate Report</strong>',
                        'View metrics dashboard with charts and tables',
                        'Click <strong>Export to CSV</strong> to download detailed data',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'Dashboard displays: total jobs in period, completion rate (%), overdue jobs count, total revenue (£), average job duration (hours), revenue per engineer breakdown. Charts show: jobs over time (line chart), revenue by job type (pie chart), engineer utilization (bar chart).',
                },
                {
                    title: 'Key Metrics Explained',
                    table: {
                        headers: ['Metric', 'Definition', 'How It\'s Calculated'],
                        rows: [
                            ['Completion Rate', 'Percentage of jobs completed on time', '(Completed jobs / Total scheduled jobs) × 100'],
                            ['Overdue Jobs', 'Jobs past scheduled date but not completed', 'Count of jobs where status ≠ Completed and scheduled_date < today'],
                            ['Average Job Duration', 'Mean time to complete a job', 'Sum of actual_duration / Count of completed jobs'],
                            ['Revenue Per Engineer', 'Average revenue generated per team member', 'Total revenue / Count of assigned engineers'],
                            ['Jobs Per Day', 'Daily job throughput', 'Total jobs in period / Number of days in period'],
                        ],
                    },
                },
                {
                    title: 'For Managers',
                    content: '<em>Tip:</em> Run the Jobs Report weekly to identify engineers with high overdue counts. This may indicate over-scheduling, skill gaps, or job complexity issues. Use the data to rebalance workloads or provide additional training.',
                },
            ],
        },
        {
            id: 'quotations-report',
            title: 'Quotations Report',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Any role with reporting access — Super Admin, Admin, Accounts, Contract Manager, Sales Manager, Viewer',
                },
                {
                    title: 'What the Quotations Report Shows',
                    content: 'Track sales performance with quote acceptance rates, win/loss analysis, average quote values, and conversion time. Identify which engineers close the most quotes and which customers accept most frequently.',
                },
                {
                    title: 'Steps to Generate Quotations Report',
                    steps: [
                        'Navigate to <strong>Reports → Quotations Report</strong>',
                        'Select <strong>Date Range</strong> (custom range recommended for meaningful trends)',
                        'Apply filters (optional): Assigned Engineer, Customer, Quote Status',
                        'Click <strong>Generate Report</strong>',
                        'View metrics: Total quotes sent, Acceptance rate (%), Rejection rate (%), Average quote value (£), Total revenue from accepted quotes',
                        'Review charts: Acceptance trend over time, Quote value distribution, Win/loss by engineer',
                        'Click <strong>Export to CSV</strong> for detailed analysis',
                    ],
                },
                {
                    title: 'What You Should See',
                    content: 'Dashboard shows: acceptance rate (e.g., 52%), average quote value (£2,340), conversion time (4.2 days), win/loss ratio (1.3). Charts display: monthly acceptance trends, quote value histogram, engineer performance leaderboard.',
                },
                {
                    title: 'Key Metrics Explained',
                    table: {
                        headers: ['Metric', 'Definition', 'Good Target'],
                        rows: [
                            ['Acceptance Rate', 'Percentage of sent quotes that are accepted', '40-60% (industry average)'],
                            ['Conversion Time', 'Average days from sent to accepted', 'Under 7 days (faster indicates strong value proposition)'],
                            ['Win/Loss Ratio', 'Accepted quotes ÷ Rejected quotes', 'Above 1.0 (more wins than losses)'],
                            ['Average Quote Value', 'Mean value of all quotes sent', 'Track trends - should increase over time with upselling'],
                        ],
                    },
                },
                {
                    title: 'For Managers',
                    content: '<em>Tip:</em> If acceptance rate is below 30%, analyze rejection reasons (customer feedback). Common causes: pricing too high, unclear scope, slow response time. Consider offering tiered options (good/better/best) to improve acceptance rates.',
                },
            ],
        },
        {
            id: 'profitability',
            title: 'Profitability Report',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Any role with reporting access — Super Admin, Admin, Accounts, Contract Manager, Sales Manager, Viewer',
                },
                {
                    title: 'What the Profitability Report Shows',
                    content: 'Rolls up the Estimated and Actual figures from every job\'s Financial tab across a date range: total value, total cost, and an <strong>Avg Margin</strong> percentage. See the <a href="/docs/job-profitability" class="text-secondary hover:underline">Job Profitability guide</a> for exactly how those job-level figures are worked out — this report is a rollup of the same numbers, nothing more.',
                },
                {
                    title: 'Why Avg Margin Only Covers Some Jobs',
                    content: 'A job valued purely from its schedule (no quote, no invoice) has a margin fixed by your two labour rates rather than by anything specific to that job — it would be identical on every job like it. Including it would dilute the average with a number that doesn\'t actually vary, so <strong>Avg Margin</strong> is worked out over quoted and invoiced jobs only. Where schedule-estimated jobs are still included in the money totals, the card shows how much of the total they make up.',
                },
                {
                    title: 'Clock Coverage',
                    content: 'The report also shows visits-clocked coverage across the range (N of M visits clocked) — the same figure shown per-job, using the same ten-minute rule. See <a href="/docs/job-profitability#clock" class="text-secondary hover:underline">Clocked time, and the ten-minute rule</a>.',
                },
                {
                    title: 'For Finance',
                    content: '<em>Tip:</em> If Avg Margin looks lower than expected, check whether a labour band is missing a cost rate — jobs using that band show "Labour costing not set up" and their margin is withheld entirely rather than shown as an underestimate.',
                },
            ],
        },
        {
            id: 'filtering-date-ranges',
            title: 'Filtering & Date Ranges',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Any role with reporting access — Super Admin, Admin, Accounts, Contract Manager, Sales Manager, Viewer',
                },
                {
                    title: 'Using Date Ranges',
                    content: 'Opscel offers predefined and custom date ranges for flexible reporting. Choose ranges that align with your business review cycles.',
                },
                {
                    title: 'Predefined Date Ranges',
                    bullets: [
                        '<strong>This Week:</strong> Monday to Sunday of current week',
                        '<strong>This Month:</strong> 1st to last day of current month',
                        '<strong>This Quarter:</strong> Q1 (Jan-Mar), Q2 (Apr-Jun), Q3 (Jul-Sep), Q4 (Oct-Dec)',
                        '<strong>This Year:</strong> January 1 to December 31 of current year',
                        '<strong>Last 7/30/90 Days:</strong> Rolling window from today',
                    ],
                },
                {
                    title: 'Custom Date Ranges',
                    content: 'Select <strong>Custom</strong> and pick start/end dates using the calendar picker. Useful for fiscal year reporting, campaign analysis, or comparing specific periods (e.g., "July 2025 vs July 2024").',
                },
                {
                    title: 'Combining Filters',
                    content: 'Apply multiple filters simultaneously for targeted insights. Example: "Jobs Report → This Month → Assigned to John Smith → Status: Overdue" shows John\'s overdue jobs this month.',
                },
                {
                    title: 'Steps to Apply Filters',
                    steps: [
                        'Generate a report (Jobs or Quotations)',
                        'Click <strong>Add Filter</strong>',
                        'Select filter type: Engineer, Customer, Status, Job Type, or Custom Field',
                        'Choose filter value from dropdown',
                        'Click <strong>Apply Filter</strong>',
                        'Repeat to add multiple filters (filters combine with AND logic)',
                        'Click <strong>Clear Filters</strong> to reset',
                    ],
                },
                {
                    title: 'For Admins',
                    content: '<em>Tip:</em> Save common filter combinations as bookmarks in your browser. For example, bookmark "Jobs Report → This Month → Status: Completed" for quick access to monthly completion data.',
                },
            ],
        },
        {
            id: 'exporting-data',
            title: 'Exporting Data',
            subsections: [
                {
                    title: 'Availability',
                    content: '<strong>Tier:</strong> All plans<br><strong>Roles:</strong> Any role with reporting access — Super Admin, Admin, Accounts, Contract Manager, Sales Manager, Viewer',
                },
                {
                    title: 'Why Export Data',
                    content: 'Export reports to CSV or Excel for deeper analysis in spreadsheet tools, financial software, or BI platforms. Useful for custom visualizations, pivot tables, or sharing with stakeholders who don\'t have Opscel access.',
                },
                {
                    title: 'Steps to Export Report Data',
                    steps: [
                        'Generate a report (Jobs or Quotations)',
                        'Apply desired filters and date range',
                        'Click <strong>Export to CSV</strong> button (top right)',
                        'Choose format: <strong>CSV</strong> (Excel/Google Sheets)',
                        'Download starts automatically',
                        'Open file in Excel, Google Sheets, or BI tool',
                    ],
                },
                {
                    title: 'What Data Exports',
                    content: '<strong>Jobs Report CSV includes:</strong> Job ID, Customer, Engineer, Job Type, Scheduled Date, Completion Date, Status, Revenue, Duration (hours), Site Address, Job Notes.<br><br><strong>Quotations Report CSV includes:</strong> Quote Number, Customer, Date Sent, Date Responded, Status (Accepted/Rejected/Expired), Quote Value, Assigned Engineer, Rejection Reason (if rejected).',
                },
                {
                    title: 'For Admins',
                    content: '<em>Tip:</em> Export data monthly for historical archives. If you outgrow Opscel or need to migrate data, you\'ll have a complete CSV backup. Store exports in Google Drive or Dropbox with clear date labels (e.g., "Jobs_Report_2026-05.csv").',
                },
            ],
        },
        {
            id: 'key-metrics',
            title: 'Key Metrics Explained',
            subsections: [
                {
                    title: 'Understanding Report Metrics',
                    content: 'Opscel calculates metrics using your job and quote data. Here\'s how each metric is defined and why it matters.',
                },
                {
                    table: {
                        headers: ['Metric', 'What It Measures', 'Why It Matters', 'How to Improve'],
                        rows: [
                            [
                                'Completion Rate',
                                'Percentage of jobs completed vs scheduled',
                                'Indicates operational efficiency and scheduling accuracy',
                                'Reduce overbooking, improve time estimation, address bottlenecks'
                            ],
                            [
                                'Average Job Duration',
                                'Mean time to complete a job (hours)',
                                'Helps with accurate quoting and resource planning',
                                'Standardize processes, provide training, optimize routes'
                            ],
                            [
                                'Revenue Per Engineer',
                                'Total revenue ÷ number of engineers',
                                'Measures individual productivity and profitability',
                                'Reduce downtime, improve scheduling utilization, upsell services'
                            ],
                            [
                                'Quote Acceptance Rate',
                                'Percentage of quotes accepted by customers',
                                'Indicates pricing competitiveness and quote quality',
                                'Improve proposal clarity, adjust pricing, faster response time'
                            ],
                            [
                                'Conversion Time',
                                'Days from quote sent to customer decision',
                                'Measures sales cycle efficiency',
                                'Follow up faster, simplify acceptance process, offer incentives'
                            ],
                        ],
                    },
                },
            ],
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Report Shows No Data',
                    content: '<strong>Cause:</strong> Date range has no jobs/quotes, or filters exclude all records.<br><strong>Fix:</strong> Verify date range includes activity (check Jobs list for jobs in that period). Clear all filters and try again. If still empty, no data exists for that period.',
                },
                {
                    title: 'Export Fails or Times Out',
                    content: '<strong>Cause:</strong> Dataset too large, or server timeout.<br><strong>Fix:</strong> Reduce date range to smaller period. Apply filters to reduce row count. For very large exports, contact support for bulk export assistance.',
                },
                {
                    title: 'Metrics Don\'t Match Expectations',
                    content: '<strong>Cause:</strong> Misunderstanding metric calculation, or job data incomplete.<br><strong>Fix:</strong> Review "Key Metrics Explained" section above for exact definitions. Check job statuses (incomplete jobs may not be counted). Verify job revenue is set (zero revenue jobs excluded from revenue metrics). Export CSV to manually verify calculations.',
                },
                {
                    title: 'Scheduled Report Not Received',
                    content: '<strong>Cause:</strong> Email delivery failed, spam filter, or schedule paused.<br><strong>Fix:</strong> Check spam/junk folder. Verify recipient email addresses are correct. Check scheduled report status (Settings → Scheduled Reports) - if <strong>Paused</strong>, resume it. Check email delivery logs (Settings → Email Logs) for error messages.',
                },
            ],
        },
        {
            id: 'faqs',
            title: 'FAQs',
            subsections: [
                {
                    title: 'How often is report data refreshed?',
                    content: 'Report data is real-time. When you generate a report, Opscel queries the current database state. There is no caching or delay - you see live data as of the moment you click "Generate Report".',
                },
                {
                    title: 'How far back does historical data go?',
                    content: 'Opscel retains all job and quote data indefinitely (no deletion policy). You can generate reports for any date range since your account was created. For tenants migrated from other systems, historical data availability depends on what was imported during migration.',
                },
                {
                    title: 'Can I create custom metrics?',
                    content: 'Not currently. Opscel provides a standard set of metrics (completion rate, revenue, acceptance rate, etc.). For custom metrics, export data to CSV and use Excel/Google Sheets for custom calculations, or contact sales to discuss custom dashboard development.',
                },
                {
                    title: 'Can I customize report layout or branding?',
                    content: 'PDF reports use your company branding (logo, colors) from Settings → Branding. Layout and metric selection are fixed. For custom report layouts, export CSV and build custom reports in your preferred BI tool (Power BI, Tableau, Looker).',
                },
                {
                    title: 'Do reports include voided or cancelled jobs?',
                    content: 'No. Voided jobs and cancelled jobs are excluded from all reports by default. Only jobs with status <strong>Scheduled</strong>, <strong>In Progress</strong>, or <strong>Completed</strong> are counted. To analyze cancelled jobs, export raw job data and filter in Excel.',
                },
                {
                    title: 'Can I share reports with customers?',
                    content: 'Not directly. Reports are for internal use (managers, admins). Customers access their own data via the Customer Portal (jobs, quotes, certificates). If you need to share performance metrics with a client, export the report to PDF and send manually.',
                },
            ],
        },
        {
            id: 'need-help',
            title: 'Need More Help?',
            subsections: [
                {
                    content: 'If you need assistance interpreting report data or setting up custom analytics, our support team can help. Email <a href="mailto:support@opscel.com" class="text-secondary hover:underline">support@opscel.com</a> with details.',
                },
                {
                    title: 'Related Guides',
                    bullets: [
                        '<a href="/docs/jobs" class="text-secondary hover:underline">Jobs & Multi-Visit Workflow</a> — Understand job lifecycle and statuses',
                        '<a href="/docs/quotations" class="text-secondary hover:underline">Quotations Overview</a> — Learn about quote acceptance and conversion',
                        '<a href="/docs/job-profitability" class="text-secondary hover:underline">Job Profitability</a> — How the Avg Margin figure is worked out, job by job',
                        '<a href="/docs/settings-tour" class="text-secondary hover:underline">Settings Tour</a> — Configure report defaults and permissions',
                    ],
                },
            ],
        },
    ],
    relatedGuides: [
        {
            title: 'Jobs',
            description: 'Jobs data that drives the reports',
            href: '/docs/jobs'
        },
        {
            title: 'Certificates',
            description: 'Certificate issuance metrics and compliance tracking',
            href: '/docs/certificates'
        },
        {
            title: 'Quotations',
            description: 'Quote conversion and revenue analytics',
            href: '/docs/quotations'
        },
        {
            title: 'Settings Tour',
            description: 'Reports settings and export options',
            href: '/docs/settings-tour'
        },
        {
            title: 'Job Profitability',
            description: 'How Estimated, Actual and Avg Margin are worked out per job',
            href: '/docs/job-profitability'
        }
    ]
};
