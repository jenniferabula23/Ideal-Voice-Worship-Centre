import { churchInfo } from './content';

const SITE_NAME = 'Ideal Voice Worship Centre';
const SITE_TAGLINE = 'The Wealthy Church';
const DEFAULT_DESCRIPTION =
  'Ideal Voice Worship Centre (Ideal Voice HQ) in Anwomaso, Ashanti Region, Ghana — a divine platform where the undiluted, undistorted, and undeviated Word of God is preached and taught. Sunday worship and Miracle Nights under Apostle Dr. Romeo Blankson.';

export const seoDefaults = {
  siteName: SITE_NAME,
  tagline: SITE_TAGLINE,
  description: DEFAULT_DESCRIPTION,
  locale: 'en_GH',
  twitterHandle: '@thewealtharians',
  image: '/images/logo.png',
  imageAlt: `${SITE_NAME} — ${SITE_TAGLINE} logo`,
  keywords: [
    'Ideal Voice Worship Centre',
    'Ideal Voice HQ',
    'The Wealthy Church',
    'Anwomaso church',
    'Ashanti Region church',
    'Kumasi church',
    'Ghana church',
    'Apostle Dr. Romeo Blankson',
    'Miracle Night',
    'Sunday worship Anwomaso',
    'thewealtharians',
  ].join(', '),
};

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
};

export const pageSeo: Record<string, PageSeo> = {
  home: {
    title: `${SITE_NAME} | ${SITE_TAGLINE} · Anwomaso, Ghana`,
    description: DEFAULT_DESCRIPTION,
    path: '/',
  },
  about: {
    title: `About Us | ${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      'Learn the story, beliefs, and mandate of Ideal Voice Worship Centre in Anwomaso, Ghana. Undiluted Word and Spirit-filled worship.',
    path: '/about',
    keywords:
      'about Ideal Voice Worship Centre, Ideal Voice HQ story, Anwomaso church beliefs, The Wealthy Church',
  },
  leadership: {
    title: `Leadership | ${SITE_NAME} — Apostle Dr. Romeo Blankson`,
    description:
      'Meet the leadership of Ideal Voice Worship Centre led by Apostle Dr. Romeo Blankson — pastoral team, worship, women ministry, and next generation leaders.',
    path: '/leadership',
    keywords:
      'Apostle Dr. Romeo Blankson, Ideal Voice pastor, Ideal Voice leadership, Anwomaso pastor',
  },
  ministries: {
    title: `Programs & Ministries | ${SITE_NAME}`,
    description:
      'Weekly programs and ministries at Ideal Voice HQ: Sunday worship, Miracle Night, Singing Ministry, Women Ministry, prayer, youth, and outreach in Anwomaso.',
    path: '/ministries',
    keywords:
      'Ideal Voice ministries, Miracle Night Anwomaso, Women Ministry, Singing Ministry, weekly church programs Ghana',
  },
  sermons: {
    title: `Sermons & Messages | ${SITE_NAME}`,
    description:
      'Watch and listen to sermons from Ideal Voice Worship Centre — undiluted Word teaching, Miracle Night messages, and Spirit-filled preaching from Anwomaso, Ghana.',
    path: '/sermons',
    keywords:
      'Ideal Voice sermons, Anwomaso church messages, Romeo Blankson sermons, Miracle Night message',
  },
  events: {
    title: `Events & Miracle Night | ${SITE_NAME}`,
    description:
      'Upcoming events at Ideal Voice HQ including end-of-month Miracle Night, Sunday worship, and community gatherings in Anwomaso.',
    path: '/events',
    keywords:
      'Miracle Night Ideal Voice, church events Anwomaso, Ideal Voice HQ events, end of month service Ghana',
  },
  visit: {
    title: `Plan Your Visit | ${SITE_NAME} Anwomaso`,
    description:
      'Plan your visit to Ideal Voice Worship Centre in Anwomaso, Ashanti Region. Sunday services 8:00 AM–11:00 AM. Directions, FAQs, and what to expect.',
    path: '/visit',
    keywords:
      'visit Ideal Voice Anwomaso, church near Kumasi, Anwomaso church directions, Ideal Voice service times',
  },
  giving: {
    title: `Give & Partner | ${SITE_NAME}`,
    description:
      'Partner with Ideal Voice Worship Centre through giving — support worship, outreach, and Miracle Night in Anwomaso, Ghana.',
    path: '/giving',
    keywords:
      'give to Ideal Voice, church offering Ghana, support Ideal Voice HQ, The Wealthy Church giving',
  },
  contact: {
    title: `Contact Us | ${SITE_NAME}`,
    description: `Contact Ideal Voice Worship Centre — phone ${churchInfo.phone}, email ${churchInfo.email}, Anwomaso, Ashanti Region, Ghana. Facebook: Ideal Voice HQ.`,
    path: '/contact',
    keywords:
      'contact Ideal Voice Worship Centre, Ideal Voice phone, Anwomaso church contact, thewealthychurch.2010@gmail.com',
  },
};

/** JSON-LD for Google / search engines */
export function churchJsonLd(canonicalOrigin = '') {
  const url = canonicalOrigin || undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'Church',
    '@id': url ? `${url}/#church` : undefined,
    name: SITE_NAME,
    alternateName: ['Ideal Voice HQ', 'The Wealthy Church', 'IVWC'],
    description: DEFAULT_DESCRIPTION,
    url: url || undefined,
    image: url ? `${url}/images/logo.png` : '/images/logo.png',
    logo: url ? `${url}/images/logo-mark.png` : '/images/logo-mark.png',
    telephone: churchInfo.phone,
    email: churchInfo.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Anwomaso',
      addressRegion: 'Ashanti Region',
      addressCountry: 'GH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.688254,
      longitude: -1.527444,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '08:00',
        closes: '11:00',
      },
    ],
    founder: {
      '@type': 'Person',
      name: 'Apostle Dr. Romeo Blankson',
      jobTitle: 'Senior Pastor',
    },
    sameAs: [churchInfo.socials.facebook],
    slogan: SITE_TAGLINE,
    keywords: seoDefaults.keywords,
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
  origin: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${origin}${item.path}`,
    })),
  };
}
