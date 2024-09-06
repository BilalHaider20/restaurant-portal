import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        base_url: 'http://restaurants-uat.bookmepk.com',
    },
};
 
export default withNextIntl(nextConfig);