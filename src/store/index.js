import { createStore } from 'vuex'

export default createStore({
  state: {
    columns:[],
    users: []
  },
  getters: {
  },
  mutations: {
    setColumns(state,newValue){
      state.columns=newValue;
    },
    setUsers(state,newValue){
      state.users=newValue;
    },
    deleteUser(state, id){
      state.users.splice(state.users.findIndex(user => user.id == id), 1);
    }
  },
  actions: {
  },
  modules: {
  }
})
