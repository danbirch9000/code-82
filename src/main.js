import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './styles/main.scss'

import Home from './pages/Home.vue'
import Lexone from './pages/Lexisone.vue'
import Terms from './pages/Terms.vue'
import Privacy from './pages/Privacy.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/lexisone', name: 'lexisone', component: Lexone },
  { path: '/lexis-one-terms', name: 'terms', component: Terms },
  { path: '/lexis-one-privacy', name: 'privacy', component: Privacy },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

createApp(App).use(router).mount('#app')
