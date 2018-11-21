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
		id: 1,
		name: "Maria",
		avatar: "img/avatar-2.png",
		lifes: 2,
		coins: 560,
		errors: 0,
		hits: 2,
		timeouts: 1
	},
	{
		id: 2,
		name: "Ricardo",
		avatar: "img/avatar-1.png",
		lifes: 1,
		coins: 500,
		errors: 2,
		hits: 1,
		timeouts: 0
	},
	{
		id: 3,
		name: "Alano",
		avatar: "img/avatar-8.png",
		lifes: 3,
		coins: 200,
		errors: 0,
		hits: 0,
		timeouts: 0
	},
	{
		id: 4,
		name: "Rafael",
		avatar: "img/avatar-6.png",
		lifes: 2,
		coins: 1200,
		errors: 0,
		hits: 3,
		timeouts: 0
	},
	{
		id: 5,
		name: "Joana",
		avatar: "img/avatar-3.png",
		lifes: 2,
		coins: 950,
		errors: 0,
		hits: 2,
		timeouts: 1
	},
	{
		id: 6,
		name: "Giovani",
		avatar: "img/avatar-4.png",
		lifes: 2,
		coins: 350,
		errors: 1,
		hits: 1,
		timeouts: 1
	},
	{
		id: 7,
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
	id: 8,
	name: "",
	avatar: "",
	lifes: 3,
	coins: 0,
	errors: 0,
	hits: 0,
	timeouts: 0
};








var elem = document.documentElement;

function openFullscreen() {
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.mozRequestFullScreen) { /* Firefox */
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { /* IE/Edge */
		elem.msRequestFullscreen();
	}

	document.getElementsByTagName("BODY")[0].classList.add("full-screen");
}

function closeFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozCancelFullScreen) { /* Firefox */
		document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) { /* IE/Edge */
		document.msExitFullscreen();
	}

	document.getElementsByTagName("BODY")[0].classList.remove("full-screen");
}


function isFullscreen() {
    if (document.fullscreenElement) {
        return true;
    }
    else if (document.webkitFullscreenElement) {
        return true;
    }
    else if (document.mozFullScreenElement) {
        return true;
    }
    else return false;
}

document.getElementById("openFullscreen").addEventListener("click", function(){
	if(isFullscreen()){
		closeFullscreen();
	}
	else{
		openFullscreen();
	}
});



function setHeartsToPlayer(){
	var lifes = objPlayer.lifes, i;

	intoUl = "";
	if(lifes > 0){
		for(i = 0; i < lifes; i++){
			intoUl += "<li></li>";
		}
		ulHearts.innerHTML = intoUl;
	}
}
setHeartsToPlayer();

function setCoinsToPlayer(){
	var coins = objPlayer.coins;

	userCoins.innerHTML = coins;
}
setCoinsToPlayer();

function resetPlayer(){
	objPlayer.lifes = 3;
	objPlayer.coins = 0;
	objPlayer.hits = 0;
	objPlayer.errors = 0;
	objPlayer.timeouts = 0;
	setHeartsToPlayer();
	setCoinsToPlayer();
}