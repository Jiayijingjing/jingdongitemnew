import {reqCategoryList} from '../../api'

const state = {
    aaa:'',
    bbb:{},
    ccc:{},
    sanjilistsh:true,
    ddd:'',
    inputdom:{},
    ceshishuju:'命名空间',
};

const mutations = {
    CESHIAXIOS(state,ceshidata){
        state.ccc = ceshidata;
       
    }
};

const actions = {
    async ceshiaxios({commit}){
            const ceshidata = await reqCategoryList();
            if(ceshidata.code == 200){
                commit('CESHIAXIOS',ceshidata.result)
            }
        }
 };

const getters = {
    ceshidataa(state){
        return state.ceshishuju+'测试1';
    },
    ceshidatab(states){
        return state.ceshishuju+'测试2';
    }
};

export default {
    namespaced:true,  //命名空间，多模块时必须配置，防止重名
    state,
    mutations,
    actions,
    getters
}