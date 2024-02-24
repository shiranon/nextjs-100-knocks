import { Folder, FolderCheck, FolderMinus, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type Props = {
  onTab: (filter: Filter) => void
}

export const NavBar = (props: Props) => {
  return (
    <div className="h-10">
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'ghost'}
              onClick={() => {
                props.onTab('all')
              }}
            >
              <Folder className="size-4"></Folder>
              <span className="sr-only">All</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>All</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'ghost'}
              onClick={() => {
                props.onTab('checked')
              }}
            >
              <FolderCheck className="size-4"></FolderCheck>
              <span className="sr-only">Checked</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Checked</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'ghost'}
              onClick={() => {
                props.onTab('unchecked')
              }}
            >
              <FolderMinus className="size-4"></FolderMinus>
              <span className="sr-only">Uncheked</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Uncheked</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'ghost'}
              onClick={() => {
                props.onTab('removed')
              }}
            >
              <Trash2 className="size-4"></Trash2>
              <span className="sr-only">Removed</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Removed</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
