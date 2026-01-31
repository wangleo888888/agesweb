import { defineComponent } from 'vue';
import s from './Login.module.scss'

export const AuthStatus = {
  IDLE: 'IDLE',
  AUTHENTICATING: 'AUTHENTICATING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}
type AuthStatus = typeof AuthStatus[keyof typeof AuthStatus]

export const Login = defineComponent({
  setup: () => {
    // const [passcode, setPasscode] = useState('');
    // const [showPasscode, setShowPasscode] = useState(false);
    // const [status, setStatus] = useState<AuthStatus>(AuthStatus.IDLE);
    // const [errorMsg, setErrorMsg] = useState('');

    // const handleSubmit = useCallback(async (e: React.FormEvent) => {
    //   e.preventDefault();

    //   if (!passcode.trim()) {
    //     setStatus(AuthStatus.ERROR);
    //     setErrorMsg('请输入口令');
    //     return;
    //   }

    //   setStatus(AuthStatus.AUTHENTICATING);
    //   setErrorMsg('');

    //   // Simulate API call delay
    //   setTimeout(() => {
    //     // Mock validation logic
    //     if (passcode.length >= 4) {
    //       setStatus(AuthStatus.SUCCESS);
    //       onSuccess();
    //     } else {
    //       setStatus(AuthStatus.ERROR);
    //       setErrorMsg('口令似乎不对哦，再试试？');
    //     }
    //   }, 1200);
    // }, [passcode, onSuccess]);

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   setPasscode(e.target.value);
    //   if (status === AuthStatus.ERROR) {
    //     setStatus(AuthStatus.IDLE);
    //     setErrorMsg('');
    //   }
    // };

    // const toggleVisibility = () => {
    //   setShowPasscode(!showPasscode);
    // };

    return () => (
      <div class={s.test}>hi</div>
      // <form onSubmit={handleSubmit} class="w-full space-y-6">
      //   <div class="space-y-2">
      //     <div class="relative group">
      //       <input
      //         type={showPasscode ? "text" : "password"}
      //         inputmode={showPasscode ? "text" : "numeric"}
      //         value={passcode}
      //         onChange={handleInputChange}
      //         placeholder="输入口令"
      //         class={`
      //         w-full pl-5 pr-12 py-4 bg-white border-2 rounded-2xl outline-none text-lg tracking-widest placeholder:tracking-normal placeholder:text-gray-400 transition-all duration-300
      //         ${status === AuthStatus.ERROR
      //             ? 'border-red-300 bg-red-50 text-red-900 focus:border-red-500 focus:ring-4 focus:ring-red-100'
      //             : 'border-transparent shadow-sm shadow-orange-100/50 focus:border-orange-400 focus:ring-4 focus:ring-orange-100'}
      //       `}
      //       />
      //       <button
      //         type="button"
      //         onClick={toggleVisibility}
      //         class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none p-1 rounded-md transition-colors"
      //         aria-label={showPasscode ? "隐藏口令" : "显示口令"}
      //       >
      //         {showPasscode ? (
      //           <EyeOff class="w-5 h-5" />
      //         ) : (
      //           <Eye class="w-5 h-5" />
      //         )}
      //       </button>
      //     </div>

      //     <div class="flex justify-between items-start px-1">
      //       <div class={`flex items-center gap-2 text-sm text-red-500 transition-all duration-300 overflow-hidden ${status === AuthStatus.ERROR ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
      //         <AlertCircle class="w-4 h-4 flex-shrink-0" />
      //         <span>{errorMsg}</span>
      //       </div>

      //       <button
      //         type="button"
      //         class="text-sm text-orange-500 hover:text-orange-600 font-medium ml-auto transition-colors"
      //         onClick={() => alert('请联系部门管理员获取最新访问口令')}
      //       >
      //         忘记口令？
      //       </button>
      //     </div>
      //   </div>

      //   <button
      //     type="submit"
      //     disabled={status === AuthStatus.AUTHENTICATING}
      //     class={`
      //     w-full py-4 rounded-2xl font-semibold text-white text-lg
      //     flex items-center justify-center gap-2
      //     transition-all duration-300 transform
      //     ${status === AuthStatus.AUTHENTICATING ? 'bg-orange-300 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 active:scale-[0.98] shadow-lg shadow-orange-200'}
      //   `}
      //   >
      //     {status === AuthStatus.AUTHENTICATING ? (
      //       <>
      //         <Loader2 class="w-5 h-5 animate-spin" />
      //         <span>验证中...</span>
      //       </>
      //     ) : (
      //       <>
      //         <span>进入岁岁</span>
      //         <ArrowRight class="w-5 h-5" />
      //       </>
      //     )}
      //   </button>
      // </form>
    )
  }
})
