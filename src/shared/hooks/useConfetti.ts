import confetti, { type Options } from "canvas-confetti"

// 默认配置
const DEFAULT_OPTIONS: Options = {
  particleCount: 150,
  spread: 60,
  colors: ['#FF9F1C', '#A2D2FF', '#FFC8DD'],
  disableForReducedMotion: true,
  zIndex: 9999,
}

export function useConfetti() {
  /**
   * 发射彩带
   * @param target (可选) 触发源：MouseEvent | HTMLElement | null
   * @param options (可选) 自定义配置，会覆盖默认配置
   */
  const fire = (
    target?: MouseEvent | HTMLElement | null,
    options: Options = {}
  ) => {
    // 1. 初始化默认配置 (如果没传 target，就用这套逻辑)
    let finalOptions: Options = {
      ...DEFAULT_OPTIONS,
      // ✨ 默认策略：左下角发射，射向右上方
      origin: { x: 0, y: 1 }, // 屏幕左下角
      angle: 60,              // 角度：向右上方 60度
      startVelocity: 55,      // 力度：大一点，不然飞不起来
      spread: 50,             // 范围：聚拢一点，更有方向感
      drift: 0,
      ticks: 300              // 存活时间：久一点，让它飞过屏幕
    }

    // 如果传了 target，则计算 target 的中心点
    if (target) {
      const el = (target instanceof Event ? target.target : target) as HTMLElement
      if (el) {
        const rect = el.getBoundingClientRect()
        finalOptions.origin = {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        }
        // 按钮发射通常不需要特定角度，默认是向上喷射，所以把 angle 去掉或者设为默认
        finalOptions.angle = 90
        finalOptions.startVelocity = 30 // 恢复正常的力度
      }
    }

    // 合并配置：用户配置 > 动态计算的origin > 默认配置
    // 注意：Object.assign 后面的会覆盖前面的
    Object.assign(finalOptions, options)
    confetti(finalOptions)
  }

  return { fire }
}