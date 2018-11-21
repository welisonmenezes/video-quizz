(function(){

	// VARIAVEIS
	var currentQuestion = 0;
	var bonusTime = 10;
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

					currentForm.querySelector('.btnAnswer').classList.add("hide");
					clearInterval(timerBonus);
					wrongAnswer(true);
					objPlayer.timeouts++;
					
				}, 10001);

				timerBonus = setInterval(function(){
					if(bonusTime >= 1){
						bonusTime--;

						setTimerScreen();
						
					}
				}, 1000);


				
			}
		}
		
	});


	videoMain.addEventListener("ended", function(){
		var stepTwo = document.getElementById("stepTwo"),
		stepFour = document.getElementById("stepFour");

		audioEffects.src = "source/ending.mp3";
		audioEffects.oncanplay = function(){
			audioEffects.play();

			stepTwo.classList.remove("active");
			stepFour.classList.add("active");

			makeReport();
			makeRanking();
		};
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

			bonusTime = 10;

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
					this.classList.add("hide");
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


	function wrongAnswer(isTimeout){
		currentForm.classList.add("error");

		if(isTimeout){
			audioEffects.src = "source/timeout.mp3";
		}else{
			audioEffects.src = "source/fail.mp3";
		}
		
		audioEffects.oncanplay = function(){
			audioEffects.play();


			objPlayer.lifes--;

			if(!isTimeout){
				objPlayer.errors++;
			}
			
			setHeartsToPlayer();


			if(objPlayer.lifes < 1){

				setTimeout(function(){
					audioEffects.src = "source/die.mp3";
					audioEffects.oncanplay = function(){
						audioEffects.play();

						resetEnvoirement();

						document.getElementById("stepTwo").classList.remove("active");
						document.getElementById("stepThree").classList.add("active");
					};
				}, 1500);

			}else{
				setTimeout(function(){
					hideQuestion();
				}, 1500);
			}
			
		};
	}

	function rightAnswer(){
		currentForm.classList.add("success");
		audioEffects.src = "source/success.mp3";
		audioEffects.oncanplay = function(){
			audioEffects.play();

			objPlayer.coins += 100 * bonusTime;
			objPlayer.hits++;
			setCoinsToPlayer();

			setTimeout(function(){
				hideQuestion();
			}, 1500);
		};
	}

	function setTimerScreen(){
		var showTime = (100 / 10) * bonusTime;
		var classTime = "p" + showTime.toFixed(0);

		timerScreen.querySelector('span').innerHTML = bonusTime;

		timerScreen.classList.remove("p100");
		timerScreen.classList.remove("p90");
		timerScreen.classList.remove("p80");
		timerScreen.classList.remove("p70");
		timerScreen.classList.remove("p60");
		timerScreen.classList.remove("p50");
		timerScreen.classList.remove("p40");
		timerScreen.classList.remove("p30");
		timerScreen.classList.remove("p20");
		timerScreen.classList.remove("p10");
		timerScreen.classList.add(classTime);
	}

	function resetTimerScreen(){
		timerScreen.querySelector('span').innerHTML = 10;
		timerScreen.classList.add("p100");
		timerScreen.classList.remove("p90");
		timerScreen.classList.remove("p80");
		timerScreen.classList.remove("p70");
		timerScreen.classList.remove("p60");
		timerScreen.classList.remove("p50");
		timerScreen.classList.remove("p40");
		timerScreen.classList.remove("p30");
		timerScreen.classList.remove("p20");
		timerScreen.classList.remove("p10");
		timerScreen.classList.remove("p0");
	}

	function updateProgressBar(){
		percVideo =  Math.round( Math.round((100 * Math.round(currentTime))) / Math.round(videoMain.duration) );
		progressBar.style.width = percVideo+"%";
	}


	function resetEnvoirement(){
		// pausa vídeo e reseta temporizador
		videoMain.pause();
		videoMain.currentTime = 0;

		// remove classes de controle
		questionWrap.classList.remove("active");
		currentForm.classList.remove("current");
		videoMain.classList.remove("disabled");

		// reseta para a primeira questão
		currentQuestion = 0;
		
		clearTimeout(timerQuestion);
		resetTimerScreen();

		bonusTime = 10;

		// reseta perguntas respondidas e formulários
		for(var i = 0; i < objQuestions.length; i++){
			objQuestions[i].answered = false;
			forms[i].classList.remove("error");
			forms[i].classList.remove("success");
			if(forms[i].querySelector("input[type=radio]:checked")){
				forms[i].querySelector("input[type=radio]:checked").checked = false;	
			}
			if(forms[i].querySelector('.btnAnswer')){
				forms[i].querySelector('.btnAnswer').classList.remove("hide");
			}
			
		}

		currentForm.querySelector('.btnAnswer').classList.remove("hide");
	}


}());