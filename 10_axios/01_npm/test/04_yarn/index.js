//导入http模块
const http = require("http")
//创建服务对象
const server = http.createServer((request,response)=>{
    response.setHeader("content-type","text/html;charset=utf-8");
    response.end("你好x");//设置响应体
})
server.listen(9000,()=>{
    console.log("服务已启动.......");
    
})