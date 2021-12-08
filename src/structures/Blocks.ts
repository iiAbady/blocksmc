import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import type { Player, Top, } from '../responses/Responses';

export default class Blocks {
	public async player(username: string,): Promise<Player> {
		if (typeof username !== 'string') throw new TypeError(`[BlocksMC] expected string on username, got ${typeof username}`,);
		return this._getPlayer(username,);
	}

	public async top(game: string,): Promise<Top> {
		if (typeof game !== 'string') throw new TypeError(`[BlocksMC] expected string on game, got ${typeof game}`,);
		return this._getLeader(game,);
	}

	private async _getPlayer(player: string,): Promise<any> {
		const data: any = { games: [], };
		const res = await fetch(`https://blocksmc.com/player/${player}`,);
		const rawData = await res.text();
		const $ = cheerio.load(rawData,);
		const name = $('.profile-header h1',).text().trim();
		const rank = $('.profile-rank',).text().replace('\n', '',)
			.trim();
		const timePlayed = $('h1[dir=ltr]',).text().replace('\n', '',)
			.trim();
		Object.assign(data, { name, rank, timePlayed, },);
		// eslint-disable-next-line func-names
		$('div.col-xl-4',).each(() => {
			const stats = {};
			// eslint-disable-next-line func-names
			$(this,).find('li',).each(() => {
				Object.assign(stats, { [$(this,).find('div.key',).text()]: $(this,).find('div.val',).text(), },);
			},);
			data.games.push({
				game: $(this,).find('div.title',).text()
					.trim(),
				stats,
			},);
		},);
		return data;
	}

	private async _getLeader(game: string,) {
		const data: any = [];
		const res = await fetch(`https://blocksmc.com/${game.toLowerCase().split(' ',).join('-',)
			.trim()}`,);
		const rawData = await res.text();
		const $ = cheerio.load(rawData,);
		$('tbody',).find('a',).each(() => {
			data.push($(this,).text(),);
		},);
		return data;
	}
}
