import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;

  const slug = pathname.split('/').pop();

  const res = await fetch(`${request.nextUrl.origin}/api/get-url/${slug}`);

  const data = await res.json();

  if (data?.url) {
    return NextResponse.redirect(data.url);
  }
};

export default middleware;

export const config = {
  matcher: '/api/get-url/:path*',
};
