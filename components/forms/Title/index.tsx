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
        <p className={'text-white text-center text-3xl'}>
            {/*<button onClick={() => push(backStepRoute ?? '/')}>{backStepText}</button>*/}
            {text && text}
        </p>
    )
}
