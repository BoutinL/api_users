<template>
<div>
  <img alt="User Management icon" src="@/assets/img/usermanagement.png"/>
  <h1>Bienvenue sur l'interface de gestion des utilisateurs</h1>
</div>
</template>

<script>
export default {
  name: 'Accueil'
}
</script>

<style scoped>
  h1 {
    text-align: center;
    color: #235F62;
    width: 35%;
    background-color: #FBC520;
    padding: 2rem;
    border-radius: 35px;
    box-shadow: 10px 5px 5px gray;
  }
  img{
    width: 35%;
  }
  div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>