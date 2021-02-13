# Concentration Game
## Description
A simple concentration card game where the user flips cards to reveal it's icon and must find that cards duplicate by flipping another card.

## Components
* [Board Code](./components/board.tsx) / [Doc](#board)
* [Card Code](./components/card.tsx) / [Doc](#card)

## Board
### Usage
```ts
<Board size={[4, 3]} />
```

The width property must be even, equal/more than 2 and no more than 6. <br>
The height propery must be equal or more than 1 and less than or equal to 6.
<br><br>
The Board component uses the Boardprops interface referenced below.

```ts
  interface BoardProps {
    size: [width: number, height: number]
  }
```

The Board component handles the main game logic:
* Creating the game-board from width and height values,
* Builds the list of icons and subsequently the list of cards,
* Shuffles the card positions within the list,
* And returns a grid with cards mapped to each position, each card having it's own logic to control whether it is selected or found.

## Card
```ts
  type CardType = {
  icon: string
  id: string
  }

  interface CardProps {
    data: CardType
    selected?: boolean
    found?: boolean
    onClick: (card: CardType) => void
  }
```
The Card component utilizes the CardProps interface which contains the variables for:
* data: Contains the icon and card id values
* selected: (optional) True indicates the card has been clicked.
* found: (optional) True indicates that the matched pair of cards have been found and flags the card to ignore click events.
* onClick: Returns the Card icon and id when set.