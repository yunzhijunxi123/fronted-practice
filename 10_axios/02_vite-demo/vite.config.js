import { defineConfig } from "vite";

export default defineConfig({
  // 开发服务器配置
  server: {
    port: 3000,        // 端口号
    open: true,        // 自动打开浏览器
  },
  // 构建配置
  build: {
    outDir: "dist",    // 输出目录
  },
});
