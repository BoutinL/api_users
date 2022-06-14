<template>
<div>
  <h1>Bienvenue sur l'interface de gestion des utilisateurs</h1>
  <img alt="User Management icon" src="@/assets/img/usermanagement.png"/>
</div>
</template>

<script>
export default {
  name: 'Accueil'
}
</script>

<style scoped>
@media only screen and (min-width: 769px){
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
}
@media only screen and (min-width: 426px)  and (max-width: 768px){
    h1 {
    text-align: center;
    color: #235F62;
    width: 60%; 
    background-color: #FBC520;
    padding: 2rem;
    border-radius: 35px;
    box-shadow: 10px 5px 5px gray;
  }
  img{
    width: 60%;
  }
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
@media only screen and (max-width: 425px){
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h1 {
    text-align: center;
    color: #235F62;
    width: 60%; 
    background-color: #FBC520;
    padding: 2rem;
    border-radius: 35px;
    box-shadow: 10px 5px 5px gray;
    font-size: 1.5rem;
  }
  img{
    width: 60%;
  }
}
</style>