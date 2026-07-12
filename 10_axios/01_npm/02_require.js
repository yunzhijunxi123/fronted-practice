/*
    在当前文件夹下node_modules寻找同名文件夹
    在上级目录中node_modules寻找同名文件夹，直到找到磁盘根目录
*/ 
const uniq = require("uniq");
let arr = [6, 5, 2, 3, 4, 1];
const result = uniq(arr);
console.log(result);
