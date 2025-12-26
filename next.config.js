/** @type {import('next').NextConfig} */
const hasSupabasePublicEnv = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Safe diagnostic: helps confirm Netlify build had env vars (does not print secrets).
console.log(`[build] Supabase public env present: ${hasSupabasePublicEnv}`);

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
