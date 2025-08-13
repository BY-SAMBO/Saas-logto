import { NextRequest } from 'next/server';
import { redirect } from 'next/navigation';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const fullUrl = request.url;
    
    console.log('=== CALLBACK DEBUG ===');
    console.log('Full URL:', fullUrl);
    console.log('Code present:', !!code);
    console.log('State:', state);
    console.log('All params:', Object.fromEntries(searchParams.entries()));
    
    if (code) {
      console.log('✅ CODE FOUND - Redirecting to /home');
      return Response.redirect(new URL('/home', request.url), 302);
    } else {
      console.log('❌ NO CODE - Redirecting to /');
      return Response.redirect(new URL('/', request.url), 302);
    }
  } catch (error) {
    console.error('❌ Callback error:', error);
    return Response.redirect(new URL('/', request.url), 302);
  }
}