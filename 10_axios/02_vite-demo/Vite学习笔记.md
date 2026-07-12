
# ⚡ Vite 快速上手

---

## 一、Vite 是什么

> 下一代前端构建工具，由 Vue 作者尤雨溪开发。

**核心卖点：**
- **开发时**用浏览器原生 ESM，冷启动毫秒级
- **生产时**用 Rollup 打包，产物极致优化
- **HMR（热模块替换）** — 改代码页面不刷新，状态保留，速度极快

---

## 二、快速开始

```bash
# 1. 创建项目（推荐）
npm create vite@latest my-app -- --template vanilla

# 2. 进入项目，装依赖
cd my-app && npm i

# 3. 启动开发服务器
npm run dev

# 4. 构建生产包
npm run build

# 5. 预览构建结果
npm run preview
```

---

## 三、项目结构

```
02_vite-demo/
├── index.html          ← 入口 HTML（放根目录，不是 public）
├── package.json
├── vite.config.js      ← Vite 配置文件
├── public/             ← 静态资源（直接复制到 dist，不处理）
└── src/
    ├── main.js         ← JS 入口
    ├── counter.js      ← 业务模块
    ├── features.js     ← 特性展示
    └── style.css       ← 样式（Vite 原生支持 import .css）
```

### 关键点
- `index.html` 必须放在 **项目根目录**，不是 `public`
- 入口 JS 必须用 `<script type="module" src="/src/main.js"></script>`
- `public` 目录下放不需要编译的静态资源（favicon 等）

---

## 四、核心命令

| 命令 | 作用 | 说明 |
|------|------|------|
| `npm run dev` | 启动开发服务器 | `vite`，默认 http://localhost:5173 |
| `npm run build` | 构建生产包 | `vite build`，输出到 `dist/` |
| `npm run preview` | 预览构建产物 | `vite preview`，先 build 再预览 |
| `npx vite --port 8080` | 指定端口启动 | 临时覆盖端口 |
| `npx vite --host` | 允许局域网访问 | 手机可调试 |

---

## 五、vite.config.js 常用配置

```js
import { defineConfig } from "vite";

export default defineConfig({
  // 开发服务器
  server: {
    port: 3000,        // 端口
    open: true,        // 自动打开浏览器
    proxy: {           // 代理（解决跨域）
      "/api": "http://localhost:5000",
    },
  },

  // 路径别名
  resolve: {
    alias: {
      "@": "/src",     // import xx from "@/counter.js"
    },
  },

  // 构建
  build: {
    outDir: "dist",    // 输出目录
  },

  // 环境变量目录（默认根目录）
  envDir: "./",
});
```

---

## 六、Vite 支持的特性

| 特性 | 如何使用 | 需要装插件？ |
|------|----------|:--:|
| **原生 ESM** | `import` / `export` | ❌ |
| **CSS** | `import "./style.css"` | ❌ |
| **CSS Modules** | 文件名 `*.module.css` | ❌ |
| **JSON** | `import data from "./data.json"` | ❌ |
| **静态资源** | `import img from "./logo.png"` | ❌ |
| **TypeScript** | 文件 `.ts` 直接用 | ❌ |
| **JSX / TSX** | 文件 `.jsx` (需 React/Vue 插件) | ✅ |
| **环境变量** | `import.meta.env.VITE_XXX` | ❌ |
| **动态 import** | `await import("./heavy.js")` | ❌ |
| **路径别名** | `vite.config.js` 配 `resolve.alias` | ❌ |

---

## 七、环境变量

```bash
# .env.development（开发环境）
VITE_API_URL=http://localhost:3000/api
VITE_TITLE=开发环境

# .env.production（生产环境）
VITE_API_URL=https://api.example.com
VITE_TITLE=生产环境
```

```js
// 代码中使用（必须以 VITE_ 开头）
console.log(import.meta.env.VITE_API_URL);  // http://localhost:3000/api
console.log(import.meta.env.MODE);          // "development" 或 "production"
```

---

## 八、Vite vs Webpack

| 对比项 | Vite | Webpack |
|--------|------|---------|
| 启动速度 | 毫秒级（ESM 原生） | 秒级（需全量打包） |
| HMR 速度 | 极快（按需编译） | 随项目变大而变慢 |
| 配置复杂度 | 简洁 | 较复杂 |
| 构建工具 | Rollup | 自建 |
| 生态 | 快速追赶中 | 最成熟 |
| 适用场景 | 新项目首选 | 存量项目 |

---

## 九、本项目演示要点

1. **`main.js`** — 入口，展示 ESM import、JSON 导入、`import.meta.env`
2. **`counter.js`** — 计数器，修改代码保存后页面不刷新但自动更新（HMR）
3. **`features.js`** — 模块化导出，在控制台打印 Vite 特性列表
4. **`style.css`** — 直接 import 样式文件

---

## 🎯 一句话总结

> **Vite = 开发用 ESM（快）+ 构建用 Rollup（优）**，是当前前端项目构建的首选方案。

