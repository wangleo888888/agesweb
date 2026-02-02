import { createAlova } from "alova"
import GlobalFetch from 'alova/fetch'
import vueHook from "alova/vue"
import { loadingBar, message } from "./naive"

// 1. 读取环境变量
const BASE_URL = import.meta.env.VITE_API_BASE_URL

// 调试：检查 BASE_URL 是否正确加载
console.log('[alova] BASE_URL:', BASE_URL)

// 定义后端返回的标准结构
interface ApiResponse<T = any> {
  code: number
  data: T
  msg: string
}

// 2. 创建 alova 实例
export const alovaInstance = createAlova({
  baseURL: BASE_URL || '',
  // Vue 场景必须加这个，用于创建响应式状态
  statesHook: vueHook,
  // 请求适配器 (使用浏览器原生 fetch)
  requestAdapter: GlobalFetch(),
  // 3. 全局请求拦截器 (Before Request)
  beforeRequest(method) {
    // 开启进度条
    loadingBar.start()
    // 自动添加 Token (兼容隐私模式或无 localStorage 的环境)
    try {
      const token = localStorage.getItem('token')
      if (token) {
        method.config.headers.Authorization = `Bearer ${token}`
      }
    } catch (e) {
      console.warn('localStorage 访问失败:', e)
    }
    // 必须加上 Content-Type，否则后端可能解析不到 JSON
    method.config.headers['Content-Type'] = 'application/json'
  },

  // 4. 全局响应拦截器 (Responded)
  responded: {
    // 请求成功 (HTTP 200)
    onSuccess: async (response, _method) => {
      loadingBar.finish()
      const json: ApiResponse = await response.json()
      // 业务逻辑错误处理 (比如 code !== 200)
      if (json.code !== 200) {
        // 抛出错误，会触发组件内的 onError
        throw new Error(json.msg || '业务处理失败')
      }
      // ✨ 这里有个技巧：直接返回 data 字段
      // 这样你在组件里拿到的 data 就是 User 对象，而不是 { code: 200, data: User }
      return json.data
    },
    // 请求失败 (HTTP 错误，如 404, 500, 网络断开)
    onError: (err, _method) => {
      loadingBar.finish()

      let errorMsg = err.message || '网络波动，请稍后重试'

      if (err.message.includes('401')){
        errorMsg = '登陆过期，请重新登录'
        try {
          localStorage.removeItem('token')
        } catch (e) {
          console.warn('localStorage 访问失败:', e)
        }
        window.location.href = '/login' // 暴力跳转
      }

      message.error(errorMsg)
      throw err // 继续抛出，以便组件能感知到错误
    },
  },

})
