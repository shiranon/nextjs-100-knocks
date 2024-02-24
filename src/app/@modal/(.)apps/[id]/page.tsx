'use client'
import { motion } from 'framer-motion'
import React from 'react'

import { Modal } from '@/components/elements/modal/Modal'
import { appData } from '@/constants/appData'

type AppModalProps = {
  params: {
    id: string
  }
}

export default function AppModal({ params }: AppModalProps) {
  const { id } = params
  const app = appData.find((app) => app.id === id)
  return (
    <>
      <Modal>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative"
        >
          <div className="flex h-[80svh] min-h-[300px] w-[calc(100svw-2rem)] min-w-[540px] items-center justify-center overflow-scroll transition-all md:aspect-square md:h-[calc(100vmin-4rem)] md:w-auto">
            {app && React.createElement(app.component)}
          </div>
        </motion.div>
      </Modal>
    </>
  )
}
