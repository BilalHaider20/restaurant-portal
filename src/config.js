import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'en' ;
export const locales = ['en', 'ar'] ;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    ar: '/pfadnamen'
  }
};

export const localePrefix = 'always';
