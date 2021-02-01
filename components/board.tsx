import clsx from 'clsx'
import { useEffect, useState } from 'react'

import { Icons } from '../icons'
import { Card, CardType } from './card'

interface BoardProps {
  size: number[]
}

function shuffle<T>(items: T[]) {
  return items.sort(() => (Math.random() > 0.5 ? 1 : -1))
}

export function Board({ size }: BoardProps) {
  const [width, height] = size
  const numberOfCards = width * height

  const [cards, setCards] = useState<CardType[]>([])
  const [found, setFound] = useState<string[]>([])
  const [selectedCards, setSelectedCards] = useState<CardType[]>([])

  const handleClickCard = (card: CardType) => {
    if (selectedCards.length === 1) {
      setSelectedCards([...selectedCards, card])
      if (selectedCards[0].icon === card.icon) {
        setFound([...found, selectedCards[0].icon])
        setSelectedCards([])
      }
    } else {
      setSelectedCards([card])
    }
  }

  useEffect(() => {
    const randomIcons = shuffle<string>(Object.keys(Icons)).slice(
      0,
      numberOfCards / 2
    )

    const firstHalf = randomIcons.map<CardType>(icon => ({
      icon,
      id: `${icon}-1`,
    }))
    const secondHalf = randomIcons.map<CardType>(icon => ({
      icon,
      id: `${icon}-2`,
    }))
    setCards(
      shuffle<CardType>([...firstHalf, ...secondHalf])
    )
  }, [])

  return (
    <div className={clsx('grid gap-6', columns(width), rows(height))}>
      {cards.map<JSX.Element>(card => (
        <Card
          key={card.id}
          data={card}
          selected={!!selectedCards.find(selected => selected?.id === card.id)}
          found={Boolean(found.find(icon => icon === card.icon))}
          onClick={handleClickCard}
        />
      ))}
    </div>
  )
}

function columns(width: number) {
  if (width % 2 === 1 || width > 6) {
    throw new Error('A board should have an even number of columns, under six.')
  }
  switch (width) {
    case 2:
      return 'grid-cols-2'
    case 4:
      return 'grid-cols-4'
    case 6:
      return 'grid-cols-6'
  }
}

function rows(height: number) {
  if (height > 6 || height < 1) {
    throw new Error('A board should six or less rows.')
  }
  switch (height) {
    case 1:
      return 'grid-rows-1'
    case 2:
      return 'grid-rows-2'
    case 3:
      return 'grid-rows-3'
    case 4:
      return 'grid-rows-4'
    case 5:
      return 'grid-rows-5'
    case 6:
      return 'grid-rows-6'
  }
}
