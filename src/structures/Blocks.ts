import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { Player, Game } from '../responses/Responses';

type DataOptions = {
		type: 'player' | 'top',
		username?: string | undefined,
		game?: string | undefined
};

export default class Blocks {
		public async player(username: string): Promise<Player> {
				if (typeof username !== 'string') throw new TypeError(`[BlocksMC] expected string on username, got ${typeof username}`);
				return this._getData({type: 'player', username});
				}

		public async top(game: string): Promise<Game> {
				if (typeof game !== 'string') throw new TypeError(`[BlocksMC] expected string on username, got ${typeof game}`);
				return this._getData({ type: 'top', game });
				}

		private async _getData(options: DataOptions): Promise<any> {
				if (options.type === 'player') {
						const data: any = { games: [] };
						const res = await fetch(`https://blocksmc.com/player/${options.username}`);
						const rawData = await res.text();
						const $ = cheerio.load(rawData);
						const rank = $('.profile-rank').text().replace('\n', '')
							.trim();
						const timePlayed = $('h1[dir=ltr]').text().replace('\n', '')
								.trim();
						if (rank) Object.assign(data, { rank });
						if (timePlayed) Object.assign(data, { timePlayed });
						$('div.col-xl-4').each(function(this: any) {
								const stats = {};
								$(this).find('li').each(function(this: any) {
										Object.assign(stats, { [$(this).find('div.key').text()]: $(this).find('div.val').text() });
								});
								data.games.push({
										game: $(this).find('div.title').text()
												.trim(),
										stats
								});
						});
						return data;
								}

				if (options.type === 'top') {
					const data: any = [];
					const res = await fetch(`https://blocksmc.com/${options.game}`);
					const rawData = await res.text();
					const $ = cheerio.load(rawData);
					$('tbody').find('a').each(function(this: any) {
						data.push($(this).text());
					});
					return data;
			}
		}
}
