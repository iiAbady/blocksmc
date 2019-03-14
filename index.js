/* eslint-disable func-names */
/* eslint-env es6 */
const fetch = require('node-fetch');
const cheerio = require('cheerio');

/**
 * Fetchs a player data on BlocksMC.
 * @param {string} username A username on BlocksMC.
 * @returns {Promise} Data
 * @async
 */
async function player(username) {
	if (!username) throw new Error('[BlocksMC] username cannot be empty.');
	const data = [];
	const res = await fetch(`https://blocksmc.com/player/${encodeURIComponent(username)}`);
	const rawData = await res.text();
	const $ = cheerio.load(rawData);
	$('div.col-xl-4').each(function() {
		const stats = {};
		$(this).find('li').each(function() {
			Object.assign(stats, { [$(this).find('div.key').text()]: $(this).find('div.val').text() });
		});
		data.push({
			game: $(this).find('div.title').text()
				.trim(),
			stats
		});
	});
	return data;
}


module.exports = player;
