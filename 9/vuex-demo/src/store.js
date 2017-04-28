import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var state = {
    count:10
}


const mutations={
    increment(state){   /*处理数据变化*/
        state.count++;
    }
}

const actions={
    increments:({commit})=>{
       commit('increment')
    }
}

// 需要导出Stroe对象
export default new Vuex.Store({
    actions,
    state,
    mutations
});