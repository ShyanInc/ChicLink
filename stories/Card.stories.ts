import type { Meta, StoryObj } from '@storybook/react'
import Card from '@/components/Card/Card'

const meta: Meta<typeof Card> = {
    component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

export const MaleCard: Story = {
    args: {
        name: 'David',
        age: 23,
        gender: 'male',
        about: 'My name is David :)',
    },
}

export const FemaleCard: Story = {
    args: {
        name: 'Emmie',
        age: 25,
        gender: 'female',
        about: 'My name is Emmie :)',
    },
}
