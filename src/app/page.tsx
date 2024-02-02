import { Item } from '@/components/elements/card/Item'
import { appData } from '@/constants/appData'
export default function Home() {
  return (
    <div className="pt-20">
      <div className="flex items-center justify-center">
        {appData.map((item) => {
          return <Item appData={item} key={item.title} />
        })}
      </div>
    </div>
  )
}
