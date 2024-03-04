import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type ControllerProps = {
  mazeHeight: number
  mazeWidth: number
  onCreateMaze: () => void
  onChangeHeight: (value: number) => void
  onChangeWidth: (value: number) => void
}

export const MazeController = ({
  mazeHeight,
  mazeWidth,
  onCreateMaze,
  onChangeHeight,
  onChangeWidth,
}: ControllerProps) => {
  return (
    <>
      <Button onClick={onCreateMaze}>生成</Button>
      <Select
        value={mazeHeight.toString()}
        onValueChange={(value) => onChangeHeight(parseInt(value))}
      >
        <SelectTrigger>
          <SelectValue></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={'2'}>2</SelectItem>
          <SelectItem value={'4'}>4</SelectItem>
          <SelectItem value={'6'}>6</SelectItem>
          <SelectItem value={'8'}>8</SelectItem>
          <SelectItem value={'10'}>10</SelectItem>
          <SelectItem value={'12'}>12</SelectItem>
          <SelectItem value={'14'}>14</SelectItem>
          <SelectItem value={'16'}>16</SelectItem>
        </SelectContent>
      </Select>
      <Select
        value={mazeWidth.toString()}
        onValueChange={(value) => onChangeWidth(parseInt(value))}
      >
        <SelectTrigger>
          <SelectValue></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={'2'}>2</SelectItem>
          <SelectItem value={'4'}>4</SelectItem>
          <SelectItem value={'6'}>6</SelectItem>
          <SelectItem value={'8'}>8</SelectItem>
          <SelectItem value={'10'}>10</SelectItem>
          <SelectItem value={'12'}>12</SelectItem>
          <SelectItem value={'14'}>14</SelectItem>
          <SelectItem value={'16'}>16</SelectItem>
        </SelectContent>
      </Select>
    </>
  )
}
