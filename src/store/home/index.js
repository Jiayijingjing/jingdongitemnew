import {reqCategoryList} from '../../api'

const state = {
    aaa:'',
    bbb:{},
    ccc:{},
    sanjilistsh:true,
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
    
};

export default {
    state,
    mutations,
    actions,
    getters
}