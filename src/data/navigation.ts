type NavLink = { href: string; label: string };

export const NAV_LINKS: Record<'es' | 'en', NavLink[]> = {
  es: [
    { href: '/es', label: 'Inicio' },
    { href: '/es/services', label: 'Servicios' },
    { href: '/work', label: 'Casos' },
    { href: '/blog', label: 'Blog' },
    { href: '/es/contact', label: 'Contacto' }
  ],
  en: [
    { href: '/en', label: 'Home' },
    { href: '/en/services', label: 'Services' },
    { href: '/en/work', label: 'Work' },
    { href: '/en/blog', label: 'Blog' },
    { href: '/en/contact', label: 'Contact' }
  ]
};

export const LANGUAGE_SWITCH: Record<'es' | 'en', { href: string; label: string }> = {
  es: { href: '/en', label: 'English' },
  en: { href: '/es', label: 'Español' }
};
