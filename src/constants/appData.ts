import { Counter } from '@/features/counter/Counter'
import { HelloWorld } from '@/features/helloWorld/HelloWorld'
import { MazeGenerator } from '@/features/mazeGenerator/MazeGenerator'
import { Todo } from '@/features/todo/Todo'

import { Images } from './images'
export const appData = [
  {
    title: '001 Hello World',
    description: 'こんにちわ',
    footer: '特になし',
    image: Images[0],
    id: '001',
    component: HelloWorld,
  },
  {
    title: '002 Counter',
    description: 'カウンター',
    footer: 'useReducerを使う',
    image: Images[1],
    id: '002',
    component: Counter,
  },
  {
    title: '003 Todo',
    description: 'Todoリスト',
    footer: 'コンポーネント単位で考える',
    image: Images[2],
    id: '003',
    component: Todo,
  },
  {
    title: '004 Maze Generator',
    description: '迷路自動生成',
    footer: '棒倒し法',
    id: '101',
    image: null,
    component: MazeGenerator,
  },
]
