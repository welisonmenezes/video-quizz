// OBJETOS
var objQuestions = [
	{
		answered: false,
		//time: 1,
		time: 18,
		correct: "2"
	},
	{
		answered: false,
		//time: 2,
		time: 29,
		correct: "1"
	},
	{
		answered: false,
		//time: 3,
		time: 47,
		correct: "1"
	}
];


var objPlayers = [
	{
		name: "Maria",
		avatar: "img/avatar-2.png",
		lifes: 2,
		coins: 560,
		errors: 0,
		hits: 2,
		timeouts: 1
	},
	{
		name: "Ricardo",
		avatar: "img/avatar-1.png",
		lifes: 1,
		coins: 500,
		errors: 2,
		hits: 1,
		timeouts: 0
	},
	{
		name: "Alano",
		avatar: "img/avatar-8.png",
		lifes: 3,
		coins: 200,
		errors: 0,
		hits: 0,
		timeouts: 0
	},
	{
		name: "Rafael",
		avatar: "img/avatar-6.png",
		lifes: 2,
		coins: 1200,
		errors: 0,
		hits: 3,
		timeouts: 0
	},
	{
		name: "Joana",
		avatar: "img/avatar-3.png",
		lifes: 2,
		coins: 950,
		errors: 0,
		hits: 2,
		timeouts: 1
	},
	{
		name: "Giovani",
		avatar: "img/avatar-4.png",
		lifes: 2,
		coins: 350,
		errors: 1,
		hits: 1,
		timeouts: 1
	},
	{
		name: "Welison",
		avatar: "img/avatar-9.png",
		lifes: 1,
		coins: 725,
		errors: 1,
		hits: 2,
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