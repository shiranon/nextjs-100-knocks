'use client'
import { useReducer } from 'react'

import { Button } from '@/components/ui/button'

// counterの初期値
const initialState = 0

// reducer関数
const reducerFunc = (countState: number, action: string) => {
  switch (action) {
    case 'increment':
      return countState + 1
    case 'decrement':
      return countState - 1
    case 'reset':
      return (countState = initialState)
    default:
      return countState
  }
}

export const Counter = () => {
  // 作成したreducerFunc関数とcountStateをuseReducerに渡す
  // useReducerはcountStateとdispatchをペアで返すので、分割代入する
  const [count, dispatch] = useReducer(reducerFunc, initialState)

  // カウント数とそれぞれのactionを実行する<Button/>を設置する

  return (
    <>
      <div className="m-6 flex w-96 items-center justify-center rounded-lg bg-black p-6">
        <div className="">
          <div className="pb-4 text-center text-2xl font-bold text-white">
            Counter
          </div>
          <div className="pb-4 text-center text-2xl text-white">{count}</div>
          <div className="flex items-center justify-center gap-4">
            <Button
              size={'icon'}
              className="rounded-full bg-[#FF9400] hover:bg-[#df9938]"
              onClick={() => dispatch('increment')}
            >
              +
            </Button>
            <Button
              size={'icon'}
              className="rounded-full bg-[#FF9400] hover:bg-[#df9938]"
              onClick={() => dispatch('decrement')}
            >
              -
            </Button>
            <Button
              size={'icon'}
              className="rounded-full bg-[#FF9400] hover:bg-[#df9938]"
              onClick={() => dispatch('reset')}
            >
              C
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
