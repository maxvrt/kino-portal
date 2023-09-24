import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { allActions } from '@/store/rootActions'

/** этот хук удобен извлечением экшенов const {register} = useActions() 
 * например экшн logout вызывает api AuthService.logout() 
 */
export const useActions = () => {
	const dispatch = useDispatch();
	// memo - экшены меняются только при изменении dispatch
	return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
}
