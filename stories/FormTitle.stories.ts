import type { Meta, StoryObj } from '@storybook/react'
import { FormTitle } from '@/components/forms/Title'

const meta: Meta<typeof FormTitle> = {
    component: FormTitle,
}

export default meta
type Story = StoryObj<typeof FormTitle>

export const LoginTitle: Story = {
    args: {
        text: 'Sign In',
        color: 'black',
    },
}

export const RegisterTitle: Story = {
    args: {
        text: 'Sign Up',
        color: 'black',
    },
}
