import { defineComponent } from "vue";
import { RouterView } from "vue-router";

import "./App.scss"
import { NMessageProvider } from "naive-ui";

export const App = defineComponent({
  setup() {
    return () => {
      return (<>
        <div class="app-container flex flex-col items-center justify-center p-8">
          <NMessageProvider>
            <RouterView />
          </NMessageProvider>
        </div>
      </>
      )
    }
  }
})

