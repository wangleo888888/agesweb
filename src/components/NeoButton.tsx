import { type FunctionalComponent as FC } from 'vue'

export const NeoBuuton: FC = (_props, context) => {
  const { slots: { text, icon, } } = context
  return () => (
    <button class="neo-btn-primary select-none" >
      { icon?.() }
      { text?.() }
    </button>
  )
} 

NeoBuuton.displayName = 'NeoBuuton'
