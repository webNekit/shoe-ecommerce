/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [process.env.NEXT_PUBLIC_HOST_NAME, 'localhost']
    }
};

export default nextConfig;
