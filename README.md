[![npm](https://img.shields.io/npm/v/blocksmc.svg)](https://www.npmjs.com/package/blocksmc)
[![install size](https://packagephobia.now.sh/badge?p=blocksmc)](https://packagephobia.now.sh/result?p=blocksmc)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/blocksmc.svg)
[![Build Status](https://travis-ci.org/Abady321x123/blocksmc.svg?branch=master)](https://travis-ci.org/Abady321x123/blocksmc)


[![NPM](https://nodei.co/npm/blocksmc.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/blocksmc/)


# BlocksMC 
A simple scraper & wrapper for BlocksMC!

## Instalation
```
npm i blocksmc
```

## Example Usage
```js
const blocksmc = require('blocksmc');

blocksmc.player('iAbady').then(player => {
    console.log(player.games.map(g => `${g.game} ${g.stats.Deaths}`))
    console.log(player.rank)
});

blocksmc.top('sky-wars').then(leader => {
    console.log(leader);
})
```

## Response Example

### `Player`
```js
player(username) --> 
rank: String,
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
