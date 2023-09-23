import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { TypeRootState } from '@/store/store'

/** типизирует useSelector */
export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
