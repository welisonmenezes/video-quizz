// OBJETOS
var objQuestions = [
	{
		answered: false,
		time: 18,
		correct: "2"
	},
	{
		answered: false,
		time: 29,
		correct: "1"
	},
	{
		answered: false,
		time: 47,
		correct: "1"
	}
];


var objPlayers = [
	{
		name: "Ricardo",
		avatar: "img/avatar-2.png",
		lifes: 1,
		coins: 500,
		errors: 0,
		hits: 0,
		timeouts: 0
	},
	{
		name: "Alano",
		avatar: "img/avatar-1.png",
		lifes: 3,
		coins: 200,
		errors: 0,
		hits: 0,
		timeouts: 0
	},
	{
		name: "Rafael",
		avatar: "img/avatar-2.png",
		lifes: 2,
		coins: 1200,
		errors: 0,
		hits: 0,
		timeouts: 0
	},
	{
		name: "Giovani",
		avatar: "img/avatar-3.png",
		lifes: 2,
		coins: 350,
		errors: 0,
		hits: 0,
		timeouts: 0
	},
	{
		name: "Welison",
		avatar: "img/avatar-4.png",
		lifes: 1,
		coins: 25,
		errors: 0,
		hits: 0,
		timeouts: 0
	}
];


function compare(a,b) {
	if (a.coins > b.coins)
		return -1;
	if (a.coins < b.coins)
		return 1;
	return 0;
}



var objPlayer = {
	name: "",
	avatar: "",
	lifes: 3,
	coins: 0,
	errors: 0,
	hits: 0,
	timeouts: 0
};