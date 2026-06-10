/**
 * 哈尔滨理工大学计算机科学与技术学院
 * 登录/注册页面 - 模拟交互逻辑
 */

(function () {
  "use strict";

  //模拟用户数据库 localStorage 浏览器提供的仓库 关了浏览器 数据还在
  // 仓库取出  →  null 或 "JSON字符串"  →  转成 JS 数组  →  赋值给 usersDB
  var usersDB = JSON.parse(localStorage.getItem("hrbust_users") || "[]");

  // 预置一个测试账号
  // if (usersDB.length === 0) {
  //   usersDB.push({
  //     username: "admin",
  //     password: "123456",
  //     registeredAt: new Date().toISOString(),
  //   });
  //   saveUsers();
  // }

  function saveUsers() {
    localStorage.setItem("hrbust_users", JSON.stringify(usersDB));
  }

  // ========== DOM 元素 ==========
  var loginTab = document.getElementById("loginTab");
  var regTab = document.getElementById("regTab");
  var loginForm = document.getElementById("loginForm");
  var regForm = document.getElementById("regForm");
  var loginMsg = document.getElementById("loginMsg");
  var regMsg = document.getElementById("regMsg");

  // ========== Tab 切换 ==========
  loginTab.addEventListener("click", function () {
    loginTab.classList.add("active");
    regTab.classList.remove("active");
    loginForm.classList.add("active");
    regForm.classList.remove("active");
    clearMessages();
  });

  regTab.addEventListener("click", function () {
    regTab.classList.add("active");
    loginTab.classList.remove("active");
    regForm.classList.add("active");
    loginForm.classList.remove("active");
    clearMessages();
  });

  function clearMessages() {
    loginMsg.textContent = "";
    loginMsg.className = "msg";
    regMsg.textContent = "";
    regMsg.className = "msg";
  }

  // ========== 注册逻辑 ==========
  regForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var username = document.getElementById("regUsername").value.trim();
    var password = document.getElementById("regPassword").value;
    var confirm = document.getElementById("regConfirm").value;

    // 表单校验
    if (!username) {
      showMsg(regMsg, "请输入用户名", "error");
      return;
    }
    if (username.length < 3) {
      showMsg(regMsg, "用户名至少 3 个字符", "error");
      return;
    }
    if (!password) {
      showMsg(regMsg, "请输入密码", "error");
      return;
    }
    if (password.length < 6) {
      showMsg(regMsg, "密码至少 6 位", "error");
      return;
    }
    if (password !== confirm) {
      showMsg(regMsg, "两次输入的密码不一致", "error");
      return;
    }

    // 检查用户名是否已存在
    var exists = usersDB.some(function (u) {
      return u.username === username;
    });
    if (exists) {
      showMsg(regMsg, "该用户名已被注册", "error");
      return;
    }

    // 注册成功 - 存入数据库
    var newUser = {
      username: username,
      password: password,
      registeredAt: new Date().toISOString(),
    };
    usersDB.push(newUser);
    saveUsers();

    // 控制台输出注册信息
    console.log("========== 新用户注册 ==========");
    console.log("用户名:   " + newUser.username);
    console.log("密码:     " + newUser.password);
    console.log("注册时间: " + newUser.registeredAt);
    console.log("当前用户总数: " + usersDB.length);
    console.log("=================================");

    showMsg(regMsg, "注册成功！请切换到登录", "success");
    regForm.reset();

    // 自动切换到登录标签
    setTimeout(function () {
      loginTab.click();
    }, 1200);
  });

  // ========== 登录逻辑 ==========
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var username = document.getElementById("loginUsername").value.trim();
    var password = document.getElementById("loginPassword").value;

    if (!username) {
      showMsg(loginMsg, "请输入用户名", "error");
      return;
    }
    if (!password) {
      showMsg(loginMsg, "请输入密码", "error");
      return;
    }

    // 模拟校验 - 查找匹配用户
    var matchedUser = null;
    for (var i = 0; i < usersDB.length; i++) {
      if (usersDB[i].username === username && usersDB[i].password === password) {
        matchedUser = usersDB[i];
        break;
      }
    }

    if (matchedUser) {
      console.log("========== 用户登录成功 ==========");
      console.log("用户名: " + matchedUser.username);
      console.log("登录时间: " + new Date().toISOString());
      console.log("即将跳转到学院官网...");
      console.log("==================================");

      showMsg(loginMsg, "登录成功，正在跳转...", "success");

      // 保存登录状态
      localStorage.setItem("hrbust_logged_in_user", matchedUser.username);

      // 跳转到学院官网
      setTimeout(function () {
        window.location.href = "index.html";
      }, 800);
    } else {
      console.log("========== 登录失败 ==========");
      console.log("尝试账号: " + username);
      console.log("失败原因: 用户名或密码错误");
      console.log("==============================");

      showMsg(loginMsg, "用户名或密码错误", "error");
    }
  });

  // ========== 辅助函数 ==========
  function showMsg(el, text, type) {
    el.textContent = text;
    el.className = "msg " + type;
  }
})();
