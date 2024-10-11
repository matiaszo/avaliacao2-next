/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: 
            [{protocol: "https", hostname: "dragonball-api.com"}]
    },

    rewrites: () =>{

        return[
            {
                source: "/",
                destination: "/home",
            },
            {
                source: "/segunda-rota",
                destination: "/axios-page",
            },
            {
                source: "/terceira-rota",   
                destination: "/server-side",
            }

        ]
    }
};

export default nextConfig;
