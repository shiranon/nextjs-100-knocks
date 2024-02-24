import React from 'react'

import { appData } from '@/constants/appData'

type AppModalProps = {
  params: {
    id: string
  }
}

export default function AppPage({ params }: AppModalProps) {
  const { id } = params
  const app = appData.find((app) => app.id === id)
  return (
    <div className="relative">
      <div className="flex h-[calc(100svh-5rem)] items-center justify-center">
        {app && React.createElement(app.component)}
      </div>
    </div>
  )
}
