# NPM 知识体系整理（P74-P90）

> 课程：尚硅谷 Node.js零基础教程 — nodejs新手到高手  
> 模块：es6模块化、npm、express、MongoDB  
> 整理范围：P74 ~ P90（npm 专题）  
> 用途：组会汇报

---

## 📋 章节总览

| 集数 | 主题 | 核心内容 |
|------|------|----------|
| P74 | npm 简介 | 什么是 npm、包管理器的意义 |
| P75 | package.json 详解 | 配置文件各字段含义 |
| P76 | npm init | 初始化项目 |
| P77 | npm install | 安装第三方包 |
| P78 | npm uninstall | 卸载包 |
| P79 | 全局安装 vs 本地安装 | `-g` 参数的使用场景 |
| P80 | dependencies vs devDependencies | 生产依赖与开发依赖 |
| P81 | npm scripts | 自定义脚本命令 |
| P82 | package-lock.json | 依赖锁定文件 |
| P83 | 版本号管理 (SemVer) | `^`、`~`、`*` 的含义 |
| P84 | npx 命令 | 临时执行包命令 |
| P85 | cnpm / 镜像源 | 淘宝镜像配置 |
| P86 | yarn 简介 | 另一款包管理器 |
| P87 | yarn 基本使用 | yarn add / remove |
| P88 | npm 发布包 | 发布自己的 npm 包 |
| P89 | npm 配置 | `.npmrc` 与 `npm config` |
| P90 | 总结复习 | 知识点串联回顾 |

---

## 一、npm 基础概念（P74）

### 什么是 npm
- **Node Package Manager** — Node.js 官方包管理工具
- 随 Node.js 一起安装，无需额外安装
- 全球最大的开源包生态系统（npm registry）

### 核心作用
1. **下载**第三方包，解决依赖问题
2. **管理**项目中的包版本
3. **发布**自己的包供他人使用

```bash
# 查看 npm 版本
npm -v
```

---

## 二、package.json（P75-P76）

### 是什么
项目的**配置文件**和**身份标识**，记录项目的元信息和依赖关系。

### npm init（P76）
```bash
# 交互式创建（一问一答）
npm init

# 快速创建（全部默认值）
npm init -y
```

### 关键字段说明

| 字段 | 说明 | 示例 |
|------|------|------|
| `name` | 包名（小写、无空格） | `"01_npm"` |
| `version` | 版本号（SemVer） | `"1.0.0"` |
| `main` | 入口文件 | `"index.js"` |
| `scripts` | 自定义脚本 | `{"start": "node index.js"}` |
| `dependencies` | **生产**依赖 | `"jquery": "^4.0.0"` |
| `devDependencies` | **开发**依赖 | `"less": "^4.6.7"` |
| `license` | 开源协议 | `"MIT"`, `"ISC"` |

---

## 三、包的安装与卸载（P77-P78）

### 安装包（P77）
```bash
# 安装并写入 dependencies
npm install jquery
npm i jquery          # 简写

# 安装并写入 devDependencies
npm install less --save-dev
npm i less -D         # 简写

# 安装指定版本
npm i jquery@3.7.1

# 根据 package.json 安装全部依赖
npm install
npm i
```

### 卸载包（P78）
```bash
npm uninstall jquery
npm un jquery         # 简写
npm un less -D        # 同时从 devDependencies 中移除
```

---

## 四、全局安装 vs 本地安装（P79）

| 对比项 | 本地安装 | 全局安装 `-g` |
|--------|----------|---------------|
| 命令 | `npm i pkg` | `npm i -g pkg` |
| 安装位置 | `./node_modules` | 系统全局目录 |
| 使用方式 | `npx pkg` / scripts | 终端直接调用 |
| 典型场景 | 项目依赖（jquery） | 工具包（nodemon） |

```bash
# 全局安装工具包
npm i -g nodemon
npm i -g json-server

# 查看全局安装位置
npm root -g
```

---

## 五、依赖分类（P80）

```
dependencies          ← 生产环境需要
    └── jquery, axios, express ...

devDependencies       ← 仅开发时需要
    └── less, webpack, eslint ...
```

**判断原则：**
- 上线后代码还需要的 → `dependencies`
- 只在构建/编译/测试时用的 → `devDependencies`

---

## 六、npm scripts（P81）

在 `package.json` 中定义快捷命令：

```json
{
  "scripts": {
    "start": "node index.js",
    "server": "node ./03_http.js",
    "test": "echo \"Error: no test\" && exit 1"
  }
}
```

```bash
npm start        # 运行 start 脚本（可省略 run）
npm run server   # 运行自定义脚本
npm test         # 运行 test 脚本
```

**常用场景：** 启动服务、运行构建、执行测试

---

## 七、package-lock.json（P82）

### 作用
- **锁定**依赖的精确版本号
- 保证团队成员安装的依赖**完全一致**
- 记录下载地址，加速安装

```json
{
  "node_modules/jquery": {
    "version": "4.0.0",
    "resolved": "https://registry.npmjs.org/jquery/-/jquery-4.0.0.tgz",
    "integrity": "sha512-..."
  }
}
```

