import createMiddleware from 'next-intl/middleware';
 import {locales,localePrefix,pathnames} from './config';
export default createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix,
  pathnames,
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*']
};