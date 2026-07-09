# Axios 学习笔记

---

## 📘 01 — 课程介绍

### 课程目标
- 由浅入深、通俗易懂地讲解 Axios
- 不仅是「会用」，更要「懂原理」

### 内容结构
- 源码解析：拆解 Axios 内部实现机制
- 模拟实现：手写一个迷你版 Axios，理解拦截器、取消请求等核心原理

### 配套资料
- 关注公众号回复关键词获取

---

## 🛠️ 02 — json-server 搭建模拟服务

### 什么是 json-server
- 一个 Node.js 工具，**30 秒搭建 REST API**
- 只需要一个 JSON 文件，自动生成 CRUD 接口

### 为什么需要它
- 前后端分离开发中，后端接口往往还没写好
- 前端可以用 json-server 独立开发、独立测试，不依赖后端进度

### 安装与启动

```bash
# 全局安装
npm install -g json-server

# 准备数据文件 db.json
{
  "posts": [
    { "id": 1, "title": "hello", "author": "zhangsan" }
  ],
  "comments": [
    { "id": 1, "body": "nice", "postId": 1 }
  ]
}

# 启动服务
json-server --watch db.json --port 3000
```

### 自动生成的接口

| 方法   | 路径              | 功能     |
|--------|-------------------|----------|
| GET    | /posts            | 查全表   |
| GET    | /posts/1          | 查单条   |
| POST   | /posts            | 新增     |
| PUT    | /posts/1          | 全量更新 |
| PATCH  | /posts/1          | 部分更新 |
| DELETE | /posts/1          | 删除     |

支持筛选：`/posts?author=zhangsan`
支持分页：`/posts?_page=1&_limit=5`

---

## 📦 03 — Axios 介绍与配置

### Axios 是什么
- 基于 **Promise** 的 HTTP 客户端
- 同时支持 **浏览器**（XMLHttpRequest）和 **Node.js**（http 模块）
- 比原生 fetch 更强：自动 JSON 转换、拦截器、取消请求、超时控制

### 引入方式

```js
// npm 安装
npm install axios

// ES Module
import axios from 'axios'

// CommonJS
const axios = require('axios')

// CDN（浏览器直接引用）
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### 全局默认配置

```js
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.timeout = 5000          // 5秒超时
axios.defaults.headers.common['Authorization'] = 'Bearer xxx'
```

### 创建实例（推荐）

```js
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' }
})
// 实例之间配置互不影响，适合多后端场景
```

---

## 📤 04 — Axios 基本使用

### GET 请求

```js
// 方式一：直接传 URL
axios.get('/posts').then(res => console.log(res.data))

// 方式二：URL + params 对象
axios.get('/posts', {
  params: { author: 'zhangsan', _limit: 5 }
})
// → 实际请求 /posts?author=zhangsan&_limit=5

// 方式三：async / await（推荐）
async function getPosts() {
  try {
    const res = await axios.get('/posts', { params: { author: 'zhangsan' } })
    console.log(res.data)   // 服务器返回的数据
  } catch (err) {
    console.error('请求失败：', err.message)
  }
}
```

### POST 请求

```js
// 方式一：axios.post(url, data)
axios.post('/posts', {
  title: '新文章',
  author: 'lisi'
})

// 方式二：async / await
async function createPost() {
  const res = await axios.post('/posts', {
    title: '新文章',
    author: 'lisi'
  })
  console.log('创建成功，id：', res.data.id)
}
```

### 请求流程总结

```
发送请求 → 携带 params/data → 服务器处理 → 返回响应 → 读取 res.data
                                                   → 出错则 catch
```

---

## 📨 05 — 其他方式发送请求

### axios.request(config) 通用方法

所有 `axios.get()`、`axios.post()` 本质上都是 `axios.request()` 的语法糖。

```js
axios.request({
  method: 'post',
  url: '/posts',
  data: { title: 'hello' }
})
```

### 配置对象完整字段

```js
{
  url: '/posts',           // 请求路径（拼到 baseURL 后面）
  method: 'get',           // GET / POST / PUT / DELETE / PATCH
  baseURL: 'http://xxx',   // 基础 URL

  // GET 参数——拼到 URL 后面
  params: { id: 1 },

  // POST 请求体——放到 body 里
  data: { title: 'hello' },

  // 自定义请求头
  headers: { 'X-Requested-With': 'XMLHttpRequest' },

  timeout: 5000,           // 超时毫秒数

  // 响应数据类型（默认 json）
  responseType: 'json',    // json / text / blob / arraybuffer

  // 上传下载进度回调
  onUploadProgress: (e) => { /* e.loaded / e.total */ },
  onDownloadProgress: (e) => { /* e.loaded / e.total */ },
}
```

### 请求方法别名

```js
axios.get(url, config)       // GET
axios.post(url, data, config)   // POST
axios.put(url, data, config)    // PUT
axios.delete(url, config)    // DELETE
axios.patch(url, data, config)  // PATCH
```

---

## 📄 06 — 请求响应结果的结构

### 响应对象完整结构

```js
{
  data: { /* 服务器返回的实际数据 */ },

  status: 200,              // HTTP 状态码
  statusText: 'OK',         // 状态文本

  headers: {                // 响应头
    'content-type': 'application/json',
    'content-length': '123'
  },

  config: {                 // 本次请求的完整配置
    url: '/posts',
    method: 'get',
    headers: { /* ... */ }
  },

  request: {                // 原生请求对象
    // 浏览器环境 → XMLHttpRequest 实例
    // Node.js 环境 → http.ClientRequest 实例
  }
}
```

### 关键属性详解

| 属性       | 说明                         | 使用场景                     |
|------------|------------------------------|------------------------------|
| `data`     | 服务器返回的数据体           | 你最关心的，业务数据全在这儿 |
| `status`   | HTTP 状态码（200/404/500等） | 判断请求是否成功             |
| `statusText`| 状态码对应的文本描述        | 辅助调试                     |
| `headers`  | 响应头对象                   | 获取 token、content-type 等  |
| `config`   | 本次请求的配置快照           | 调试时查看实际发出的参数     |

### 使用示例

```js
const res = await axios.get('/posts/1')

console.log(res.data)        // { id: 1, title: 'hello' }
console.log(res.status)      // 200
console.log(res.statusText)  // 'OK'
console.log(res.headers['content-type'])  // 'application/json; charset=utf-8'
console.log(res.config.url)  // '/posts/1'
```