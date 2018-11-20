(function(){

	// OBJETOS
	var objQuestions = [
		{
			answered: false,
			time: 1,
			correct: "1"
		},
		{
			answered: false,
			time: 3,
			correct: "2"
		},
		{
			answered: false,
			time: 5,
			correct: "3"
		}
	];

	var objPlayer = {
		name: "Welison Menezes",
		avatar: "img/avatar.png",
		lifes: 5,
		coins: 0
	};

	// VARIAVEIS
	var currentQuestion = 0;
	var bonusTime = 5;
	var timerQuestion, timerBonus, currentObj, currentForm, currentTime, percVideo;

	// ELEMENTS
	var videoMain = document.getElementById("videoMain"),
		btnPlay = document.getElementById("btnPlay"),
		questionWrap = document.getElementById("questionWrap"),
		forms = document.forms,
		audioEffects = document.getElementById("audioEffects"),
		ulHearts = document.getElementById("ulHearts"),
		userCoins = document.getElementById("userCoins"),
		userAvatar = document.getElementById("userAvatar"),
		userName = document.getElementById("userName"),
		timerScreen = document.getElementById("timerScreen"),
		progressBar = document.getElementById("progressBar");



	btnPlay.addEventListener("click", function(){
		if(videoMain.paused){
			videoMain.play();
		}else{
			videoMain.pause();
		}
	});


	videoMain.addEventListener("timeupdate", function(){
		currentTime = videoMain.currentTime;
		
		updateProgressBar();

		if(objQuestions[currentQuestion]){

			currentObj = objQuestions[currentQuestion];

			/*
			 *	TEMPO PARA A PERGUNTA
			 */
			if(currentTime >= currentObj.time 
			&& currentObj.answered === false)
			{
				currentObj.answered = true;
				videoMain.pause();

				
				currentForm = forms[currentQuestion];
				showQuestion();

				timerQuestion = setTimeout(function() {

					/*
					 *	TEMPO EXPIRADO
					 */

					currentForm.querySelector('.btnAnswer').remove();
					clearInterval(timerBonus);
					wrongAnswer();
					
				}, 5001);

				timerBonus = setInterval(function(){
					if(bonusTime >= 1){
						bonusTime--;

						setTimerScreen();
						
					}
				}, 1000);


				
			}
		}
		
	});



	function showQuestion(){
		audioEffects.src = "source/slide_down.mp3";
		audioEffects.oncanplay = function(){
			audioEffects.play();

			questionWrap.classList.add("active");
			currentForm.classList.add("current");

			videoMain.classList.add("disabled");

			
			answerQuestion();
		}
	}

	function hideQuestion(){
		audioEffects.src = "source/slide_up.mp3";
		audioEffects.oncanplay = function(){
			audioEffects.play();

			questionWrap.classList.remove("active");
			currentForm.classList.remove("current");

			videoMain.classList.remove("disabled");

			currentQuestion++;
			videoMain.play();
			clearTimeout(timerQuestion);

			resetTimerScreen();

			bonusTime = 5;

		};
		
	}


	function answerQuestion(){
		var btnAnswer = currentForm.querySelector('.btnAnswer');
		var messageError = currentForm.querySelector('.message-error');

		if(btnAnswer){
			btnAnswer.addEventListener("click", function(e){
				e.preventDefault();
				
				var inputs = currentForm.querySelector('input[type=radio]:checked');

				if(inputs === null){
					messageError.innerHTML = "Selecione uma opção!";
				}else{
					this.remove();
					messageError.innerHTML = "";

					clearInterval(timerBonus);
					clearTimeout(timerQuestion);

					if(inputs.value == currentObj.correct){

						/*
						 *	RESPOSTA CORRETA
						 */
						 rightAnswer();

					}else{

						/*
						 *	RESPOSTA ERRADA
						 */
						wrongAnswer();

					}

				}


			});
		}
	}


	function wrongAnswer(){
		currentForm.classList.add("error");
		audioEffects.src = "source/fail.mp3";
		audioEffects.oncanplay = function(){
			audioEffects.play();


			objPlayer.lifes--;
			setHeartsToPlayer();

			setTimeout(function(){
				hideQuestion();
			}, 1500);
		};
	}

	function rightAnswer(){
		currentForm.classList.add("success");
		audioEffects.src = "source/success.mp3";
		audioEffects.oncanplay = function(){
			audioEffects.play();

			objPlayer.coins += 100 * bonusTime;
			setCoinsToPlayer();

			setTimeout(function(){
				hideQuestion();
			}, 1500);
		};
	}

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

	function setAvatarNamePlayer(){
		userAvatar.src = objPlayer.avatar;
		userName.innerHTML = objPlayer.name;
	}
	setAvatarNamePlayer();


	function setTimerScreen(){
		var showTime = (100 / 5) * bonusTime;
		var classTime = "p" + showTime.toFixed(0);

		timerScreen.querySelector('span').innerHTML = bonusTime;

		timerScreen.classList.remove("p100");
		timerScreen.classList.remove("p80");
		timerScreen.classList.remove("p60");
		timerScreen.classList.remove("p40");
		timerScreen.classList.remove("p20");
		timerScreen.classList.add(classTime);
	}

	function resetTimerScreen(){
		timerScreen.querySelector('span').innerHTML = 5;
		timerScreen.classList.add("p100");
		timerScreen.classList.remove("p80");
		timerScreen.classList.remove("p60");
		timerScreen.classList.remove("p40");
		timerScreen.classList.remove("p20");
		timerScreen.classList.remove("p0");
	}

	function updateProgressBar(){
		percVideo =  Math.round( Math.round((100 * Math.round(currentTime))) / Math.round(videoMain.duration) );
		progressBar.style.width = percVideo+"%";
	}


}());