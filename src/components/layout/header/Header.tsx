import { Button } from '@/components/ui/button'

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-screen border-b py-2">
      <div className="flex items-center justify-between pl-10 pr-2">
        <h1 className="text-left text-xl font-semibold">React 100本ノック</h1>
        <Button className="rounded border-2 border-black">=</Button>
      </div>
    </header>
  )
}
