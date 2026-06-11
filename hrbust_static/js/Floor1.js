/*自动切换图片*/
//利用闭包 只有toggleChange能访问timer
//创建匿名函数 让函数作为返回值返回 定义变量引用他

// const dots = Array.from(document.querySelectorAll(".dot a"));
// document.addEventListener("click", (event) => {
//   const index = dots.indexOf(event.target);
//   if (index != -1) {
//     //切换图片
//     const current = document.querySelector(".img-list .current");
//     //取得要切换的图片
//     const next = document.querySelectorAll(".img-list li")[index];
//     current.classList.remove("current");
//     next.classList.add("current");
//     //切换active
//     const dotCurrent = document.querySelector(".dot .active");
//     dotCurrent.classList.remove("active");
//     event.target.classList.add("active");
//   }
// });

const toggleFloor1Change = (function () {
  let timer = null;
  return () => {
    //第一次开启 第二次关闭
    //判断timer是否是null
    if (timer === null) {
      timer = setTimeout(function auto() {
        changeFloor1Img("next");
        changeFloor1Dot("next");
        changeFloor1Font("next");
        timer = setTimeout(auto, 3000);
      }, 3000);
    } else {
      clearTimeout(timer);
      timer = null;
    }
  };
})();

toggleFloor1Change(); //默认进入
const floor1 = document.querySelector(".floor1-left-bottom-left"); //返回单个元素

floor1.onmouseenter = () => {
  //鼠标进入则关闭
  toggleFloor1Change();
};
floor1.onmouseleave = () => {
  //鼠标离开则开启
  toggleFloor1Change();
};

const floor1Prev = document.getElementById("floor1Prev");
const floor1Next = document.getElementById("floor1Next");

floor1Prev.onclick = () => {
  changeFloor1Img("prev");
  changeFloor1Dot("prev");
  changeFloor1Font("prev");
};

floor1Next.onclick = () => {
  changeFloor1Img("next");
  changeFloor1Dot("next");
  changeFloor1Font("next");
};
/*
            changeImg 用来切换图片
                dir 切换图片的方向  next   prev
*/

function changeFloor1Img(dir) {
  const current = document.querySelector(".floor1 .current");
  //获取下一张图片
  let next;
  if (dir === "next") {
    next =
      current.nextElementSibling ||
      document.querySelector(".floor1 li:first-child");
    // current 的下一个兄弟元素，如果已经是最后一个，就返回第一个元素
  } else if (dir === "prev") {
    next =
      current.previousElementSibling ||
      document.querySelector(".floor1 li:last-of-type");
    //下一个或最后一个
  }
  current.classList.remove("current");
  next.classList.add("current");
}

function changeFloor1Dot(dir) {
  const dotCurrent = document.querySelector(".dots .active");
  //获取下一张图片
  let next;
  if (dir === "next") {
    next =
      dotCurrent.nextElementSibling ||
      document.querySelector(".dots li:first-child");
    // current 的下一个兄弟元素，如果已经是最后一个，就返回第一个元素
  } else if (dir === "prev") {
    next =
      dotCurrent.previousElementSibling ||
      document.querySelector(".dots li:last-child");
    //下一个或最后一个
  }
  dotCurrent.classList.remove("active");
  next.classList.add("active");
}

function changeFloor1Font(dir) {
  const fontCurrent = document.querySelector(".fonts .active");
  //获取下一张图片
  let next;
  if (dir === "next") {
    next =
      fontCurrent.nextElementSibling ||
      document.querySelector(".fonts li:first-child");
    // current 的下一个兄弟元素，如果已经是最后一个，就返回第一个元素
  } else if (dir === "prev") {
    next =
      fontCurrent.previousElementSibling ||
      document.querySelector(".fonts li:last-child");
    //下一个或最后一个
  }
  fontCurrent.classList.remove("active");
  next.classList.add("active");
}
