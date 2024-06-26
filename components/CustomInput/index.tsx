import { FC } from 'react'

export interface InputProps {
    type: 'email' | 'text' | 'password' | 'tel'
    placeholder: string
    label?: string
    id?: string
    helperText?: string
}

export const CustomInput: FC<InputProps> = ({ type, placeholder, label, id, helperText }) => {
    return (
        <div>
            {label && id && (
                <label htmlFor={id} className="text-white pl-3">
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                placeholder={placeholder ?? ''}
                className="bg-white border-2 border-black text-black text-m rounded-lg focus:outline-[#F2F99C] block w-full p-2.5"
            />
            {helperText && <p>{helperText}</p>}
        </div>
    )
}
