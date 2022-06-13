import { createStore } from 'vuex'

export default createStore({
  state: {
    columns:[],
    users: {}
  },
  getters: {
  },
  mutations: {
    setColumns(state,newValue){
      state.columns=newValue;
    }
    ,
    setUsers(state,newValue){
      state.users=newValue;
    }
  },
  actions: {
  },
  modules: {
  }
})
