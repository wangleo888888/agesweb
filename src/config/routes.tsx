import type { RouteRecordRaw } from "vue-router"
import { Bar } from "../Bar"
import { Foo } from "../Foo"
import { Login } from "../views/Login"

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login', },
  { path: '/foo', component: Foo, },
  { path: '/bar', component: Bar, },
  { path: '/login', component: Login, },
]
