const { Blocks, version } = require('../dist');
console.log(version)
const blocks = new Blocks();
blocks.player('iAbady').then(player => {
    console.log(player.games.map(m => m.stats));
});

blocks.top('sky-wars').then(leader => {
    console.log(leader.map(m => m));
})