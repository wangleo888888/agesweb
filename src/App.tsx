import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

import "./App.scss"
import { NMessageProvider } from "naive-ui";

export const App = defineComponent({
  setup() {
    return () => {
      return (<>
        <div>
          <nav>
            <ul>
              <li>
                <RouterLink to="/foo">
                  Foo
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/bar">
                  Bar
                </RouterLink>
              </li>
            </ul>
          </nav>
          <section>
            <NMessageProvider>
              <RouterView />
            </NMessageProvider>
          </section>
        </div>
      </>
      )
    }
  }
})

