import { rand } from '@/lib/utils'

const isBorder = (
  row: number,
  col: number,
  mazeHeight: number,
  mazeWidth: number,
) => {
  return row === 0 || col === 0 || row === mazeHeight || col === mazeWidth
}
const isWall = (row: number, col: number) => {
  return (row + 1) % 2 === 1 && (col + 1) % 2 === 1
}

const createInitialMaze = (mazeHeight: number, mazeWidth: number) => {
  const initialMaze = Array.from({ length: mazeHeight + 1 }, (_, row) =>
    Array.from({ length: mazeWidth + 1 }, (_, col) =>
      isBorder(row, col, mazeHeight, mazeWidth) || isWall(row, col) ? 1 : 0,
    ),
  )
  return initialMaze
}

const createMazeArray = (mazeArray: number[][]) => {
  const mazeHeight = mazeArray.length - 1
  const mazeWidth = mazeArray[0].length - 1
  const newMaze = mazeArray.map((row) => [...row])
  for (let y = 2; y < mazeHeight; y += 2) {
    for (let x = 2; x < mazeWidth; x += 2) {
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
  newMaze[mazeHeight][mazeWidth - 1] = 0

  return newMaze
}

const createMazeItem = (mazeArray: number[][]) => {
  const mazeHeight = mazeArray.length - 1
  const mazeWidth = mazeArray[0].length - 1
  const newMaze = mazeArray.map((row) => [...row])
  // 周囲のセルをチェックするための方向配列
  const directions = [
    [-1, 0], // 上
    [-1, 1], // 右上
    [0, 1], // 右
    [1, 1], // 右下
    [1, 0], // 下
    [1, -1], // 左下
    [0, -1], // 左
    [-1, -1], // 左上
  ]

  for (let y = 1; y < mazeHeight; y++) {
    for (let x = 1; x < mazeWidth; x++) {
      let n = 0
      if (newMaze[y][x] === 0) {
        directions.forEach(([dy, dx]) => {
          if (newMaze[y + dy]?.[x + dx] === 1) n++
        })
        if (n === 7) {
          if ((rand(2) - 1) % 2 === 0) {
            newMaze[y][x] = 2
          }
        }
      }
    }
  }
  return newMaze
}

export { isBorder, isWall, createMazeArray, createInitialMaze, createMazeItem }
