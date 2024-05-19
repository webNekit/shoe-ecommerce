/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [process.env.NEXT_PUBLIC_STRAPI_API_URL, 'localhost', 'https://shoe-ecommerce-backend-wm0e.onrender.com', 'shoe-ecommerce-backend-wm0e.onrender.com']
    }
};

export default nextConfig;
