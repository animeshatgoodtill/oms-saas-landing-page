import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const HELP_HOSTS = new Set(['help.opscel.com']);

export function middleware(request: NextRequest) {
    const host = request.headers.get('host') ?? '';

    if (HELP_HOSTS.has(host) && request.nextUrl.pathname === '/') {
        const url = request.nextUrl.clone();
        url.pathname = '/help';
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/'],
};
