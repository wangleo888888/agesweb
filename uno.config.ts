import { defineConfig, presetWind4, presetIcons } from "unocss";

export default defineConfig({
  presets: [presetWind4(), presetIcons(),],
  theme: {
    colors: {
      // 定义品牌色
      duck: '#FF9F1C',    // 鸭嘴橙
      duckDark: '#E08000', // 深一点的橙色（按压态）
      sky: '#A2D2FF',     // 88 的蓝色
      pink: '#FFC8DD',    // 77 的粉色
      dark: '#1A1A1A',    // 接近黑色的深灰，比纯黑更有质感
    }
  },
  shortcuts: {
    // 📦 核心容器：手机尺寸限制，居中
    'app-container': 'mx-auto min-h-screen bg-[#FFFBF5] relative overflow-hidden text-dark',

    // 🔲 涂鸦风格边框：2px 黑边，圆角
    'neo-border': 'border-2 border-dark rounded-xl',

    // 🌑 硬投影：向右下偏移 4px，没有模糊
    'neo-shadow': 'shadow-[4px_4px_0px_0px_#1A1A1A]',

    // 🃏 通用卡片：白底 + 边框 + 投影
    'neo-card': 'bg-white neo-border neo-shadow p-4',

    // 🟧 核心按钮：橙底 + 机械按压感
    'neo-btn-primary': 'bg-duck text-dark font-bold text-lg py-3 px-6 neo-border neo-shadow active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex justify-center items-center',

    // ⚪️ 次级按钮/输入框：白底
    'neo-input': 'w-full bg-white neo-border px-4 py-3 outline-none focus:bg-gray-50 transition-colors placeholder-gray-400',

    // 💊 胶囊标签
    'neo-tag': 'border-2 border-dark rounded-full px-2 py-0.5 text-xs font-bold'
  }
})