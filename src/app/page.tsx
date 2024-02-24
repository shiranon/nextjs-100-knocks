import clsx from 'clsx'

import { AppCard } from '@/components/elements/card/AppCard'
import { appData } from '@/constants/appData'

export default function Home() {
  return (
    <div
      className={clsx('grid justify-center gap-4')}
      style={{ gridTemplateColumns: 'repeat(auto-fit, 300px)' }}
    >
      {appData.map((item) => {
        return <AppCard appData={item} key={item.id} className="select-none" />
      })}
    </div>
  )
}
