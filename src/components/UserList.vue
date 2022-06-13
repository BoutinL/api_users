<template>
<h1>Liste des utilisateurs</h1>
  <table>
    <thead>
      <tr>
        <th>

        </th>
        <th>
          ACTION
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="users in data">
        <td v-for="user in users">{{user}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'UserList',
  data: function() {
    return {
      data:{}
    }
  }
  ,
  beforeMount () {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin ": "*"
    }
    fetch('https://jsonplaceholder.typicode.com/todos/10/users/')
    .then(response => response.json())
    .then(json => {
      this.data = json ;
      console.log(this.data)
    })
  }

}
</script>

<style scoped>
h1 {
  text-align: center;
  color: #235F62;
}

td,tr,th{
 border-width:1px;
 border-style:solid; 
 border-color:red;
}
</style>
