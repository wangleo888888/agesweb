import { defineComponent, ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, useMessage, type FormInst, type FormRules } from 'naive-ui'
import { useConfetti } from '../shared/hooks/useConfetti'
import { Icon } from '../components/Icon'
import { LockClosedOutline, LogInOutline, PersonOutline } from '@vicons/ionicons5'

export const Login = defineComponent({
  name: 'Login',
  setup: () => {
    const message = useMessage()
    const { fire } = useConfetti()

    const loading = ref(false)
    const formRef = ref<FormInst | null>(null)
    const formModel = ref({
      username: '',
      password: '',
    })
    const rules: FormRules = {
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur', },
        { min: 3, message: '宝子，用户名太短了', trigger: 'blur', },
      ],
      password: [
        { required: true, message: '请输入密码', trigger: ['input', 'blur',], },
      ],
    }
    const onClickLogin = async (e: MouseEvent) => {
      e.preventDefault()
      formRef.value?.validate(async (err) => {
        if (!err) {
          loading.value = true
          try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            message.success('校验通过，正在调用 Cloudflare Worker...')
            fire(e)
          } finally {
            loading.value = false
          }
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
        <div class="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
          <h2 class="text-2xl font-bold text-center mb-6 text-gray-700">欢迎回来，宝子</h2>
          <NForm ref={formRef} model={formModel.value} rules={rules}>
            <NFormItem path='username' label='用户名'>
              <NInput v-model:value={formModel.value.username} placeholder="宝子，输入你的昵称" >
                {{ prefix: () => <Icon icon={PersonOutline} /> }}
              </NInput>
            </NFormItem>
            <NFormItem path='password' label='密码'>
              <NInput v-model:value={formModel.value.password} type="password" showPasswordOn='click' placeholder="宝子，密码搞复杂点哦" >
                {{ prefix: () => <Icon icon={ LockClosedOutline } /> }}
              </NInput>
            </NFormItem>
            <NButton type="primary" block size='large' loading={loading.value} disabled={ loading.value } onClick={onClickLogin}>
              {{ default: () => '登录', icon: () => <Icon icon={ LogInOutline } /> }}
            </NButton>
          </NForm>
        </div>
      </>
    )
  }
})
