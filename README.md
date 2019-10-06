[![npm](https://img.shields.io/npm/v/blocksmc.svg)](https://www.npmjs.com/package/blocksmc)
[![install size](https://packagephobia.now.sh/badge?p=blocksmc)](https://packagephobia.now.sh/result?p=blocksmc)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/blocksmc.svg)
![badge](https://action-badges.now.sh/Abady321x123/blocksmc)


[![NPM](https://nodei.co/npm/blocksmc.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/blocksmc/)


# BlocksMC 
A simple scraper & wrapper for BlocksMC!

## Instalation
```js
npm i blocksmc
// or
yarn add blocksmc
```

## Example Usage
```js
const { Blocks } = require('blocksmc');
const blocks = new Blocks();

blocks.player('iAbady').then(player => {
    console.log(player.games.map(g => `${g.game} ${g.stats.Deaths}`))
    console.log(player.rank)
    console.log(player.timePlayed)
});

blocks.top('sky-wars').then(leader => {
    console.log(leader);
})
```

## Response Example

### `Player`
```js
player(username) --> 
rank: String,
timePlayed: String,
games: [
  {
 game: String,
 stats: {
     Points: Number,
     Wins: Number,
     Played: Number,
     Eggs?: Number,
     Blocks?: Number,
     Kills?: Number,
     FireWorks?: Number,
     Crates?: Number,
     DMs?: Number,
     Sponges?: Number,
     Beds?: Number,
     Rounds?: Number,
     Goals?: Number,
 }
  }
]
```

### `TOP`
```js
top(game) --> Array
```
