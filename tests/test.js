const blocksmc = require('../index');

blocksmc.player('iAbady').then(player => {
	console.log(player.games);
});
