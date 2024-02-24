'use client'

import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { rand } from '@/lib/utils'

export const MazeGenerator = () => {
  const height = 8
  const width = 8

  const isBorder = (row: number, col: number) => {
    return row === 0 || col === 0 || row === height || col === width
  }
  const isWall = (row: number, col: number) => {
    return (row + 1) % 2 === 1 && (col + 1) % 2 === 1
  }

  const createInitialMaze = () => {
    const initialMaze = Array.from({ length: height + 1 }, (_, row) =>
      Array.from({ length: width + 1 }, (_, col) =>
        isBorder(row, col) || isWall(row, col) ? 1 : 0,
      ),
    )
    return initialMaze
  }

  const [maze, setMaze] = useState<number[][]>(() => createInitialMaze())

  const createMazeArray = (mazeArray: number[][]) => {
    const newMaze = mazeArray.map((row) => [...row])
    for (let y = 2; y < height; y += 2) {
      for (let x = 2; x < width; x += 2) {
        const direction = ['right', 'down']
        if (y === 2) {
          direction.push('up')
        }
        if (newMaze[y][x - 1] === 0) {
          direction.push('left')
        }
        const n = rand(direction.length)
        switch (direction[n]) {
          case 'right':
            newMaze[y][x + 1] = 1
            break
          case 'up':
            newMaze[y - 1][x] = 1
            break
          case 'down':
            newMaze[y + 1][x] = 1
            break
          case 'left':
            newMaze[y][x - 1] = 1
            break
        }
      }
    }
    newMaze[0][1] = 0
    newMaze[height][width - 1] = 0
    return newMaze
  }

  // const createMazeItem = (mazeArray: number[][]) => {
  //   const newMaze = mazeArray.map((row) => [...row])
  //   // 周囲のセルをチェックするための方向配列
  //   const directions = [
  //     [-1, 0], // 上
  //     [-1, 1], // 右上
  //     [0, 1], // 右
  //     [1, 1], // 右下
  //     [1, 0], // 下
  //     [1, -1], // 左下
  //     [0, -1], // 左
  //     [-1, -1], // 左上
  //   ]

  //   for (let y = 1; y < height; y++) {
  //     for (let x = 1; x < width; x++) {
  //       let n = 0
  //       if (newMaze[y][x] === 0) {
  //         directions.forEach(([dy, dx]) => {
  //           if (newMaze[y + dy]?.[x + dx] === 1) n++
  //         })
  //         if (n === 7) {
  //           newMaze[y][x] = 2
  //         }
  //       }
  //     }
  //   }
  //   return newMaze
  // }

  const createMaze = () => {
    let mazeArray: number[][] = createInitialMaze()
    mazeArray = createMazeArray(mazeArray)
    setMaze(mazeArray)
  }

  const renderCell = (col: number, rowIndex: number, colIndex: number) => {
    const key = `cell-${rowIndex}-${colIndex}`
    const emojiArray = ['👑', '🕯', '⚔']
    const cellStyles: { [key: number]: JSX.Element } = {
      0: <div key={key} className="size-8 bg-white"></div>,
      1: <div key={key} className="size-8 bg-black"></div>,
    }
    return (
      cellStyles[col] || (
        <div key={key} className="size-8">
          {emojiArray[rand(emojiArray.length)]}
        </div>
      )
    )
  }
  return (
    <>
      <div>
        <div className="grid grid-cols-9">
          {maze.map((row, rowIndex) => {
            return (
              <React.Fragment key={`row-${rowIndex}`}>
                {row.map((col, colIndex) =>
                  renderCell(col, rowIndex, colIndex),
                )}
              </React.Fragment>
            )
          })}
        </div>
        <div>
          <Button onClick={createMaze}></Button>
        </div>
      </div>
    </>
  )
}
