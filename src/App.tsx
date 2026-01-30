import { defineComponent, ref } from "vue";

export const App = defineComponent({
  setup() {
    const countRef = ref(0)
    const onClick = () => {
      countRef.value += 1
    }
    return () => <div>
      Hello, Vue 3 with JSX!
      <div>
        <button onClick={onClick}>+1</button>
      </div>
      <p>{ countRef.value }</p>
    </div>;
  }
})

