import { PERSON } from './person';

const ENV_SITE = process.env.SITE_URL ?? 'https://maycolljaramillo.com';

export const SITE_ORIGIN = new URL(ENV_SITE).origin;

export const SITE = {
  title: `${PERSON.shortName} - ${PERSON.title.es} - Technical SEO`,
  tagline: 'Infraestructura web estable, indexable y accesible con automatización y medición.',
  description:
    'Ingeniero de Sistemas Senior especializado en automatización, SEO técnico, accesibilidad y plataformas enterprise (AEM, WordPress, React, Firebase) para LATAM, España y EE. UU.',
  author: PERSON.fullName,
  role: `${PERSON.title.es} / ${PERSON.title.en}`,
  email: PERSON.email,
  phone: PERSON.phone,
  location: PERSON.location,
  languages: ['es', 'en'] as const,
  social: {
    linkedin: PERSON.social.linkedin,
    github: PERSON.social.github
  }
} as const;

export const LOCALES = {
  es: { code: 'es', label: 'Español', hrefLang: 'es', basePath: '/es' },
  en: { code: 'en', label: 'English', hrefLang: 'en', basePath: '/en' }
} as const;

export const CONTACT_CTA = {
  primary: {
    label: 'WhatsApp',
    href: 'https://wa.me/50558256796'
  },
  secondary: {
    label: 'Escribir por email',
    href: `mailto:${SITE.email}?subject=Contacto%20desde%20portafolio`
  }
} as const;
