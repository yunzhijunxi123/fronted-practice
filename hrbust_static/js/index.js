/*自动切换图片*/
//利用闭包 只有toggleChange能访问timer
//创建匿名函数 让函数作为返回值返回 定义变量引用他
const toggleChange = (function () {
  let timer = null;
  return () => {
    //第一次开启 第二次关闭
    //判断timer是否是null
    if (timer === null) {
      timer = setTimeout(function auto() {
        changeImg("next");
        timer = setTimeout(auto, 3000);
      }, 3000);
    } else {
      clearTimeout(timer);
      timer = null;
    }
  };
})();

toggleChange(); //默认进入
const banner = document.getElementsByClassName("banner")[0];
banner.onmouseenter = () => {
  //鼠标进入则关闭
  toggleChange();
};
banner.onmouseleave = () => {
  //鼠标离开则开启
  toggleChange();
};
//   const auto = document.getElementById("autoChangeBtn");
//   auto.onclick = () => {
//     toggleChange();
//   };

const prev = document.getElementById("bannerPrev");
const next = document.getElementById("bannerNext");

prev.onclick = () => {
  changeImg("prev");
};

next.onclick = () => {
  changeImg("next");
};
/*
            changeImg 用来切换图片
                dir 切换图片的方向  next   prev
*/
function changeImg(dir) {
  const current = document.querySelector(".banner .current");
  //获取下一张图片
  let next;
  if (dir === "next") {
    next =
      current.nextElementSibling ||
      document.querySelector(".banner li:first-child");
    // current 的下一个兄弟元素，如果已经是最后一个，就返回第一个元素
  } else if (dir === "prev") {
    next =
      current.previousElementSibling ||
      document.querySelector(".banner li:last-of-type");
    //下一个或最后一个
  }
  current.classList.remove("current");
  next.classList.add("current");
}
