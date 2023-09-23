import * as userActions from './user/user.actions'

/**
 * объединяем все действия с помощью звездочки */ 
export const allActions = {
	...userActions,
}