> ⚠️ `package-lock.json` 应提交到 git，不要加入 `.gitignore`

---

## 八、版本号管理 — SemVer（P83）

### 版本格式：`主版本.次版本.修订号`
```
    4  .  0  .  0
   主版本  次版本  修订号
   (大改)  (新功能)  (Bug修复)
```

### 版本符号含义

| 写法 | 含义 | 允许范围 |
|------|------|----------|
| `"4.0.0"` | 锁定精确版本 | 仅 4.0.0 |
| `"^4.0.0"` | 兼容小版本 | 4.0.0 → <5.0.0 |
| `"~4.0.0"` | 兼容修订号 | 4.0.0 → <4.1.0 |
| `"*"` | 任意版本 | 所有 |

```bash
# 推荐：npm install 默认使用 ^
npm i jquery        # → "jquery": "^4.0.0"
npm i jquery -E     # → "jquery": "4.0.0"（精确版）
```

---

## 九、npx 命令（P84）

### 问题
全局安装工具包会污染环境，本地安装的包无法直接在终端调用。

### 解决
```bash
# 不需要全局安装，临时执行
npx json-server --watch db.json --port 3000
npx create-react-app my-app

# 对比
npm i -g json-server && json-server --watch db.json   # 老方法
npx json-server --watch db.json                        # 新方法 ✅
```

**npx 查找顺序：** node_modules/.bin → $PATH → 临时下载 → 执行后删除

---

## 十、cnpm 与镜像源（P85）

### 为什么需要
npm 官方源在国外，下载速度慢或失败。

### 解决方案

```bash
# 方式一：安装 cnpm
npm install -g cnpm --registry=https://registry.npmmirror.com
cnpm install jquery

# 方式二：直接配置 npm 源（推荐）
npm config set registry https://registry.npmmirror.com

# 查看当前源
npm config get registry

# 恢复官方源
npm config set registry https://registry.npmjs.org
```

---

## 十一、yarn（P86-P87）

### 对比 npm
| 特性 | npm | yarn |
|------|-----|------|
| 安装速度 | 较慢（早期） | 更快（并行下载） |
| 锁文件 | package-lock.json | yarn.lock |
| 离线缓存 | ❌ | ✅ |
| 安全性 | 自动计算 | 校验和验证 |

### 基本命令对照
```bash
npm install          →   yarn / yarn install
npm i jquery         →   yarn add jquery
npm i less -D        →   yarn add less --dev
npm un jquery        →   yarn remove jquery
npm run server       →   yarn server
npx pkg              →   yarn dlx pkg
```

---

## 十二、发布自己的 npm 包（P88）

```bash
# 1. 初始化包
npm init -y

# 2. 编写代码

# 3. 登录 npm 账号
npm login

# 4. 发布
npm publish

# 5. 更新版本后重新发布
npm version patch    # 1.0.0 → 1.0.1
npm version minor    # 1.0.0 → 1.1.0
npm version major    # 1.0.0 → 2.0.0
npm publish
```

---

## 十三、npm 配置（P89）

```bash
# 查看所有配置
npm config list

# 常用配置项
npm config set registry https://registry.npmmirror.com
npm config set save-exact true        # 安装时默认精确版本
npm config set init-author-name "YourName"

# 配置文件位置
# 项目级：.npmrc（项目根目录）
# 用户级：~/.npmrc
# 全局级：$PREFIX/etc/npmrc
```

---

## 📊 知识体系总结（P90）

```
npm 知识图谱
│
├── 基础操作
│   ├── npm init          → 项目初始化
│   ├── npm install       → 安装依赖
│   ├── npm uninstall     → 卸载依赖
│   └── npm update        → 更新依赖
│
├── package.json
│   ├── dependencies      → 生产依赖
│   ├── devDependencies   → 开发依赖
│   ├── scripts           → 自定义脚本
│   └── version           → SemVer 版本号
│
├── 进阶工具
│   ├── npx               → 临时执行包命令
│   ├── cnpm              → 国内镜像加速
│   ├── yarn              → 替代包管理器
│   └── package-lock.json → 依赖锁定
│
└── 工程化
    ├── npm config         → 配置管理
    ├── npm publish        → 发布包
    └── npm version        → 版本管理
```


---

## 🖥️ 命令行操作速查

### 项目初始化
| 命令 | 说明 |
|------|------|
| `npm init` | 交互式创建 package.json |
| `npm init -y` | 跳过问答，全部默认值 |

### 安装依赖
| 命令 | 说明 |
|------|------|
| `npm install` / `npm i` | 根据 package.json 安装全部依赖 |
| `npm i pkg` | 安装到 dependencies |
| `npm i pkg -D` | 安装到 devDependencies |
| `npm i pkg -g` | 全局安装（工具类） |
| `npm i pkg@3.7.1` | 安装指定版本 |
| `npm i pkg -E` | 安装精确版本（不带 ^） |

### 卸载依赖
| 命令 | 说明 |
|------|------|
| `npm uninstall pkg` / `npm un pkg` | 卸载并移出 dependencies |
| `npm un pkg -D` | 卸载并移出 devDependencies |
| `npm un pkg -g` | 卸载全局包 |

