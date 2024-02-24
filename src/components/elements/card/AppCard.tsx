import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import None from '@/public/none.png'

type CardProps = React.ComponentProps<typeof Card> & {
  appData: {
    title: string
    description: string
    footer: string
    image: StaticImageData | null
    id: string
  }
}

export const AppCard = ({ className, appData, ...props }: CardProps) => {
  return (
    <Card className={cn('min-w-[300px]', className)} {...props}>
      <Link href={`/apps/${appData.id}`} scroll={false}>
        <CardHeader>
          <CardTitle>{appData.title}</CardTitle>
          <CardDescription>{appData.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={appData.image ? appData.image : None}
            alt={appData.title}
          />
        </CardContent>
        <CardFooter>{appData.footer}</CardFooter>
      </Link>
    </Card>
  )
}
