import { Bar } from "../Bar"
import { Foo } from "../Foo"

export const routes = [
  { path: '/', component: Foo, },
  { path: '/foo', component: Foo, },
  { path: '/bar', component: Bar, },
]
