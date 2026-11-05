export default function middleware(request) {
  const authorizationHeader = request.headers.get('authorization');

  if (authorizationHeader) {
    const basicAuth = authorizationHeader.split(' ')[1];
    const [user, password] = atob(basicAuth).split(':');

    // Change 'admin' and 'secret' to your chosen username and password below:
    if (user === 'visbiome' && password === 'XTr64_h5%3hlG0G') {
      return new Response(null, {
        headers: { 'x-middleware-next': '1' }
      });
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"'
    }
  });
}