import { NextRequest } from 'next/server';
import { redirect } from 'next/navigation';

export async function GET(request: NextRequest) {
  try {
    // Por ahora, simplemente redirigimos al dashboard
    // El manejo del token se hará en el cliente
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    
    if (code && state) {
      // Login exitoso, redirigir a home
      return redirect('/home');
    } else {
      // Error en el login, redirigir al inicio
      return redirect('/');
    }
  } catch (error) {
    console.error('Callback error:', error);
    return redirect('/');
  }
}