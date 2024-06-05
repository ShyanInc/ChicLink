'use client'

import { FC } from 'react'

interface TitleProps {
    text: string
}

export const FormTitle: FC<TitleProps> = ({ text }) => {
    return <p className={'text-white text-center text-3xl'}>{text && text}</p>
}
