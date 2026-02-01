import { type FunctionalComponent as FC } from 'vue'

export const NeoCard: FC = (_props, context) => {
  const { slots } = context
  return () => (
    <div class="neo-card relative" >
      { slots.default?.() }
    </div>
  )
} 

NeoCard.displayName = 'NeoCard'
