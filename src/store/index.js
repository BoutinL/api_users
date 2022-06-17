import { createStore } from 'vuex'

export default createStore({
  state: {
    columns:[],
    users: [],
    idCounter: 10
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
    },
    updateUser(state,updateValue){
      const indexUtilisateur = state.users.findIndex(object => {
      return object.id == updateValue.id
      })
      state.users.splice(indexUtilisateur, 1, updateValue);
    },
    addUser(state,addUserValue){
      state.idCounter++
      addUserValue.id = state.idCounter;
      state.users.splice(state.users.length, 0, addUserValue);
      console.log(addUserValue)
    },
  },
  actions: {
  },
  modules: {
  }
})
