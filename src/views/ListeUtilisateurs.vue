<template>
    <div>
    <h1>Liste des utilisateurs</h1>
    <table>
      <thead>
        <tr class="colonne-mobile-off">
          <th v-for="column in allColumns">
            {{column.toUpperCase()}}
          </th>
          <th>
            ACTION
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in allUsers" :key="index" v-bind="user.id">
          <td v-for="(value, key, index) in user" :key="index">
            {{key === 'address' ? value.city : key === 'company' ? value.name : value}}
          </td>
          <td class="td-btn">
            <router-link :to="{ name: 'modif', params: { id: user.id, currentUser: user.username } }"> 
                <input type="button" class="btn-mdf" value="Modifier">
            </router-link>
            <input type="button" @click="afficherModal(user.id , user.username)" class="btn-supr" value="Supprimer">
              <Teleport to="body">
                <modal :show="showModal" :userId="activeUserId" :userName="activeUserName" @cancel="showModal = false" @confirm="removeUser"></modal>
              </Teleport>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue"
export default {
  name: 'ListeUtilisateurs',
  components: {
    Modal
  },
  data: function() {
    return {
      user:[],
      allColumns:[],
      allUsers:[],
      showModal: false,
      activeUserId: 0,
      activeUserName: ""
    }
  },
  methods:{
    afficherModal(idUser, usernameUser) {
      this.activeUserId = idUser;
      this.activeUserName = usernameUser;
      this.showModal = true;
    },
    removeUser(userId){
      this.$store.commit("deleteUser", userId);
      this.showModal = false;
      // console.log(this.$store.state.users)
    }
  },
  beforeMount() {
    this.allColumns = this.$store.state.columns;
    this.allUsers = this.$store.state.users;
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1221px){
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    text-align: center;
    color: #235F62;
  }
  table{
    width: 100%;
    margin-bottom: 2rem;
    padding: 1rem;
  }
  td,tr,th{
    border: 2px solid #235F62;
    padding:1rem;
  }
  input{
    border-radius: 35px;
    color: white;
  }
  .btn-mdf{
    background-color: #235F62; 
    padding: 10px;
    width: 100%;
    font-weight: bold;
  }
  .btn-supr{
    background-color: #FBC520;
    padding: 10px;
    width: 100%;
    margin-top: 1.5rem;
    font-weight: bold;
  }
  .td-btn{
    flex-direction: column;
  }
  tr:nth-child(odd) {
    background: #235f6288;
  }
  tr:nth-child(even) {
    background: #235f624f;
  }
}
@media only screen and (min-width: 426px)  and (max-width: 1220px){
  h1 {
    text-align: center;
    color: #235F62;
  }
  .colonne-mobile-off{
    display: none;
  }
  table{
    width: 80%;
    margin: auto;
    margin-bottom: 2rem;
    padding: 1rem;
  }
  td,tr,th{
    padding:1rem;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  tr{ 
    margin-bottom: 1rem;
    border-radius: 35px;
    border: 5px solid #235F62;
  }
  input{
    border-radius: 35px;
    color: white;
  }
  .btn-mdf{
    background-color: #235F62; 
    padding: 10px;
    width: 50%;
    margin: auto;
    font-weight: bold;
  }
  .btn-supr{
    background-color: #FBC520;
    padding: 10px;
    width: 50%;
    margin: auto;
    margin-top: 1.5rem;
    font-weight: bold;
  }
  tr:nth-child(odd) {
    background: #235f6288;
  }
  tr:nth-child(even) {
    background: #235f624f;
  }
}
@media only screen and (max-width: 425px){
  h1 {
    text-align: center;
    color: #235F62;
  }
  .colonne-mobile-off{
    display: none;
  }
  table{
    width: 100%;
    margin-bottom: 2rem;
    padding: 1rem;
  }
  td,tr,th{
    padding:1rem;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  tr{ 
    margin-bottom: 1rem;
    border-radius: 35px;
    border: 5px solid #235F62;
  }
  input{
    border-radius: 35px;
    color: white;
  }
  .btn-mdf{
    background-color: #235F62; 
    padding: 10px;
    width: 100%;
    font-weight: bold;
  }
  .btn-supr{
    background-color: #FBC520;
    padding: 10px;
    width: 100%;
    margin-top: 1.5rem;
    font-weight: bold;
  }
  .td-btn{
    flex-direction: column;
  }

  tr:nth-child(odd) {
    background: #235f6288;
  }
  tr:nth-child(even) {
    background: #235f624f;
  }
}
</style>

