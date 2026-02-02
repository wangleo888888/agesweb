import { defineComponent, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, useMessage, type FormInst, type FormRules } from 'naive-ui'
import { useConfetti } from '../hooks/useConfetti'
import { Icon } from '../components/Icon'
import { LockClosedOutline, LogInOutline } from '@vicons/ionicons5'
import { useRequest } from 'alova/client'
import { authApi } from '../api/auth'

export const Login = defineComponent({
  name: 'Login',
  setup: () => {
    const message = useMessage()
    const { fire } = useConfetti()

    const { loading, send, onSuccess, onError } = useRequest(() => authApi.login(formModel.value.password), { immediate: false }) // ⚠️ 重要：关闭自动发送，要在点击时才发
    onSuccess((e) => {
      console.log('登录成功:', e)
      // 保存 token 到 localStorage
      try {
        localStorage.setItem('token', e.token)
        // 跳转到首页或其它页面
        message.success('登录成功！')
      } catch (err) {
        console.error('保存 token 失败:', err)
        message.error('登录成功，但保存凭证失败')
      }
    })
    onError(() => {
      formModel.value.password = ''
    })

    const formRef = ref<FormInst | null>(null)
    const formModel = ref({
      password: '',
    })
    const rules: FormRules = {
      password: [
        { required: true, message: '请输入密码', trigger: ['input', 'blur',], },
      ],
    }
    const onClickLogin = async (e: MouseEvent) => {
      e.preventDefault()
      formRef.value?.validate(async (err) => {
        if (!err) {
          send()
          fire(e)
        } else {
          message.error('表单填写有误，请检查')
          fire(null, { 
            colors: ['#555555', '#999999'], 
            particleCount: 50,
            startVelocity: 20
          })
        }
      })
    }

    return () => (
      <>
        {/* Logo 区 */}
        <div class="mb-12 relative">
          {/* 那个鸭子图*/}
          <img src="https://i.ibb.co/tFqdDFn/835bee3e-3488-42d7-bcf0-8f57a9aa0e1c.png" class="w-full h-full object-contain drop-shadow-[4px_4px_0_#000]" alt="SuiSui Logo" />
          {/* 装饰：手写标题*/}
          <h1 class="text-4xl font-black mt-4 text-center tracking-widest">岁岁</h1>
          <p class="text-xs text-center text-gray-500 font-bold mt-1">昭昭如愿，岁岁安澜</p>
        </div>
        {/* 表单区 */}
        <div class="w-full max-w-[430px] space-y-6">
          <NForm ref={formRef} model={formModel.value} rules={rules}>
            
            <div class="space-y-2">
              <NFormItem path='password' label='密码' class="font-bold ml-1">
                <NInput v-model:value={formModel.value.password} type="password" showPasswordOn='click' placeholder="宝子，密码搞复杂点哦" class="neo-input text-center text-xl tracking-widest">
                  {{ prefix: () => <Icon icon={LockClosedOutline} /> }}
                </NInput>
              </NFormItem>
            </div>
            
            <NButton type="primary" block size='large' loading={loading.value} disabled={ loading.value } onClick={onClickLogin} class="w-full mt-8 neo-btn-primary select-none">
              {{ default: () => (<>冲鸭 <span class="ml-2">➔</span></>), icon: () => <Icon icon={ LogInOutline } /> }}
            </NButton>
          </NForm>
        </div>
      </>
    )
  }
})
