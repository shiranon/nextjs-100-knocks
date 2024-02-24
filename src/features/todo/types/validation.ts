import * as z from 'zod'
const requireString = z
  .string({ required_error: '入力必須！' })
  .min(1, { message: '入力必須！' })

const TaskSchema = z.object({ task: requireString })

type TaskType = z.infer<typeof TaskSchema>

export { TaskSchema }
export type { TaskType }
