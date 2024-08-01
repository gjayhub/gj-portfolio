/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io",
      "expo.dev",
      "supabase.com",
      "zustand-demo.pmnd.rs", // Microlink Image Preview
    ],
  },
};

export default nextConfig;
