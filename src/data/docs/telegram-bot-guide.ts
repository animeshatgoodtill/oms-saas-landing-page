import { IDocGuide } from '@/types';

export const telegramBotGuide: IDocGuide = {
  slug: 'telegram-bot',
  title: 'Telegram Bot Integration',
  description: 'Connect the Opscel Telegram bot to receive real-time notifications for jobs, quotes, customer actions, and system alerts directly on your phone or desktop.',
  lastUpdated: '2024-05-23',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p class="font-semibold text-blue-900 mb-2">30-Second Version</p>
        <p class="text-blue-800">The Opscel Telegram bot sends real-time notifications for job updates, customer actions, quote responses, certificate expiry reminders, and system alerts directly to your Telegram app. Stay informed without constantly checking the dashboard—notifications come to you on your phone or desktop.</p>
      </div>

      <p class="mb-4">The Telegram bot integration allows you to receive instant notifications for important events in your Opscel account. Whether you're on-site, in the office, or on the go, you'll get timely alerts for:</p>

      <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
        <li>Job status changes (scheduled, in progress, completed)</li>
        <li>Quote acceptances and rejections</li>
        <li>Customer portal activity</li>
        <li>Certificate expiry reminders</li>
        <li>Payment confirmations</li>
        <li>System alerts and warnings</li>
      </ul>

      <p class="mb-4"><strong>Key benefits:</strong></p>
      <ul class="list-disc list-inside space-y-2 ml-4">
        <li>Real-time alerts without opening the app</li>
        <li>Desktop and mobile support</li>
        <li>End-to-end encrypted notifications</li>
        <li>Customizable notification preferences</li>
        <li>Multi-business support for managing multiple tenants</li>
      </ul>`,
    },
    {
      id: 'setup',
      title: 'Setting Up the Bot',
      content: `<p class="text-sm text-amber-700 bg-amber-50 border-l-4 border-amber-400 p-3 mb-4">
        <strong>Availability:</strong> Super Admin, Admin
      </p>

      <p class="mb-4">Setting up the Telegram bot is a one-time process that connects your Opscel account to your Telegram account via a secure connection token.</p>`,
      subsections: [
        {
          title: 'Connection Steps',
          steps: [
            {
              step: 'Open Telegram and find @OpscelBot',
              description: 'On your phone or desktop, open Telegram and search for <strong>@OpscelBot</strong> in the search bar. Tap on the bot to open the chat.',
            },
            {
              step: 'Start the bot',
              description: 'Send the <code>/start</code> command to the bot. You\'ll receive a welcome message with instructions.',
            },
            {
              step: 'Generate connection token in Opscel',
              description: 'In your Opscel account, navigate to <strong>Settings → Integrations → Telegram Bot</strong>. Click <strong>Generate Connection Token</strong>. A single-use token will appear (valid for 10 minutes).',
            },
            {
              step: 'Connect the bot',
              description: 'Copy the token from Opscel and paste it into the Telegram chat with @OpscelBot. The bot will confirm the connection.',
            },
            {
              step: 'Confirm connection',
              description: '<div class="bg-green-50 border-l-4 border-green-400 p-3 mt-2"><strong>What you should see:</strong> "✅ Successfully connected to [Your Business Name]. You\'ll now receive notifications for this account."</div>',
            },
          ],
        },
        {
          bullets: [
            '<strong>Security:</strong> Connection tokens are single-use and expire after 10 minutes. Each team member needs their own connection.',
            '<strong>Multi-tenant:</strong> If you manage multiple businesses, you can connect the bot to each one separately.',
          ],
        },
      ],
    },
    {
      id: 'notification-types',
      title: 'Notification Types',
      content: `<p class="mb-4">The Telegram bot sends notifications for the following event types:</p>

      <div class="overflow-x-auto mb-6">
        <table class="min-w-full border border-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="border border-gray-200 px-4 py-2 text-left">Category</th>
              <th class="border border-gray-200 px-4 py-2 text-left">Events</th>
              <th class="border border-gray-200 px-4 py-2 text-left">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Jobs</td>
              <td class="border border-gray-200 px-4 py-2">Scheduled, In Progress, Completed, Overdue</td>
              <td class="border border-gray-200 px-4 py-2 text-sm">"Job #1234 at ABC Ltd is now overdue by 2 days"</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Quotes</td>
              <td class="border border-gray-200 px-4 py-2">Accepted, Rejected, Expired</td>
              <td class="border border-gray-200 px-4 py-2 text-sm">"Quote #QUO-2024-0056 accepted by ABC Ltd"</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Customer Portal</td>
              <td class="border border-gray-200 px-4 py-2">Document viewed, Signature captured</td>
              <td class="border border-gray-200 px-4 py-2 text-sm">"John Smith viewed EICR certificate #CERT-001234"</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Certificates</td>
              <td class="border border-gray-200 px-4 py-2">Retest due soon (14 days), Expired</td>
              <td class="border border-gray-200 px-4 py-2 text-sm">"EICR for ABC Ltd due for retest in 14 days"</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Payments</td>
              <td class="border border-gray-200 px-4 py-2">Payment received, Invoice overdue</td>
              <td class="border border-gray-200 px-4 py-2 text-sm">"Payment of £450.00 received for Invoice #INV-2024-0123"</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">System</td>
              <td class="border border-gray-200 px-4 py-2">Storage limit warning, Subscription expiry</td>
              <td class="border border-gray-200 px-4 py-2 text-sm">"Storage at 85% capacity - consider upgrading"</td>
            </tr>
          </tbody>
        </table>
      </div>`,
    },
    {
      id: 'preferences',
      title: 'Configuring Notification Preferences',
      content: `<p class="text-sm text-amber-700 bg-amber-50 border-l-4 border-amber-400 p-3 mb-4">
        <strong>Availability:</strong> All users with bot connection
      </p>

      <p class="mb-4">Customize which notifications you receive and when.</p>`,
      subsections: [
        {
          title: 'Configuration Steps',
          steps: [
            {
              step: 'Access settings in Telegram',
              description: 'In your chat with @OpscelBot, send the <code>/settings</code> command.',
            },
            {
              step: 'Toggle notification categories',
              description: 'Use the interactive buttons to enable or disable specific notification types (Jobs, Quotes, Certificates, Payments, System).',
            },
            {
              step: 'Set quiet hours (optional)',
              description: 'Configure times when notifications should be suppressed (e.g., 10pm - 7am). Send <code>/quiet 22:00-07:00</code>.',
            },
            {
              step: 'Configure per-business settings',
              description: 'If you manage multiple businesses, use <code>/business [business-name]</code> to switch context and configure preferences for each separately.',
            },
          ],
        },
        {
          bullets: [
            '<strong>Default settings:</strong> All notification types are enabled by default except System alerts.',
            '<strong>Quiet hours:</strong> During quiet hours, notifications are queued and delivered in a single summary message when quiet hours end.',
          ],
        },
      ],
    },
    {
      id: 'managing',
      title: 'Managing the Bot',
      content: `<p class="mb-4">The Telegram bot responds to several commands for managing your connection and preferences:</p>

      <div class="overflow-x-auto mb-6">
        <table class="min-w-full border border-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="border border-gray-200 px-4 py-2 text-left">Command</th>
              <th class="border border-gray-200 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">/start</td>
              <td class="border border-gray-200 px-4 py-2">Initial setup and welcome message</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">/help</td>
              <td class="border border-gray-200 px-4 py-2">Show all available commands</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">/settings</td>
              <td class="border border-gray-200 px-4 py-2">Configure notification preferences</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">/mute</td>
              <td class="border border-gray-200 px-4 py-2">Temporarily pause all notifications</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">/unmute</td>
              <td class="border border-gray-200 px-4 py-2">Resume notifications</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">/status</td>
              <td class="border border-gray-200 px-4 py-2">Check connection status and business(es)</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">/test</td>
              <td class="border border-gray-200 px-4 py-2">Send a test notification to verify connection</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">/disconnect</td>
              <td class="border border-gray-200 px-4 py-2">Disconnect the bot from your Opscel account</td>
            </tr>
          </tbody>
        </table>
      </div>`,
      subsections: [
        {
          title: 'Common Actions',
          steps: [
            {
              step: 'Mute notifications temporarily',
              description: 'Send <code>/mute</code> to pause notifications. They\'ll queue up and you can retrieve them later with <code>/unmute</code>.',
            },
            {
              step: 'Disconnect the bot',
              description: 'Send <code>/disconnect</code> and confirm. This removes the connection between your Telegram account and Opscel. You can reconnect anytime by starting the setup process again.',
            },
          ],
        },
      ],
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      subsections: [
        {
          title: 'Bot not responding',
          content: '<p>Check that you\'re chatting with the correct bot (@OpscelBot). Try sending <code>/start</code> again. If still unresponsive, check Telegram\'s service status or contact support.</p>',
        },
        {
          title: 'Not receiving notifications',
          content: '<p>Send <code>/status</code> to verify connection. Check your notification preferences with <code>/settings</code>. Ensure you\'re not in muted mode (<code>/unmute</code> to resume). Verify that Telegram notifications are enabled in your device settings.</p>',
        },
        {
          title: 'Receiving notifications for wrong business',
          content: '<p>If you manage multiple businesses, use <code>/business</code> to list connected businesses and verify the correct one is selected. Disconnect and reconnect if needed.</p>',
        },
        {
          title: 'How to reconnect',
          content: '<p>Send <code>/disconnect</code> in Telegram, then follow the setup process again from Settings → Integrations → Telegram Bot in Opscel.</p>',
        },
      ],
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      subsections: [
        {
          title: 'Is the Telegram bot secure?',
          content: '<p>Yes. Connection tokens are single-use and expire after 10 minutes. All notifications are sent via Telegram\'s end-to-end encryption. Tokens cannot be reused, and disconnecting the bot immediately revokes access.</p>',
        },
        {
          title: 'Can multiple team members connect the bot?',
          content: '<p>Yes. Each team member can connect the bot to their own Telegram account. Notifications are sent based on role permissions—for example, engineers only receive notifications for their assigned jobs.</p>',
        },
        {
          title: 'Does it work on desktop Telegram?',
          content: '<p>Yes. The bot works on all Telegram platforms: mobile (iOS/Android), desktop (Windows/Mac/Linux), and web.</p>',
        },
        {
          title: 'How do I stop notifications temporarily?',
          content: '<p>Send <code>/mute</code> to pause notifications. You can resume anytime with <code>/unmute</code>. Alternatively, use quiet hours to automatically suppress notifications during specific times.</p>',
        },
        {
          title: 'What happens if I lose my phone?',
          content: '<p>Log into Telegram on a new device, and your chat with @OpscelBot will sync. For security, you can also disconnect the bot from Opscel (Settings → Integrations → Telegram Bot → Disconnect) and reconnect from your new device.</p>',
        },
        {
          title: 'Can I customize notification messages?',
          content: '<p>Not currently. Notification messages are system-generated to ensure clarity and consistency. You can, however, choose which notification types to receive via <code>/settings</code>.</p>',
        },
        {
          title: 'Do I get charged for Telegram notifications?',
          content: '<p>No. Telegram bot notifications are included in your Opscel subscription at no additional cost. Telegram itself is a free service.</p>',
        },
        {
          title: 'What if I manage multiple businesses?',
          content: '<p>You can connect the bot to multiple Opscel businesses. Use <code>/business [name]</code> to switch between them and configure preferences for each independently.</p>',
        },
      ],
    },
    {
      id: 'need-help',
      title: 'Need More Help?',
      content: `<div class="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <p class="mb-3">If you're still stuck or have questions about the Telegram bot integration, our support team is here to help:</p>
        <ul class="space-y-2">
          <li>📧 <strong>Email:</strong> <a href="mailto:support@opscel.com" class="text-blue-600 hover:text-blue-800 underline">support@opscel.com</a></li>
          <li>📚 <strong>Help Centre:</strong> <a href="/help" class="text-blue-600 hover:text-blue-800 underline">Visit the Help Centre</a></li>
        </ul>
      </div>`,
    },
  ],
  relatedGuides: [
    {
      title: 'Settings Tour',
      description: 'Navigate Opscel settings and configure integrations',
      href: '/docs/settings-tour',
    },
    {
      title: 'Team Management',
      description: 'Manage user roles and permissions',
      href: '/docs/team-management',
    },
    {
      title: 'Jobs & Multi-Visit Workflow',
      description: 'Understand job notifications and status changes',
      href: '/docs/jobs',
    },
    {
      title: 'Service Contracts',
      description: 'Set up recurring service automation',
      href: '/docs/service-contracts',
    },
  ],
};
