import { useEffect } from 'react';

interface SEOOptions {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  /** JSON-LD structured data object */
  structuredData?: object;
}

const SITE_NAME = 'Studies in Indo-Semitic Christianity Journal';
const BASE_URL = 'https://jsisc.in';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setStructuredData(data: object) {
  const id = 'seo-json-ld';
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  structuredData,
}: SEOOptions) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    // Standard meta
    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);

    // Robots
    setMeta('robots', 'index, follow');

    // Canonical
    const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
    setLink('canonical', canonicalUrl);

    // Open Graph
    setMeta('og:type', ogType, true);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:site_name', SITE_NAME, true);
    setMeta('og:locale', 'en_IN', true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // JSON-LD
    if (structuredData) {
      setStructuredData(structuredData);
    }
  }, [title, description, keywords, canonical, ogType, ogImage, structuredData]);
}
