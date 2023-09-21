import { useTypedSelector } from './useTypedSelector'

// ошибка с типом юзера в useTypedSelector
export const useAuth = () => {  
  return {
    user: null,
    isLoading: false,  
  }
}
