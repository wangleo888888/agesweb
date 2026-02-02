import { alovaInstance } from "../shared/alova";

export type LoginResult = {
  token: string
  user: {
    id: number
    username: string
    avatar: string
    role: string
  }
}

export const authApi = {
  /**
  * 登录接口
  * alovaInstance.Post<返回类型>(URL, Body数据)
  */
  login: (code: string) => alovaInstance.Post<LoginResult>('/auth/login', { code }),
}