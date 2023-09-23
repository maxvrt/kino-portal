import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { allActions } from '@/store/rootActions'

/** этот хук удобен извлечением const {register} = useActions() */
export const useActions = () => {
	const dispatch = useDispatch();

	// memo - экшены меняются только при изменении dispatch
	return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
}
