import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
var state ={
  count:10
};

const mutations={
  increment(state){
    state.count++;
  }
};

const actions={
  increment:({  //处理你要干什么，异步请求，判断，流程控制
    commit
  })=>{
    commit('increment')
  }
};

const getters={
  count(state){
    return state.count;
  }
}

//需要导出Store对象
export default  new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
