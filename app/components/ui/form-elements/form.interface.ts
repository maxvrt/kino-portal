import { EditorProps, EditorState } from 'draft-js'
import { ButtonHTMLAttributes, CSSProperties, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

// берем интерфейс кнопки из интерфейса кнопки react
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

// наши пропсы (для регистрации) 
export interface IFieldProps {
	placeholder: string
	error?: FieldError | undefined
}
// ↑↑ к ним нужно приплюсовать пропсы инпута, типа onChange, value
type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps
export interface IField extends TypeInputPropsField {}

export interface IUploadField {
	folder?: string
	image?: string
	onChange: (...event: any[]) => void
	placeholder: string
	error?: FieldError
	style?: CSSProperties
	isNoImage?: boolean
}

type TypeEditorPropsField = EditorProps & IFieldProps

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void
	value: string
}
