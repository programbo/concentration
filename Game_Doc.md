# Concentration Game
## Description
A simple concentration card game where the user flips cards to reveal it's icon and must find that cards duplicate by flipping another card.

## Components
* [Board Code](./components/board.tsx) / [Doc](#board)
* [Card Code](./components/card.tsx) / [Doc](#card)

## Board
The Board component handles the main game logic:
* Creating the game-board from width and height values,
* Builds the list of icons and subsequently the list of cards,
* Shuffles the card positions within the list,
* And returns a grid with cards mapped to each position, each card having it's own logic to control whether it is selected or found.

The Board's width must be: even, more than 0 and no more than 6.
```tsx
(width % 2 === 1 || width > 6)
```

## Card
The Card component contains the values for:
* Current icon,
* Whether the card is currently selected or found,
* And the logic returning the card data onClick.