<template>
  <div>
    <h1>Liste des utilisateurs</h1>
    <table>
      <thead>
        <tr>
          <th v-for="column in allColumns">
            {{column.toUpperCase()}}
          </th>
          <th>
            ACTION
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(users, index) in allUsers" :key="index" v-bind="users.id">
          <td v-for="(user, key, index) in users" :key="index">{{key === 'address' ? user.city : key === 'company' ? user.name : user}}</td>
          <td class="td-btn">
            <input type="button" class="btn-mdf" value="Modifier">
            <input type="button" class="btn-supr" value="Supprimer">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data: function() {
    return {
      data:{},
      allColumns:[],
      allUsers:{}
    }
  }
  ,
  beforeMount () {
    this.allColumns = this.$store.state.columns;
    this.allUsers = this.$store.state.users;
  }
}
</script>

<style scoped>
@media only screen and (min-width: 769px){
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
    width: 80%;
    margin-bottom: 2rem;
  }
  td,tr,th{
    border-width:1px;
    border-style:solid; 
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
</style>
