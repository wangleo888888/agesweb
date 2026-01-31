import { NIcon } from 'naive-ui';
import { defineComponent, type Component, type PropType } from 'vue';

export const Icon = defineComponent({
  name: 'Icon',
  // ✨ 重点1：使用 Vue 的对象写法定义 props，配合 PropType
  // 这样既有了运行时校验，也有了 TS 类型提示
  props: {
    icon: {
      // 告诉 TS 这是个 Vue 组件
      type: Object as PropType<Component>,
      required: true
    },
    // 下面这三个是 NIcon 支持的属性，我们显式声明出来
    size: [Number, String],
    color: String,
    depth: [Number, String]
  },

  setup: (props, context) => {
    const { attrs } = context
    // ✨ 重点2：解决 "JSX element type" 报错的核心！
    // 必须把 props.icon 赋值给一个【大写字母开头】的变量
    const IconComponent = props.icon as any
    return () => (
      <NIcon
        // 显式透传我们定义的 props
        size={props.size}
        color={props.color}
        depth={props.depth as any}
        // 把其他的属性 (class, style, onClick 等) 透传下去
        {...attrs}
      >
        <IconComponent />
      </NIcon>
    )
  }
})