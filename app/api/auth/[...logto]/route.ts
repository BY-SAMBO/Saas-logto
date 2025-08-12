import { handleSignIn, handleSignOut } from '@logto/next/server-actions';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';
import { logtoConfig } from '../../../logto';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const action = searchParams.get('action');

  if (action === 'sign-in') {
    await handleSignIn(logtoConfig, searchParams);
    redirect('/');
  }

  if (action === 'sign-out') {
    await handleSignOut(logtoConfig);
    redirect('/');
  }

  return new Response('Not found', { status: 404 });
}