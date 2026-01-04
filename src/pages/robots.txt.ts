import { SITE_ORIGIN } from '../config/site';

export function GET() {
  const body = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${SITE_ORIGIN}/sitemap-index.xml`
  ].join('\n');

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
