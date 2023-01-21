
import { reqGetSearchInfo } from "@/api"

//search模块的小仓库
const state = {
    searchList:{}
}
const mutations = {
    GETSEARCHINFO(state, data){
        state.searchList = data;
    }
}
const actions = {
    //获取search模块数据
    async getSearchList({commit},params={}){
        //当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
        //params形参，是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params);
        console.log("search result:", result);
        if(result.code == 200){
            commit("GETSEARCHINFO",result.data);
        }
    }
}

//计算属性
//项目当中getters主要的作用是简化仓库当中的数据（简化数据而生）
//可以把我们将来在组件当中需要用的数据简化一下【将来组件在获取数据的时候就方便了】
const getters = {
    //当前形参state，当前仓库中的state，并非大仓库中的那个state
    goodsList(state){
        //这样书写会有问题
        return state.searchList.goodsList || [];           //如果没有网络，就会返回undefinded，造成页面不能遍历，就会报错，所以以防万一加上空数组[]                                         
    },
    trademarkList(state){
        return state.searchList.trademarkList;
    },
    attrsList(state){
        return state.searchList.attrsList;
    }
}
export default{
    state,
    mutations,
    actions,
    getters
}