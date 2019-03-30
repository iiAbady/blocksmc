// tslint:disable-next-line: interface-over-type-literal
export type Player = {
	rank: string,
	timePlayed: string,
	games: Array<Game>
};

export type TOP = Array<string>;

export interface Game {
	game: string;
	stats: Array<Stat>;
}

export interface Stat {
	Points: string;
	Wins: string;
	Played: string;
	Eggs?: string;
	Blocks?: string;
	Kills?: string;
	FireWorks?: string;
	Crates?: string;
	DMs?: string;
	Sponges?: string;
	Beds?: string;
	Rounds?: string;
	Goals?: string;
}
