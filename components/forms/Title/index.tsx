'use client'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

interface TitleProps {
    backStepRoute?: string
    backStepText?: string
    text: string
}

export const FormTitle: FC<TitleProps> = ({ backStepRoute, backStepText, text }) => {
    const { push } = useRouter()
    return (
        <title>
            <button onClick={() => push(backStepRoute ?? '/')}>{backStepText}</button>
            {text && <span>{text}</span>}
        </title>
    )
}
