import { useEffect } from 'react';
import {
  seoDefaults,
  churchJsonLd,
  breadcrumbJsonLd,
  type PageSeo,
} from '@/data/seo';

function upsertMeta(
  attr: 'name' | 'property',
  key: string,
  content: string
) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

interface SeoHeadProps {
  page: PageSeo;
  breadcrumbs?: { name: string; path: string }[];
}

/**
 * Client-side SEO head manager — titles, meta, Open Graph, Twitter, JSON-LD.
 */
export function SeoHead({ page, breadcrumbs }: SeoHeadProps) {
  useEffect(() => {
    const origin = window.location.origin;
    const canonical = `${origin}${page.path === '/' ? '' : page.path}`;
    const title = page.title;
    const description = page.description;
    const imageUrl = `${origin}${page.image || seoDefaults.image}`;
    const keywords = page.keywords || seoDefaults.keywords;

    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords);
    upsertMeta('name', 'author', seoDefaults.siteName);
    upsertMeta('name', 'robots', page.noIndex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large');
    upsertMeta('name', 'theme-color', '#d32027');
    upsertMeta('name', 'geo.region', 'GH-AH');
    upsertMeta('name', 'geo.placename', 'Anwomaso, Ashanti Region, Ghana');

    upsertLink('canonical', canonical);

    // Open Graph
    upsertMeta('property', 'og:type', page.type || 'website');
    upsertMeta('property', 'og:site_name', seoDefaults.siteName);
    upsertMeta('property', 'og:locale', seoDefaults.locale);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('property', 'og:image:alt', seoDefaults.imageAlt);

    // Twitter
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', imageUrl);

    upsertJsonLd('seo-church-jsonld', churchJsonLd(origin));

    if (breadcrumbs?.length) {
      upsertJsonLd(
        'seo-breadcrumb-jsonld',
        breadcrumbJsonLd(breadcrumbs, origin)
      );
    } else {
      document.getElementById('seo-breadcrumb-jsonld')?.remove();
    }
  }, [page, breadcrumbs]);

  return null;
}
