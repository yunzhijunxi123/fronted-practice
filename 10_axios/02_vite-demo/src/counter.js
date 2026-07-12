// ==========================================
//  计数器模块 — 演示 HMR（热模块替换）
// ==========================================

// ✅ 修改这个文件保存后，页面不刷新但自动更新
//   这就是 HMR — Vite 的核心卖点

export function setupCounter(element, button) {
  let count = 0;

  const setCounter = (val) => {
    count = val;
    element.innerHTML = `<h2>当前计数：${count}</h2>`;
  };

  button.addEventListener("click", () => setCounter(count + 1));
  setCounter(0);
}
