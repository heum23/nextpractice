import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // 정적 사이트 배포를 위한 설정 추가
};

export default nextConfig;
