import { rand } from '@/lib/utils'

type MazeCellProps = {
  id: string
  type: number
}

export const MazeCell = ({ id, type }: MazeCellProps) => {
  const setItem = () => {
    const emojiArray = ['👑', '🕯', '⚔']
    return (
      <div
        key={id}
        className="flex size-8 items-center justify-center bg-red-200"
      >
        {emojiArray[rand(emojiArray.length)]}
      </div>
    )
  }

  const getCellStyle = (type: number) => {
    switch (type) {
      case 0:
        return <div key={id} className="size-8 bg-white"></div>
      case 1:
        return <div key={id} className="size-8 bg-black"></div>
      default:
        return setItem()
    }
  }

  return getCellStyle(type)
}
