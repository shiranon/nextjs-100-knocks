import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { TaskSchema, TaskType } from '../types/validation'

type Props = {
  text: string
  onSubmit: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormDialog = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskType>({ mode: 'onSubmit', resolver: zodResolver(TaskSchema) })

  const onSubmit: SubmitHandler<TaskType> = () => {
    props.onSubmit()
  }
  return (
    <div className="flex h-32 flex-col items-center justify-start pt-4">
      <div>新しいタスク</div>
      <form className="pt-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2 px-2">
          <Input
            className=""
            type="text"
            {...register('task', { onChange: (e) => props.onChange(e) })}
          />
          <Button variant={'secondary'} type="submit" onSubmit={props.onSubmit}>
            追加
          </Button>
        </div>
        {errors.task?.message && (
          <div className="flex items-center justify-center pt-2">
            <p className="text-sm font-light text-red-400">
              {errors.task.message}
            </p>
          </div>
        )}
      </form>
    </div>
  )
}
