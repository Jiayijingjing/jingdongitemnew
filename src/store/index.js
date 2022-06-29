import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex);

import home from './home'

export default new Vuex.Store({
    modules:{
        home,
    }
})

