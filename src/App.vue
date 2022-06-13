<template>
  <nav>
    <img alt="Id logo" src="@/assets/img/logo-Id-Formation.png"/>
    <div class="liens">
      <router-link to="/">Accueil</router-link>
      <router-link to="/listeutilisateurs">Liste utilisateurs</router-link>
      <router-link to="/ajout">Ajout</router-link>
    </div>
  </nav>
  <router-view/>
  <footer>
    <span>Copyright ID Formation © 2022</span>
  </footer>
</template>

<style>
nav {
  background-color: #FBC520;
  display: flex;
}
footer {
  background-color: #FBC520;
  text-align: center;
  padding: 1rem;
  color:#FFFFFF;
}
.liens {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
}
a{
  font-size: 1.5rem;
  text-decoration:none;
  width: 20%;
  padding: 1rem;
  background-color: #FFFFFF;
  color:#235F62;
  border-radius: 35px;
  text-align: center;
  font-weight: bold;
}
img{
  border-radius: 30px;
  margin: 1rem;
}
</style>
