(function(){

	var playAgain = document.getElementById("playAgain"),
		finishGame = document.getElementById("finishGame"),
		stepTwo = document.getElementById("stepTwo"),
		stepThree = document.getElementById("stepThree"),
		stepFour = document.getElementById("stepFour");


	playAgain.addEventListener("click", function(){
		stepThree.classList.remove("active");
		stepTwo.classList.add("active");
	});

	finishGame.addEventListener("click", function(){
		stepThree.classList.remove("active");
		stepFour.classList.add("active");

		makeReport();
		makeRanking();
	});

}());