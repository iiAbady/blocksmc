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
    console.log(player.game.map(g => `${g.game} ${g.stats.Deaths}`))
});

blocksmc.top('sky-wars').then(leader => {
    console.log(leader);
})
```

## Response Example

### `Player`
```js
player(username) --> 
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
```

### `TOP`
```js
top(game) ---> Array
```
