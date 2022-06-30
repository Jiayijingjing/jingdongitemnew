// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'



// 使用路由插件
Vue.use(VueRouter)

// 引入路由组建
const Searchhome = () => import('@/pages/searchhome')
const List = () => import('@/pages/list')
const Login = () => import('@/pages/login')


//保存原型对象的Pushs
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
//重写push方法
VueRouter.prototype.push = function (location, res, rej) {
  if (res && rej) {
    originPush.call(this, location, res, rej)
  }
  else {
    originPush.call(this, location, () => { }, () => { })
  }
 
}
//重写replace方法
VueRouter.prototype.replace = function (location, res, rej) {
  if (res && rej) {
    originReplace.call(this, location, res, rej)
  }
  else {
    originReplace.call(this, location, () => { }, () => { })
  }
 
}

// 配置路由
 const router = new VueRouter({
    // 配置路由
    mode:'hash',
    routes:[
        {
            name:'home',
            path:"/home",
            component:List,
            meta:{
                footshow:true
            }
          
        },
        {
          name:'searchlist',
          path:"/search/:keyword", // ? 代表此数据可传递也可不传递
          component:Searchhome,
          meta:{
              footshow:true
          },
          
      },
      {
        name:'login',
        path:"/login",
        component:Login,
        meta:{
            footshow:true
        }
      
    },
        // {
        //     name:'list',
        //     path:"/list/:keyword",
        //     components:{
        //         one:Middle,
        //         two:Table
                
        //     },
        //     meta:{
        //       footshow:false
        //     }
        // },
        // {
        //     name:'middle',
        //     path:"/middle",
        //     components:{
        //         one:List,
        //         two:Middle
                
        //     },
        //     meta:{
        //       footshow:false
        //     }
        // },
        {
            path:"*",
            redirect:"Home"
        }
    ]
})

//全局前置路由守卫----切换路由之前，初始化被调用、每次路由切换之前被调用 可利用存储在路由中meta中的数据与用户信息判断用户是否具备权限进入该路由
router.beforeEach((to,from,next) => {
  next();
})

//全局后置路由守卫  切换路由后
 router.afterEach((to,from) => {

 })

export default router;