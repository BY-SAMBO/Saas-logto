import { NextRequest } from 'next/server';
import { redirect } from 'next/navigation';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    
    console.log('Callback received:', { code: !!code, state, url: request.url });
    
    if (code && state) {
      console.log('Login successful, redirecting to /home');
      return redirect('/home');
    } else {
      console.log('Login failed, redirecting to /');
      return redirect('/');
    }
  } catch (error) {
    console.error('Callback error:', error);
    return redirect('/');
  }
}