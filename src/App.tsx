import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

export const App = defineComponent({
  setup() {
    return () => <div>
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
        <RouterView />
      </section>
    </div>;
  }
})

