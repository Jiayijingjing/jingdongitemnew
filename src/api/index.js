//当前这个模块,API进行统一管理
import requests from "./request";



//三级联动接口
//发请求:axios发请求返回结果Promise 对象

//测试接口
export const reqCategoryList = () => {
    return requests({ url:'https://api.apiopen.top/api/sentences',method:'get'});
}