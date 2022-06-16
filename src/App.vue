<template>
  <nav>
    <img alt="Id logo" src="@/assets/img/logo-Id-Formation.png"/>
    <div class="liens">
      <router-link to="/">Accueil</router-link>
      <router-link to="/listeutilisateurs">Liste</router-link>
      <router-link to="/ajout">Ajout</router-link>
    </div>
  </nav>
  <router-view/>
  <footer>
    <span>Copyright ID Formation © 2022</span>
  </footer>
</template>

<script>
export default{
  name: "App",
  beforeMount() {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin ": "*"
    }
    fetch('https://jsonplaceholder.typicode.com/todos/10/users/')
    .then(response => response.json())
    .then(json => {
      this.data = json ;
      console.log(this.data);
      // console.log(Object.keys(this.data[0]));
      this.$store.commit("setColumns", Object.keys(this.data[0]));
      this.allColumns = Object.keys(this.data[0]);
      // console.log("Store colonnes ", this.$store.state.columns);
      this.$store.commit("setUsers", this.data);  
    })
  }
}
</script>

<style>
body{margin:0px}
@media only screen and (min-width: 769px){
  nav {
    background-color: #FBC520;
    display: flex;
  }
  footer {
    background-color: #FBC520;
    text-align: center;
    padding: 2rem;
    color:#FFFFFF;
  }
  .liens {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
  }
  nav a{
    font-size: 1.2rem;
    text-decoration:none;
    width: 20%;
    padding: 1rem;
    background-color: #FFFFFF;
    color:#235F62;
    border-radius: 35px;
    text-align: center;
    font-weight: bold;
    box-shadow: 5px 5px 5px gray;
  }
  img{
    border-radius: 30px;
    margin: 1rem;
  }
  nav a:hover{
      background-color: #235f62;
      transition: 0.6s;
      color: #ffffff;
  }
  nav a.router-link-exact-active {
    color: #fbc522;
  }
}
@media only screen and (min-width: 426px)  and (max-width: 768px){
  nav {
    background-color: #FBC520;
    display: flex;
  }
  footer {
    background-color: #FBC520;
    text-align: center;
    padding: 2rem;
    color:#FFFFFF;
  }
  .liens {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  nav a{
    font-size: 1.2rem;
    text-decoration:none;
    width: 70%;
    padding: 0.3rem;
    margin: 0.6rem;
    background-color: #FFFFFF;
    color:#235F62;
    border-radius: 35px;
    text-align: center;
    font-weight: bold;
    box-shadow: 5px 5px 5px gray;
  }
  img{
    border-radius: 60px;
    margin: 1rem;
  }
  nav a:hover{
      background-color: #235f62;
      transition: 0.6s;
      color: #ffffff;
  }
  nav a.router-link-exact-active {
    color: #fbc522;
  }
}
@media only screen and (max-width: 425px){
  nav {
    background-color: #FBC520;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
    footer {
    background-color: #FBC520;
    text-align: center;
    padding: 2rem;
    color:#FFFFFF;
  }
    .liens {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
  nav   a{
    font-size: 1.5rem;
    text-decoration:none;
    width: 100%;
    padding: 1rem;
    background-color: #FFFFFF;
    color:#235F62;
    border-radius: 35px;
    text-align: center;
    font-weight: bold;
    box-shadow: 5px 5px 5px gray;
    margin: 1rem;
  }
  img{
    width: 50%;
    border-radius: 100%;
    margin: 1rem;
  }
  nav a.router-link-exact-active {
    color: #fbc522;
  }
}


</style>
