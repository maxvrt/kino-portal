import cn from 'classnames'
import { forwardRef } from 'react'

import { IField } from './form.interface'

import styles from './form.module.scss'

/** Так как мы используем react-hook-form то мы не сможем управлять пропсами IField.
* ! За счет forwardRef Field от родителей принимает ref в качестве одного из своих аргументов 
* ! и передает его внутреннему элементу <input>.
* HTMLInputElement добавляет дефолтные поля
*/
const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={cn(styles.common, styles.field)} style={style}>
				<label>
					<span>{placeholder}</span>
					<input ref={ref} type={type} {...rest} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

// костыль для предотвращения ошибки отсутствия displayName из-за forwardRef 
Field.displayName = 'Field'

export default Field
