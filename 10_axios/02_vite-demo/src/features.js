// ==========================================
//  特性展示模块
// ==========================================

export function showFeatures() {
  const features = [
    "⚡ 极速冷启动 — 基于 ESM，无需打包",
    "🔥 热模块替换 (HMR) — 修改代码页面不刷新",
    "📦 开箱即用 — TS / JSX / CSS 预处理器",
    "🚀 构建使用 Rollup — 产物极致优化",
    "🔧 环境变量 — import.meta.env",
    "📂 静态资源 — import 图片直接返回 URL",
  ];

  console.log("━━━━ Vite 核心特性 ━━━━");
  features.forEach((f, i) => console.log(`  ${i + 1}. ${f}`));
  console.log("━━━━━━━━━━━━━━━━━━━━━");
}
