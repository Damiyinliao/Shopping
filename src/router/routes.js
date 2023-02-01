//引入路由组件
// import Home from '../pages/Home'
const Home = () => import('@/pages/Home')

// import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

/**
 * 当打包构建应用时，Javascript 包含变得非常大，影响页面加载
 * 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了
 */




//路由配置信息
export default [
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
        // component: ()=>import('@/pages/Detail'),
        meta: {
            show: true
        }
    },
    {
        path: "/search/:keyword?",  //加上?表示params参数可传与不可传
        component: ()=>import('@/pages/Search'),    //路由懒加载写法
        // component: Search,
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
    },
    {
        name: "addcartsuccess",
        path: "/addcartsuccess",
        component: AddCartSuccess,
        meta: {
            show: true
        }
    },
    {
        name: "shopcart",
        path: "/shopcart",
        component: ShopCart,
        meta: {
            show: true
        }
    },
    {
        name: "trade",
        path: "/trade",
        component: Trade,
        meta: {
            show: true
        },
        //路由独享守卫
        beforeEnter: (to, from, next) => {
            //去交易页面，必须从购物车页面来
            if(from.path == "/shopcart"){
                next();
            }else{
                next(false);
            }
        }
    },
    {
        name: "pay",
        path: "/pay",
        component: Pay,
        meta: {
            show: true
        },
        beforeEnter: (to, from, next) => {
            if(from.path == "/trade"){
                next();
            }else{
                next(false);
            }
        }
    },
    {
        name: "payscuccess",
        path: "/payscuccess",
        component: PaySuccess,
        meta: {
            show: true
        }
    },
    {
        name: "center",
        path: "/center",
        component: Center,
        meta: {
            show: true
        },
        //二级路由组件
        children: [
            {
                path: 'myorder',
                component: MyOrder,
            },
            {
                path: 'grouporder',
                component: GroupOrder
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
]