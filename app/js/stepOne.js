(function(){


	var selected;

	var btnStartGame = document.getElementById("btnStartGame"),
		stepOne = document.getElementById("stepOne"),
		stepTwo = document.getElementById("stepTwo"),
		getName = document.getElementById("getName"),
		getNameError = document.getElementById("getNameError"),
		getAvatarError = document.getElementById("getAvatarError"),
		ulAvatars = document.getElementById("ulAvatars");



	btnStartGame.addEventListener("click", function(){
		
		selected = ulAvatars.querySelector("input[type=radio]:checked");

		if(validateConfigurations()){

			objPlayer.name = getName.value;
			objPlayer.avatar = selected.value;
			setAvatarNamePlayer();

			objPlayers.push(objPlayer);

		}
	});



	function validateConfigurations(){
		if(getName.value.length < 3 || selected === null){

			if(getName.value.length < 3){
				getNameError.innerHTML = "Informe seu nome!";
			}
			else{
				getNameError.innerHTML = "";
			}
		
			if(selected === null){
				getAvatarError.innerHTML = "Selecione seu avatar!";
			}
			else{
				getAvatarError.innerHTML = "";
			}

			return false;
		}else{
			getNameError.innerHTML = "";
			getAvatarError.innerHTML = "";

			stepOne.classList.remove("active");
			stepTwo.classList.add("active");

			return true;
		}
	}


	function setAvatarNamePlayer(){
		userAvatar.src = objPlayer.avatar;
		userName.innerHTML = objPlayer.name;
	}
	


}());