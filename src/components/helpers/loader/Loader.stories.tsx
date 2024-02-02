import type { Meta, StoryObj } from '@storybook/react'

import Loader from './Loader'

const meta: Meta<typeof Loader> = {
  title: 'Loader',
  component: Loader,
  tags: ['autodocs'],
  args: {
    children: 'Loader',
    variant: 'default',
  },
}

export default meta

type Story = StoryObj<typeof Loader>

export const Default: Story = {}
