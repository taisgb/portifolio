import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { dict, isLang, langs } from '@/content/i18n';
import { site } from '@/content/site';

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = dict[lang];
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: `${site.url}/${lang}/`,
      languages: { 'pt-BR': `${site.url}/pt/`, en: `${site.url}/en/` },
    },
    openGraph: { title: t.metaTitle, description: t.metaDescription, url: `${site.url}/${lang}/`, locale: lang === 'pt' ? 'pt_BR' : 'en_US', type: 'website' },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <div lang={lang === 'pt' ? 'pt-BR' : 'en'}>
      <a href="#conteudo" className="skip-link">
        {dict[lang].skip}
      </a>
      {children}
    </div>
  );
}
