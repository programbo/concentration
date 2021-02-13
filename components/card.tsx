import clsx from 'clsx'

import { Icons } from '../icons'
import { Unknown } from '../icons/Unknown'

export type CardType = {
  icon: string
  id: string
}

interface CardProps {
  data: CardType
  selected?: boolean
  found?: boolean
  onClick: (card: CardType) => void
}

export function Card({
  data: { id, icon },
  selected,
  found,
  onClick,
}: CardProps) {
  const Icon = Icons[icon]

  const handleClick = () => {
    onClick && onClick({ id, icon })
  }

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center h-40 transition duration-200 transform bg-blue-500 border-4 border-blue-900 shadow cursor-pointer text-gray-50 group w-28 rounded-xl hover:bg-blue-600 hover:scale-105 hover:shadow-lg',
        {
          'pointer-events-none': selected,
        }
      )}
      onClick={handleClick}
    >
      {selected || found ? (
        <Icon
          className={clsx('w-12 h-12', {
            'opacity-20 pointer-events-none': found,
          })}
        />
      ) : (
        <Unknown className="w-12 h-12" />
      )}
    </div>
  )
}
