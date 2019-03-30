import { Blocks } from '../src/index';
const blocks = new Blocks();
blocks.player('iAbady').then(player => {
	console.log(player.games.map(g => g.game));
	console.log(player.timePlayed);
});
