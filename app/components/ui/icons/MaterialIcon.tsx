import { ChangeEvent, FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { useRenderClient } from '@/hooks/useRenderClient'

import { TypeMaterialIconName } from '@/shared/types/icons.types'

export const MaterialIcon: FC<{ name: TypeMaterialIconName, onClick?: () => void; }> = ({ name, onClick }) => {
	const { isRenderClient } = useRenderClient()

	const IconComponent = MaterialIcons[name]

	if (isRenderClient)
		return <IconComponent onClick={onClick} /> || <MaterialIcons.MdDragIndicator onClick={onClick} />
	else return null
}
