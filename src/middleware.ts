import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// help.opscel.com was retired in favour of a plain /help route on the main
// site — a dedicated subdomain added domain/DNS complexity (and briefly
// served the entire app under that host) for no real benefit over a path.
// This keeps any old bookmarks/links working by redirecting them across.
const RETIRED_HELP_HOST = 'help.opscel.com';

export function middleware(request: NextRequest) {
    const host = request.headers.get('host') ?? '';

    if (host !== RETIRED_HELP_HOST) {
        return NextResponse.next();
    }

    const { pathname, search } = request.nextUrl;
    const destinationPath = pathname === '/' ? '/help' : pathname;
    const redirectUrl = new URL(destinationPath + search, 'https://www.opscel.com');
    return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|rss.xml|images/|icons/).*)',
    ],
};
