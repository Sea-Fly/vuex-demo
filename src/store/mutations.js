import {INCREMENT,DECREMENT} from './types'
import getters from './getter'
const state={
  count:20
};
const mutations={
  [INCREMENT](state){
    state.count++;
  },
  [DECREMENT](state){
    state.count--;
  }
};

export  default {
  state,
  mutations,
  getters
}
