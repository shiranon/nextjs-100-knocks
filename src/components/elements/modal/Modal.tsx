'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from '@/components/ui/dialog'

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const routerBack = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | Event) => {
      e.preventDefault()
      router.back()
    },
    [router],
  )
  return (
    <Dialog defaultOpen={true}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 animate-fade-in bg-black/50" />
        <DialogContent
          className="fixed left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 animate-fade-in"
          onEscapeKeyDown={(e) => routerBack(e)}
          onPointerDownOutside={(e) => routerBack(e)}
        >
          <div className="relative rounded-md bg-white">
            <DialogClose asChild>
              <motion.button
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: '100%',
                }}
                type="button"
                onClick={(e) => routerBack(e)}
                className="absolute right-0 top-0 z-10 inline-flex items-center justify-center rounded-md p-4 text-gray-400"
              >
                <span className="sr-only text-white">Close menu</span>
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </DialogClose>
            {children}
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
