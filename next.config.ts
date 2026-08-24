import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',   // Genera HTML estático
  images: {
    unoptimized: true, // Necesario para GitHub Pages
  },
  // Si tu repositorio se llama distinto a <usuario>.github.io, debes definir basePath
  // Por ejemplo, si tu repo se llama "aura":
  // basePath: '/aura',
  // assetPrefix: '/aura',
};

export default nextConfig;
