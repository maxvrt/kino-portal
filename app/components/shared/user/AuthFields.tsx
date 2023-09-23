import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/form-elements/Field'

import { validEmail } from '@/shared/regex'

// interface FormData {
//   username: string;
//   password: string;
//   email: string;
// }

interface IAuthFields {
	register: UseFormRegister<any> //<FormData>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (    
		<>       
			<Field
        /* 
        настройка из react-hook-form
        обычно вызывается с параметрами, такими как имя поля и настройки валидации, чтобы связать поле формы с библиотекой 
        */
				{...register('email', {
					required: 'Email is required!',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email',
					},
				})}
				placeholder="E-mail"
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required!',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols!',
								},
						  }
						: {}
				)}
				placeholder="Password"
				type="password"
			/>
		</>
	)
}

export default AuthFields
