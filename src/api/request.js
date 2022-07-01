
import axios from "axios";
//此处可以引入进度条 nprogress及进度条样式

//利用axios对象的方法creat，去创建一个axios实例
const requests = axios.create({
    //基础路径 发请求的时候，路径当中会出现api
    baseURL:"/api", 
    //代表请求超时的时间5s
    timeout:5000,

})
 //请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情

 requests.interceptors.request.use((config) => {
    //config: 配置对象，对象里面有一个属性很重要，headers请求头
    //此处可以使用进度条开始
    return config;


 })

//响应拦截器
requests.interceptors.response.use((res) => {
    //此处可以设置进度条结束
    return res.data;
},(error) =>{
    //响应失败的回调函数
    return Promise.reject(new Error('faile'));
})

export default requests;