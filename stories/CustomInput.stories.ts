import { CustomInput } from '@/components/CustomInput'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CustomInput> = {
    component: CustomInput,
}

export default meta
type Story = StoryObj<typeof CustomInput>

export const EmailInput: Story = {
    args: {
        type: 'email',
        placeholder: 'Email',
        label: 'Email',
    },
}

export const PasswordInput: Story = {
    args: {
        type: 'password',
        placeholder: 'Password',
        label: 'Password',
    },
}

export const PhoneInput: Story = {
    args: {
        type: 'tel',
        placeholder: '+380',
        label: 'Phone Number',
    },
}
