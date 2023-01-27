//引入路由组件
import Home from '../pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
//路由配置信息
export default  [
    // 重定向，在项目跑起来的时候，访问/，立马让它定向到首页
    {
        path: "*",
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home,
        meta: {
            show: true
        }
    },
    {
        name: 'detail',
        path: "/detail/:skuid",
        component: Detail,
        meta: {
            show: true
        }
    },
    {
        path: "/search/:keyword?",  //加上?表示params参数可传与不可传
        component: Search,
        meta: {
            show: true
        },
        name: "search",
        //路由组件能不能传递props参数？
        //布尔值写法：params
        // props: true, 只能传递params参数
        // 对象写法：额外的给路由组件传递一些props
        // props:{a:1,b:2}


        // 函数写法（常用）：可以params参数、query参数，通过props传递给路由组件
        // props: ($route) => {
        //     return { keyword: $route.params.keyword, k: $route.query.k }
        // }
        //简写
        props: ($route) => ({ keyword: $route.params.keyword, k: $route.query.k })
    },
    {
        path: "/login",
        component: Login,
        meta: {
            show: false
        }
    },
    {
        path: "/register",
        component: Register,
        meta: {
            show: false
        }
    }
]