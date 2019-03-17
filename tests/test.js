const blocksmc = require('../index');

blocksmc.top('sky-wars-solo').then(leader => {
	console.log(leader);
});

blocksmc.player('iAbady').then(player => {
	console.log(player);
});
