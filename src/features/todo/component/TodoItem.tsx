import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'

type Props = {
  todos: Todo[]
  filter: Filter
  onTodo: <K extends keyof Todo, V extends Todo[K]>(
    id: number,
    key: K,
    value: V,
  ) => void
}

const filterMessages = {
  all: 'タスクは無いよ',
  checked: '済タスクは無いよ',
  unchecked: '未タスクは無いよ',
  removed: 'ゴミ箱は空だね',
}

export const TodoItem = (props: Props) => {
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
  return (
    <ul className="h-[calc(100%-3rem)] overflow-scroll pt-3">
      {filterTodos.length === 0 && (
        <div className="flex items-center justify-center pt-8 text-xl">
          <p>{filterMessages[props.filter]}</p>
        </div>
      )}
      {filterTodos.map((todo) => {
        return (
          <li
            className="flex items-center justify-between gap-2 px-4 pb-2"
            key={todo.id}
          >
            <Checkbox
              className=""
              checked={todo.checked}
              disabled={todo.removed || !todo.value}
              onCheckedChange={() =>
                props.onTodo(todo.id, 'checked', !todo.checked)
              }
            />
            <Input
              className={`${!todo.value && 'ring-2 ring-red-400 ring-offset-2'}`}
              type="text"
              disabled={todo.checked || todo.removed}
              value={`${todo.value}`}
              placeholder="タスクを書いてね"
              onChange={(e) => props.onTodo(todo.id, 'value', e.target.value)}
            />
            <Button
              onClick={() => props.onTodo(todo.id, 'removed', !todo.removed)}
              disabled={!todo.value}
            >
              {todo.removed ? '復元' : '削除'}
            </Button>
          </li>
        )
      })}
    </ul>
  )
}
