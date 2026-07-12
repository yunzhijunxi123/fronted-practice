// ==========================================
//  Vite 核心特性演示 — 入口文件
// ==========================================

// ✅ 特性1：原生 ESM — 浏览器直接识别 import/export
import { setupCounter } from "./counter.js";
import { showFeatures } from "./features.js";
import "./style.css";

// ✅ 特性2：Vite 会直接导入 .css 文件，HMR 热更新
// ✅ 特性3：导入 JSON 文件（无需额外配置）
import pack from "../package.json";

// ✅ 特性4：环境变量
console.log("🔧 运行模式:", import.meta.env.MODE);       // development / production
console.log("🔧 基础路径:", import.meta.env.BASE_URL);    // /
console.log("📦 项目名称:", pack.name);

// 启动计数器
setupCounter(document.querySelector("#counter"), document.querySelector("#btn"));

// 展示特性列表
showFeatures();

// ✅ 特性5：动态 import — 按需加载，自动代码分割
document.querySelector("#btn").addEventListener("click", async () => {
  // 这句代码只在点击时才加载 heavy.js
  // Vite 构建时会自动把 heavy.js 拆成独立的 chunk
  // const { heavyCalc } = await import("./heavy.js");
  // heavyCalc();
});
