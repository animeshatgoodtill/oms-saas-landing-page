import { IDocGuide } from '@/types';

export const telegramBotGuide: IDocGuide = {
  slug: 'telegram-bot',
  title: 'Telegram Bot Integration',
  description: 'Connect the OpsCel Telegram bot to get a daily job summary and check-in/check-out reminders in Telegram, with a quick link into the field app.',
  lastUpdated: '2026-08-30',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: `<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p class="font-semibold text-blue-900 mb-2">30-Second Version</p>
        <p class="text-blue-800">The OpsCel Telegram bot is a notification-only companion to the field app. Once linked, it sends a daily job summary each morning plus a check-in reminder before a visit and a check-out reminder if a visit runs long — each with a quick link back into the field app. It doesn't replace the app: check-in, photos, signatures, and job completion all still happen there.</p>
      </div>

      <p class="mb-4">Linking is per-person, not per-business-account: any team member with access to jobs (which includes Engineers) can link their own Telegram account so reminders reach them directly, without waiting on the office.</p>

      <p class="mb-4"><strong>What it sends:</strong></p>
      <ul class="list-disc list-inside space-y-2 ml-4">
        <li>Daily job summary each morning</li>
        <li>A check-in reminder before each visit</li>
        <li>A check-out reminder when a visit runs over its estimated duration</li>
      </ul>

      <p class="mt-4 mb-4">That's the complete list — the bot doesn't currently notify on quotes, portal activity, certificates, payments, or system alerts. It also isn't configurable per-category: there's no in-bot settings menu, quiet hours, or mute command.</p>`,
    },
    {
      id: 'setup',
      title: 'Setting Up the Bot',
      content: `<p class="text-sm text-amber-700 bg-amber-50 border-l-4 border-amber-400 p-3 mb-4">
        <strong>Availability:</strong> Any role with <code>jobs.view</code> — in practice, virtually every role including Engineer. All team members can link their own account; there's no Admin-only gate.
      </p>

      <p class="mb-4">Linking is a one-time process per person, done from the dashboard and confirmed in Telegram with a single command.</p>`,
      subsections: [
        {
          title: 'Connection Steps',
          steps: [
            {
              step: 'Go to Settings → Telegram',
              description: 'In the OpsCel dashboard, open <strong>Settings → Telegram</strong>.',
            },
            {
              step: 'Click "Generate Link Code"',
              description: 'This creates a short, single-use code. It\'s valid for <strong>15 minutes</strong> — if it expires before you use it, click the button again to generate a new one.',
            },
            {
              step: 'Open the bot in Telegram',
              description: 'Search for the OpsCel bot in Telegram and open a chat with it (the dashboard page links directly to it).',
            },
            {
              step: 'Send the link command',
              description: 'Send <code>/start YOUR_CODE</code> as a single message — for example <code>/start ABC123</code>. There\'s no separate "paste a token into chat" step; the code rides on the <code>/start</code> command itself.',
            },
            {
              step: 'Confirm linking',
              description: '<div class="bg-green-50 border-l-4 border-green-400 p-3 mt-2">The bot replies confirming the account is linked, and the Settings → Telegram page updates to show it connected.</div>',
            },
          ],
        },
        {
          bullets: [
            '<strong>Per-person, not per-business:</strong> each team member links their own Telegram account to their own OpsCel login. A Telegram account can only be linked to one OpsCel user at a time.',
            '<strong>Codes expire after 15 minutes</strong> and are single-use — a used or expired code is rejected and you generate a fresh one.',
          ],
        },
      ],
    },
    {
      id: 'notification-types',
      title: 'Notification Types',
      content: `<p class="mb-4">There are exactly three notification types, all related to your scheduled jobs:</p>

      <div class="overflow-x-auto mb-6">
        <table class="min-w-full border border-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="border border-gray-200 px-4 py-2 text-left">Notification</th>
              <th class="border border-gray-200 px-4 py-2 text-left">When It Sends</th>
              <th class="border border-gray-200 px-4 py-2 text-left">What It Contains</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Daily job summary</td>
              <td class="border border-gray-200 px-4 py-2">Each morning</td>
              <td class="border border-gray-200 px-4 py-2 text-sm">Every job scheduled for you today — job number, time, customer, and site address — with a link to the field app</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Check-in reminder</td>
              <td class="border border-gray-200 px-4 py-2">Before a visit's scheduled time</td>
              <td class="border border-gray-200 px-4 py-2 text-sm">Job number, job type, customer, site address, scheduled time and contact — with a link to check in</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-semibold">Check-out reminder</td>
              <td class="border border-gray-200 px-4 py-2">When a visit runs past its estimated duration</td>
              <td class="border border-gray-200 px-4 py-2 text-sm">Job number, elapsed time vs. estimated duration, customer — with a link to check out</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-sm text-muted-foreground">There's no notification for quotes, customer portal activity, certificate expiry, payments, or system/storage alerts — those aren't part of the bot today.</p>`,
    },
    {
      id: 'commands',
      title: 'Bot Commands',
      content: `<p class="mb-4">The bot is deliberately small — three commands, all notification-related. It's not a way to manage jobs or account settings from inside Telegram.</p>

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
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">/start [code]</td>
              <td class="border border-gray-200 px-4 py-2">With no code: shows a welcome message and linking instructions, or your linked status if you're already linked. With a code (<code>/start ABC123</code>): links your account.</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">/help</td>
              <td class="border border-gray-200 px-4 py-2">Shows the available commands and the notifications you'll receive.</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2 font-mono text-sm">/jobs</td>
              <td class="border border-gray-200 px-4 py-2">Lists today's scheduled jobs on demand (requires a linked account).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-sm text-muted-foreground">There's no <code>/settings</code>, <code>/quiet</code>, <code>/mute</code>/<code>/unmute</code>, <code>/status</code>, <code>/test</code>, <code>/business</code>, or in-chat <code>/disconnect</code> command. The bot doesn't support multi-business switching from within Telegram — linking is one Telegram account to one OpsCel user.</p>`,
    },
    {
      id: 'managing',
      title: 'Unlinking Your Account',
      content: `<p class="mb-4">Disconnecting is done from the OpsCel dashboard, not from inside Telegram — there's no <code>/disconnect</code> command in the bot itself.</p>`,
      subsections: [
        {
          title: 'Steps to Unlink',
          steps: [
            {
              step: 'Go to Settings → Telegram',
              description: 'Open <strong>Settings → Telegram</strong> in the dashboard, where you\'ll see your linked Telegram username and connection date.',
            },
            {
              step: 'Unlink the account',
              description: 'Use the unlink control on that page. This removes the connection immediately — the bot stops sending you notifications.',
            },
            {
              step: 'Reconnect later if needed',
              description: 'You can relink at any time by generating a new code and sending <code>/start</code> with it again.',
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
          title: 'Link code says invalid or expired',
          content: '<p>Link codes expire after <strong>15 minutes</strong> and can only be used once. Go back to <strong>Settings → Telegram</strong> and click "Generate Link Code" again, then send <code>/start</code> with the new code.</p>',
        },
        {
          title: 'This Telegram account is already linked to another user',
          content: '<p>Each Telegram account can only be linked to one OpsCel user at a time. If you need to relink it to a different OpsCel login, unlink it from that user\'s Settings → Telegram page first.</p>',
        },
        {
          title: 'Not receiving notifications',
          content: '<p>Confirm the account shows as linked on <strong>Settings → Telegram</strong>. Send <code>/jobs</code> in the bot chat to confirm the bot can see your jobs at all. Check that Telegram notifications are enabled in your device settings, and that you haven\'t blocked or archived the chat with the bot.</p>',
        },
        {
          title: 'Bot not responding',
          content: '<p>Confirm you\'re chatting with the correct OpsCel bot (the link on Settings → Telegram opens the right one). Try <code>/help</code> to confirm the bot is reachable. If it still doesn\'t respond, contact support.</p>',
        },
      ],
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      subsections: [
        {
          title: 'Who can link their Telegram account?',
          content: '<p>Anyone with the <code>jobs.view</code> permission — which in practice is nearly every role, Engineer included. It\'s not restricted to Admins; each team member links their own account independently.</p>',
        },
        {
          title: 'Are Telegram bot chats end-to-end encrypted?',
          content: '<p>No. Ordinary Telegram chats with a bot are transported over Telegram\'s standard (server-side) encryption, not end-to-end — bots can\'t take part in Telegram\'s separate Secret Chat feature, which is the only end-to-end-encrypted mode Telegram offers. Treat it the same as any other notification channel.</p>',
        },
        {
          title: 'Can I customise which notifications I get, or set quiet hours?',
          content: '<p>Not currently. There\'s no in-bot settings menu or quiet-hours command — you get all three notification types (daily summary, check-in reminder, check-out reminder) or none, by linking or unlinking.</p>',
        },
        {
          title: 'Can I manage jobs from Telegram?',
          content: '<p>No. The bot is notification-only. Checking in, checking out, logging parts, capturing photos and signatures, and completing jobs all happen in the field app — the bot\'s notifications link straight to it.</p>',
        },
        {
          title: 'Can one Telegram account be linked to more than one OpsCel business?',
          content: '<p>No. Linking is one Telegram account to one OpsCel user. If you work across multiple businesses under different logins, you\'d need a separate Telegram account (or to unlink and relink) for each.</p>',
        },
        {
          title: 'How do I stop notifications?',
          content: '<p>Unlink your account from <strong>Settings → Telegram</strong> in the dashboard. There\'s no in-chat mute — unlinking is the way to stop them.</p>',
        },
        {
          title: 'What happens if I lose my phone?',
          content: '<p>Log into Telegram on a new device and your chat history syncs as normal. If you want to be safe, unlink the account from <strong>Settings → Telegram</strong> and relink from the new device.</p>',
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
      description: 'Navigate OpsCel settings and configure integrations',
      href: '/docs/settings-tour',
    },
    {
      title: 'Team Management',
      description: 'Manage user roles and permissions',
      href: '/docs/team-management',
    },
    {
      title: 'Jobs & Multi-Visit Workflow',
      description: 'Understand job scheduling and check-in/check-out',
      href: '/docs/jobs',
    },
    {
      title: 'Field Service App',
      description: 'The engineer workflow the bot links back into',
      href: '/docs/field-service',
    },
  ],
};
