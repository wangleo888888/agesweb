import { createApp } from 'vue'
import { App } from './App'
import { Foo } from './Foo'
import { Bar } from './Bar'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Foo, },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
