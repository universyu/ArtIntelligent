import createMiddleware from 'next-intl/middleware';
 import {locales} from './i18n'
export default createMiddleware({
  locales,
  defaultLocale: 'zh'
});
 
export const config = {
  matcher: ['/', '/(zh|en)/:path*']
};