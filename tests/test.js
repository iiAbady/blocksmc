const { Blocks } = require('../dist');
const blocks = new Blocks();
blocks.player('iAbady').then(player => {
	console.log(player.name);
});