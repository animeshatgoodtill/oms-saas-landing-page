import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const HELP_HOSTS = new Set(['help.opscel.com']);

// help.opscel.com is a dedicated help/support subdomain — only the help
// centre and the docs it links into belong there. Every other route on
// this app (blog, pricing, features, sign-in, ...) belongs on the main
// marketing site.
const ALLOWED_PREFIXES = ['/help', '/docs'];

export function middleware(request: NextRequest) {
    const host = request.headers.get('host') ?? '';

    if (!HELP_HOSTS.has(host)) {
        return NextResponse.next();
    }

    const { pathname } = request.nextUrl;

    if (pathname === '/') {
        const url = request.nextUrl.clone();
        url.pathname = '/help';
        return NextResponse.rewrite(url);
    }

    const isAllowed = ALLOWED_PREFIXES.some(
        (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
    );
    if (isAllowed) {
        return NextResponse.next();
    }

    const redirectUrl = new URL(pathname + request.nextUrl.search, 'https://www.opscel.com');
    return NextResponse.redirect(redirectUrl);
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|rss.xml|images/|icons/).*)',
    ],
};
