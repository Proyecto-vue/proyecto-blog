import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:null,
    username: null
  },
  mutations: {
    setUser: (state,payload)=>{
      state.user=payload;
    },
    setUserName: (state,payload)=>{
      state.username=payload;
    }
  },
  actions: {},
  modules: {}
});
