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
                source: "/pagina-axios",
                destination: "/axios-page",
            },
            {
                source: "/pagina-server-side",
                destination: "/server-side",
            }

        ]
    }
};

export default nextConfig;
