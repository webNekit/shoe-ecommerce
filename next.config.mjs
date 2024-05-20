/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['localhost'],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337",
                pathname: "/uploads/**/*",
            },
            {
                protocol: "https",
                hostname: "shoe-ecommerce-backend-wm0e.onrender.com"
            }
        ],
    },
};

export default nextConfig;
