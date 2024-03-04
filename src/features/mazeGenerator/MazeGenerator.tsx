'use client'

import React, { useState } from 'react'

import { cn } from '@/lib/utils'

import { MazeController } from './component/MazeController'
import { MazeGrid } from './component/MazeGrid'
import {
  createInitialMaze,
  createMazeArray,
  createMazeItem,
} from './lib/mazeUtils'

export const MazeGenerator = () => {
  const [mazeHeight, setMazeHeight] = useState<number>(10)
  const [mazeWidth, setMazeWidth] = useState<number>(10)
  const [gridCol, setGridCol] = useState<string>('grid-cols-11')
  const [maze, setMaze] = useState<number[][]>(() =>
    createInitialMaze(mazeHeight, mazeWidth),
  )

  const createMaze = () => {
    // 迷路の初期化
    let mazeArray: number[][] = createInitialMaze(mazeHeight, mazeWidth)

    // 迷路の生成
    mazeArray = createMazeArray(mazeArray)

    // 迷路アイテムの生成
    mazeArray = createMazeItem(mazeArray)

    // Grid幅を調整
    setGridCol(`grid-cols-${mazeWidth + 1}`)

    // 生成した迷路をセット
    setMaze(mazeArray)
  }
  const handleGridCol = (value: number) => {
    setMazeWidth(value)
  }
  return (
    <>
      <div>
        <div className={cn('grid', gridCol)}>
          <MazeGrid maze={maze}></MazeGrid>
        </div>
        <div className="flex pt-4">
          <MazeController
            mazeHeight={mazeHeight}
            mazeWidth={mazeWidth}
            onCreateMaze={createMaze}
            onChangeHeight={setMazeHeight}
            onChangeWidth={handleGridCol}
          />
        </div>
      </div>
    </>
  )
}
