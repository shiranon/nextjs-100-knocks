import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
  tags: ['button'],
  args: {
    children: 'Button',
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['default', 'outline', 'secondary', 'ghost', 'link'],
        defaultValue: 'default',
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['default', 'sm', 'md', 'lg', 'icon'],
        defaultValue: 'default',
      },
    },
    children: {
      control: {
        type: 'text',
      },
      defaultValue: 'Button',
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {}
