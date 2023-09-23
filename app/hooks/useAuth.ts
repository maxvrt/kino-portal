import { useTypedSelector } from './useTypedSelector'

/** вспомогательный хук для useSelector как и useTypedSelector */
export const useAuth = () => useTypedSelector((state) => state.user);
