import { defineComponent } from 'vue';
import { NConfigProvider, NButton } from 'naive-ui'
export const Foo = defineComponent({
  setup: () => {
    return () => (
      <div>
        <NConfigProvider>
          <h1>123</h1>
          <NButton>123</NButton>
        </NConfigProvider>
      </div>
    )
  }
})