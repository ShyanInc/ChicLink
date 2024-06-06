'use client'

import { FC } from 'react'

interface TitleProps {
    text: string
    color: 'black' | 'white'
}

export const FormTitle: FC<TitleProps> = ({ text, color }) => {
    return <p className={`text-${color} text-center text-3xl`}>{text && text}</p>
}
