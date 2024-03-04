import React from 'react'

import { MazeCell } from './MazeCell'

type Props = {
  maze: number[][]
}

export const MazeGrid = ({ maze }: Props) => {
  return (
    <>
      {maze.map((row, rowIndex) => (
        <React.Fragment key={`row-${rowIndex}`}>
          {row.map((col, colIndex) => (
            <MazeCell
              key={`col-${colIndex}`}
              id={`cell-${rowIndex}-${colIndex}`}
              type={col}
            />
          ))}
        </React.Fragment>
      ))}
    </>
  )
}
