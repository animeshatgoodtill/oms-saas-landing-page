import { IFeatureDetail } from '@/types';

export const dashboardDetail: IFeatureDetail = {
    slug: 'dashboard',
    title: 'Your Business at a Glance. Finally.',
    subtitle: 'Opscel Dashboard',
    heroDescription: 'See what needs attention, who\'s available, and what\'s converting—all before your first coffee gets cold. Every other system shows you numbers. Opscel shows you what to do next.',
    iconId: 'icon-activity-log',
    screenshotImage: '/images/ui/09-screen.png',

    featureHighlights: [
        {
            iconId: 'icon-activity-log',
            title: 'Trends at a Glance',
            description: 'Numbers without context are just numbers. Every stat card shows a 4-week sparkline so you can see if jobs are trending up or completions are slowing—without opening a single report.'
        },
        {
            iconId: 'icon-deficiency-log',
            title: 'Jobs Needing Attention',
            description: 'Never let work slip through the cracks. See overdue jobs, missing certificates, and stalled quotes prioritised by urgency. Maximum five items because you need to act, not scroll.'
        },
        {
            iconId: 'icon-user-roles',
            title: 'Team Utilisation — Colour Coded',
            description: 'Know who\'s slammed and who\'s got capacity in one glance. Green means healthy workload. Amber means busy. Red means overloaded. Just assign that emergency call to the right person.'
        },
        {
            iconId: 'icon-price-tag',
            title: 'Quote Pipeline with Conversion Rate',
            description: 'Watch quotes move from sent to signed. See exactly how many are awaiting response and your actual conversion percentage. Spot where deals are stalling.'
        },
        {
            iconId: 'icon-maintenance-schedule',
            title: 'This Week, Sorted',
            description: 'A calendar that actually fits on your screen. See the week ahead, click any day to drill down, and know exactly what\'s scheduled for today.'
        },
        {
            iconId: 'icon-deficiency-log',
            title: 'Jobs Pending Remedial Quotes',
            description: 'Engineer logged 5 defects? Dashboard shows one job card with count and severity badges (e.g., "5 defects: 2 Critical, 3 Major"). Click "Create Quote" to bundle all defects into one professional quote. 5x faster than individual quotes. Jobs with Critical defects appear first for prioritization.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Jobs by Type Visualization',
            description: 'See your workload distribution at a glance. Donut chart shows proportion of inspections, installations, and maintenance—helping you balance team skills and scheduling.'
        },
        {
            iconId: 'icon-user-roles',
            title: 'Engineer Performance Leaderboard',
            description: 'Business tier only: See which engineers complete most jobs, maintain fastest response times, and generate highest revenue. Healthy competition, data-driven recognition.'
        },
        {
            iconId: 'icon-smart-prompt',
            title: 'Lightning Fast Loading',
            description: 'Critical data loads in under half a second. Charts and analytics load in parallel without blocking your view. Because waiting for dashboards is time wasted.'
        },
        {
            iconId: 'icon-service-history',
            title: 'Real-Time Activity Feed',
            description: 'Your team\'s working. You should know. See jobs completed, quotes approved, and certificates issued as they happen—without chasing anyone for updates.'
        },
        {
            iconId: 'icon-smart-customer',
            title: 'Smart Setup for New Users',
            description: 'No empty dashboards, no confusion. New accounts get a guided checklist that walks through setup step by step—so you\'re operational, not overwhelmed.'
        },
        {
            iconId: 'icon-compliance-shield',
            title: 'Role-Based Widget Visibility',
            description: 'Engineers see their jobs. Office managers see team capacity. Business owners see revenue trends. Everyone sees what they need, nothing they don\'t.'
        }
    ],

    howItWorksSteps: [
        {
            stepNumber: 1,
            title: 'Open',
            description: 'Log in and your dashboard loads in under a second. Critical data appears immediately—overdue jobs, team capacity, quote conversions.'
        },
        {
            stepNumber: 2,
            title: 'See',
            description: '4-week sparklines show trends at a glance. Colour-coded team utilisation tells you who\'s available. Priority list highlights what needs attention most.'
        },
        {
            stepNumber: 3,
            title: 'Act',
            description: 'Click overdue job to assign engineer. Click understaffed day to schedule work. Click stalled quote to follow up. No hunting, no delays.'
        }
    ],

    personaBenefits: [
        {
            persona: 'Business Owners',
            benefits: [
                'See business health at a glance — jobs completed, revenue trends, team capacity',
                '4-week sparklines show if you\'re growing or slowing without running reports',
                'Quote conversion rate tells you if sales is working',
                'Real-time activity feed shows team productivity without micromanaging',
                'Know exactly which jobs are overdue before customers complain'
            ]
        },
        {
            persona: 'Office Managers',
            benefits: [
                'Prioritised attention list shows what\'s urgent (max 5 items)',
                'Team utilisation bars reveal who can take the emergency call',
                'Week view calendar shows schedule density per day',
                'No more hunting through multiple screens to answer "Is Dave done yet?"',
                'Guided setup checklist for onboarding new staff'
            ]
        },
        {
            persona: 'Field Engineers',
            benefits: [
                'See your jobs for the day highlighted in the calendar',
                'Know what\'s scheduled this week before planning your routes',
                'Activity feed confirms when certificates get approved',
                'Dashboard loads fast even on mobile in the van'
            ]
        }
    ],

    stats: [
        {
            value: '<0.5s',
            label: 'Critical data loads in under half a second'
        },
        {
            value: '5 Max',
            label: 'Attention list limited to 5 urgent items—so you act, not scroll'
        },
        {
            value: 'Real-time',
            label: 'Activity feed updates as team completes work—no refresh needed'
        }
    ],

    comparison: [
        {
            feature: 'See overdue jobs',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Check team workload',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Track quote success',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Spot trends',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Know what\'s on today',
            opscel: true,
            others: 'Some'
        },
        {
            feature: 'Guide new staff',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Find urgent issues',
            opscel: true,
            others: 'No'
        },
        {
            feature: 'Sub-second loading',
            opscel: true,
            others: 'No'
        }
    ],

    faq: [
        {
            question: 'Can I customise what appears on the dashboard?',
            answer: 'The dashboard intelligently adapts to your business stage. New accounts see guided setup checklists. Established accounts see operational metrics—overdue jobs, team capacity, quote conversions. Core widgets are optimised for contractor workflows and cannot be rearranged to maintain clarity.'
        },
        {
            question: 'How is team utilisation calculated?',
            answer: 'Team utilisation is based on assigned jobs and hours logged. Green = healthy workload (60-80% capacity), Amber = busy (80-95%), Red = overloaded (>95%). This helps you spot who can take emergency calls and who needs workload balancing.'
        },
        {
            question: 'Do I need to refresh to see updates?',
            answer: 'No. The activity feed updates in real-time as your team completes jobs, issues certificates, and closes quotes. Core metrics refresh automatically when data changes—no manual refresh required.'
        },
        {
            question: 'What does "jobs needing attention" show?',
            answer: 'The attention list prioritises overdue jobs, jobs with missing certificates, quotes awaiting follow-up for >7 days, and upcoming retests. Limited to 5 items maximum so you focus on what\'s urgent, not everything at once.'
        },
        {
            question: 'Can field engineers see the dashboard on mobile?',
            answer: 'Yes. The dashboard is fully responsive and loads quickly on mobile. Engineers can check their schedule for the day, see this week\'s work, and confirm when certificates are approved—all from the van.'
        },
        {
            question: 'How fast does it actually load?',
            answer: 'Critical data (overdue jobs, team capacity, today\'s schedule) loads in under 0.5 seconds. Charts and sparklines load in parallel without blocking your view. We obsess over speed because waiting for dashboards is time you could spend running your business.'
        }
    ],

    sections: [
        {
            eyebrow: 'Dashboard & Insights',
            title: 'Your Business at a Glance. Finally.',
            description: 'Four-week trends on every figure, and the five things that actually need you today — above the fold, in under half a second.',
            imageSrc: '/images/features/dashboard/needs-attention-card.webp',
            imageAlt: 'Needs Attention card showing 5 capped items: EICR overdue, certificate not issued, quote unanswered',
            imageWidth: 1320,
            imageHeight: 552
        },
        {
            eyebrow: 'Jobs Needing Attention',
            title: 'Five Items. Never Six.',
            description: 'Prioritised by urgency, each one a single click from the fix. A list you can scroll is a list you postpone.',
            imageSrc: '/images/features/dashboard/attention-list.webp',
            imageAlt: 'Five prioritised attention items with one-click action buttons: assign engineer, issue certificate, follow up, assign, create quote',
            imageWidth: 2160,
            imageHeight: 952
        },
        {
            eyebrow: 'Team Utilisation',
            title: 'Who Can Take the 4pm Emergency?',
            description: 'Green has capacity. Amber is busy. Red is overloaded. You do not need to ring anyone to find out.',
            imageSrc: '/images/features/dashboard/team-utilisation.webp',
            imageAlt: 'Team utilisation panel showing 5 engineers with job counts and colour-coded capacity percentages',
            imageWidth: 1200,
            imageHeight: 956
        },
        {
            eyebrow: 'Quote Pipeline',
            title: 'You Know Your Conversion Rate. To the Percent.',
            description: 'Every quote, by stage, with the number that matters computed for you — and the ones sitting unopened that are costing you the difference.',
            stat: { value: '39%', label: 'Conversion rate' },
            imageSrc: '/images/features/dashboard/quote-pipeline.webp',
            imageAlt: 'Quote pipeline bar chart by stage (draft, sent, viewed, signed) next to a 39% conversion rate card',
            imageWidth: 2160,
            imageHeight: 588
        },
        {
            eyebrow: 'Defects to Quote',
            title: 'Five Defects. One Quote. One Click.',
            description: 'The engineer logs what they found. The dashboard bundles it into a priced remedial quote before they have left site.',
            stat: { value: '5×', label: 'Faster to quote' },
            imageSrc: '/images/features/dashboard/defects-to-quote.webp',
            imageAlt: 'Defect list with critical and major severity tags converting into a priced, ready-to-send remedial quote',
            imageWidth: 2160,
            imageHeight: 600
        }
    ],

    ctaText: 'Start Free Trial',
    ctaUrl: 'https://app.opscel.com/handler/sign-up'
};