### 更新依赖
| 命令 | 说明 |
|------|------|
| `npm update` | 按 SemVer 规则更新所有包 |
| `npm update pkg` | 更新指定包 |
| `npm outdated` | 查看哪些包有可更新版本 |

### Scripts 脚本
| 命令 | 说明 |
|------|------|
| `npm start` | 运行 start 脚本（可省略 run） |
| `npm test` | 运行 test 脚本 |
| `npm run server` | 运行自定义脚本 |

### npx 临时执行
| 命令 | 说明 |
|------|------|
| `npx create-react-app my-app` | 免全局安装，临时执行脚手架 |
| `npx json-server --watch db.json` | 临时启动 json-server |

### 查看信息
| 命令 | 说明 |
|------|------|
| `npm -v` | 查看 npm 版本 |
| `npm root -g` | 查看全局 node_modules 路径 |
| `npm list --depth=0` | 查看当前项目顶层依赖 |
| `npm list -g --depth=0` | 查看全局安装的包 |

### 镜像与 cnpm
| 命令 | 说明 |
|------|------|
| `npm config get registry` | 查看当前镜像源 |
| `npm config set registry https://registry.npmmirror.com` | 切换淘宝源 |
| `npm config set registry https://registry.npmjs.org` | 恢复官方源 |
| `npm i -g cnpm --registry=https://registry.npmmirror.com` | 安装 cnpm |
| `cnpm i pkg` | 通过 cnpm 安装 |

### npm config 配置
| 命令 | 说明 |
|------|------|
| `npm config list` | 查看所有配置 |
| `npm config set save-exact true` | 安装时默认精确版本 |
| `npm config set init-author-name "name"` | 设置默认作者名 |

### 发布包
| 命令 | 说明 |
|------|------|
| `npm login` | 登录 npm 账号 |
| `npm publish` | 发布当前包 |
| `npm version patch` | 修订号 +1（1.0.0 → 1.0.1） |
| `npm version minor` | 次版本 +1（1.0.0 → 1.1.0） |
| `npm version major` | 主版本 +1（1.0.0 → 2.0.0） |

### yarn 对照
| 操作 | npm | yarn |
|------|-----|------|
| 初始化 | `npm init -y` | `yarn init -y` |
| 安装全部 | `npm i` | `yarn` / `yarn install` |
| 安装包 | `npm i pkg` | `yarn add pkg` |
| 开发依赖 | `npm i pkg -D` | `yarn add pkg --dev` |
| 卸载 | `npm un pkg` | `yarn remove pkg` |
| 全局安装 | `npm i -g pkg` | `yarn global add pkg` |
| 运行脚本 | `npm run dev` | `yarn dev` |
| 临时执行 | `npx pkg` | `yarn dlx pkg` |

### pnpm 对照
| 操作 | npm | pnpm | 说明 |
|------|-----|------|------|
| 初始化 | `npm init -y` | `pnpm init -y` | 创建 package.json |
| 安装全部 | `npm i` | `pnpm install` / `pnpm i` | 根据 lock 文件安装 |
| 安装包 | `npm i pkg` | `pnpm add pkg` | 安装到 dependencies |
| 开发依赖 | `npm i pkg -D` | `pnpm add pkg -D` | 安装到 devDependencies |
| 全局安装 | `npm i -g pkg` | `pnpm add -g pkg` | 全局安装 |
| 卸载 | `npm un pkg` | `pnpm remove pkg` / `pnpm rm pkg` | 移除依赖 |
| 更新 | `npm update` | `pnpm update` / `pnpm up` | 更新所有依赖 |
| 更新指定 | `npm update pkg` | `pnpm up pkg` | 更新指定包 |
| 运行脚本 | `npm run dev` | `pnpm dev` | run 可省略 |
| 临时执行 | `npx pkg` | `pnpm dlx pkg` | 免安装临时运行 |
| 交互式升级 | 无 | `pnpm up --interactive` / `pnpm up -i` | 选择要升级的包 |
| 查看依赖 | `npm list --depth=0` | `pnpm list --depth=0` | 查看顶层依赖 |
| 查看过期包 | `npm outdated` | `pnpm outdated` | 列出可更新包 |
| 清理缓存 | `npm cache clean` | `pnpm store prune` | 清理无用缓存 |

**pnpm 核心特性：**
- **硬链接 + 符号链接** — 全局仓库存储一份，项目 `node_modules` 使用链接引用，极大节省磁盘
- **严格的依赖隔离** — 未声明的依赖在代码中无法 `require`，避免幽灵依赖


---

## 💡 重点记忆

1. **`npm i pkg`** → dependencies；**`npm i pkg -D`** → devDependencies
2. **`^4.0.0`** 不锁主版本；**`~4.0.0`** 不锁次版本
3. **`npx`** 免全局安装执行工具包
4. **淘宝源：** `registry.npmmirror.com`
5. **`package-lock.json`** 必须提交 Git
6. **`scripts`** 用 `npm run xxx` 执行
