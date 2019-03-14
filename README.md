# BlocksMC 
A simple scraper & wrapper for BlocksMC!

## Instalation
```
npm i node-myanimelist
```

## Example Usage
```js
const blocksmc = require('blocksmc');
blocksmc.player('iAbady').then(player => {
    console.log(player.game.map(g => `${g.game} ${g.stats.deaths}`))
});
```

## Response Example

### `Player`
```js
player(username) ---> 
[{
 game: string,
 stats: {
     Points: number,
     Wins: number,
     Played: number,
     Eggs?: number,
     Blocks?: number,
     Kills?: number,
     FireWorks?: number,
     Crates?: number,
     DMs?: number,
     Sponges?: number,
     Beds?: number,
     Rounds?: number,
     Goals?: number,
 }
}]