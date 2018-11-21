(function(){

	var playAgain = document.getElementById("playAgain"),
		finishGame = document.getElementById("finishGame"),
		stepTwo = document.getElementById("stepTwo"),
		stepThree = document.getElementById("stepThree"),
		stepFour = document.getElementById("stepFour");


	playAgain.addEventListener("click", function(){
		audioEffects.src = "source/lets-go.mp3";
		audioEffects.oncanplay = function(){
			audioEffects.play();
			
			stepThree.classList.remove("active");
			stepTwo.classList.add("active");

			resetPlayer();
		};
	});

	finishGame.addEventListener("click", function(){

		audioEffects.src = "source/ending.mp3";
		audioEffects.oncanplay = function(){
			audioEffects.play();

			stepThree.classList.remove("active");
			stepFour.classList.add("active");

			makeReport();
			makeRanking();
		};
	});

}());