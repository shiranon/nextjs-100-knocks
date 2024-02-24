'use client'
import { DialogPortal } from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'
import React from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from '@/components/ui/dialog'

type Props = {
  todos: Todo[]
  filter: Filter
  onEmpty: () => void
  children: React.ReactNode
  open: boolean
  setOpen: (open: boolean) => void
}

export const ActionButton = (props: Props) => {
  const filterTodos = props.todos.filter((todo) => {
    switch (props.filter) {
      case 'all':
        return !todo.removed
      case 'checked':
        return todo.checked && !todo.removed
      case 'unchecked':
        return !todo.checked && !todo.removed
      case 'removed':
        return todo.removed
      default:
        return todo
    }
  })
  console.log(props)
  return (
    <>
      {props.filter === 'removed' ? (
        <Button
          className="absolute bottom-4 right-4 rounded-full text-xl"
          variant="outline"
          size={'icon'}
          onClick={props.onEmpty}
          disabled={filterTodos.length === 0}
        >
          {filterTodos.length !== 0 ? '🧹' : '🤷‍♂️'}
        </Button>
      ) : (
        <Dialog open={props.open} onOpenChange={props.setOpen}>
          <DialogTrigger asChild>
            <Button
              className="absolute bottom-4 right-4 rounded-full"
              variant="outline"
              size={'icon'}
            >
              +
            </Button>
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay className="fixed inset-0 z-40 animate-fade-in bg-black/30" />
            <DialogContent className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 animate-fade-in">
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
                {props.children}
              </div>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      )}
    </>
  )
}
