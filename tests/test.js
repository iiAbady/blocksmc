const blocksmc = require('../index');

blocksmc.player('iAbady').then(player => {
	console.log(player.games.map(g => `${g.game} ${g.stats.Deaths}`));
	console.log(player.rank);
});
