import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 启用静态导出，用于 IIS 部署
  images: {
    unoptimized: true, // 静态导出需要禁用图片优化
  },
};

export default nextConfig;
