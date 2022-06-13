import { createRouter, createWebHashHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import ListeUtilisateurs from '../views/ListeUtilisateurs.vue'
import Ajout from '../views/Ajout.vue'
import Modif from '../views/Modif.vue'
const routes = [
  {
    path: '/',
    name: 'accueil',
    component: Accueil
  },
  {
    path: '/listeutilisateurs',
    name: 'listeutilisateurs',
    component: ListeUtilisateurs
  },
  {
    path: '/ajout',
    name: 'ajout',
    component: Ajout
  },
  {
    path: '/modif',
    name: 'modif',
    component: Modif
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
