'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/** Na raiz do site, leva para /pt/ ou /en/ conforme o idioma do navegador. */
export default function Redirect() {
  const router = useRouter();
  useEffect(() => {
    const en = (navigator.language || '').toLowerCase().startsWith('en');
    router.replace(en ? '/en/' : '/pt/');
  }, [router]);
  return (
    <p style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <a href="/pt/">Português</a> · <a href="/en/">English</a>
    </p>
  );
}
