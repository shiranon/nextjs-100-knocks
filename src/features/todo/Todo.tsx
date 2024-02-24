'use client'

import React, { useState } from 'react'

import { ActionButton } from './component/ActionButton'
import { FormDialog } from './component/FormDialog'
import { NavBar } from './component/NavBar'
import { TodoItem } from './component/TodoItem'

export const Todo = () => {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<Filter>('all')
  const [open, setOpen] = useState(false)

  const handleSubmit = () => {
    if (!text) return
    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
      checked: false,
      removed: false,
    }
    setTodos((todos) => [newTodo, ...todos])
    setText('')
    setOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleTab = (filter: Filter) => {
    setFilter(filter)
  }

  const handleEmpty = () => {
    setTodos(() => todos.filter((todo) => !todo.removed))
  }

  const handleTodo = <K extends keyof Todo, V extends Todo[K]>(
    id: number,
    key: K,
    value: V,
  ) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, [key]: value }
        } else {
          return todo
        }
      })
      return newTodos
    })
  }

  return (
    <div className="h-4/5 min-h-96 w-96 flex-col bg-slate-300 font-genjyuu-gothic">
      <div className="flex h-16 items-center justify-center bg-slate-600 text-2xl text-white">
        <span>TODO</span>
      </div>
      <div className="relative h-[calc(100%-4rem)] px-4">
        <NavBar onTab={handleTab} />

        <TodoItem onTodo={handleTodo} todos={todos} filter={filter} />
        <ActionButton
          todos={todos}
          filter={filter}
          onEmpty={handleEmpty}
          open={open}
          setOpen={setOpen}
        >
          <FormDialog
            text={text}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </ActionButton>
      </div>
    </div>
  )
}
