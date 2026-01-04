const ENV_SITE = process.env.SITE_URL ?? 'https://maycolljaramillo.com';

export const SITE_ORIGIN = new URL(ENV_SITE).origin;

export const SITE = {
  title: 'Maycoll Jaramillo · Shopify Developer & Technical SEO',
  tagline: 'Infraestructura web rápida, accesible y lista para conversión.',
  description:
    'Ingeniero de software senior especializado en Shopify, SEO técnico, accesibilidad y automatización para equipos en LATAM, España y EE. UU.',
  author: 'Maycoll de Jesús Jaramillo Vanegas',
  role: 'Shopify Developer & Digital Marketing Specialist',
  email: 'maycoll.jaramil@gmail.com',
  phone: '+505 5825 6796',
  location: 'Managua, Nicaragua',
  languages: ['es', 'en'] as const,
  social: {
    linkedin: 'https://www.linkedin.com/in/maycolljaramillo/',
    github: 'https://github.com/MaycollJaramillo01'
  }
} as const;

export const LOCALES = {
  es: { code: 'es', label: 'Español', hrefLang: 'es', basePath: '/es' },
  en: { code: 'en', label: 'English', hrefLang: 'en', basePath: '/en' }
} as const;

export const CONTACT_CTA = {
  primary: {
    label: 'Agendar llamada',
    href: `mailto:${SITE.email}?subject=Quiero%20agendar%20una%20llamada`
  },
  secondary: {
    label: 'Escribir por email',
    href: `mailto:${SITE.email}?subject=Contacto%20desde%20portafolio`
  }
} as const;
