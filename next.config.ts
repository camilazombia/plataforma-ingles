import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config: any) => {
    return config;
  },
};

module.exports = {
  trailingSlash: true, // 🔴 Puede causar errores en rutas dinámicas
};

export default nextConfig;
