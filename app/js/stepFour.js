(function(){

	function makeReport(){
		var userTBody = document.getElementById("userTBody");

		var tr = document.createElement("TR");

		//objPlayers.push(objPlayer);
		objPlayers.sort(compare);
		var index = objPlayers.findIndex(x => x.name==objPlayer.name);
		//console.log(objPlayers)

		var trBody = "<td><img src='"+objPlayer.avatar+"' /></td>";
			trBody += "<td>"+objPlayer.name+"</td>";
			trBody += "<td>"+objPlayer.coins+"</td>";
			trBody += "<td>"+objPlayer.lifes+"</td>";
			trBody += "<td>"+objPlayer.errors+"</td>";
			trBody += "<td>"+objPlayer.hits+"</td>";
			trBody += "<td>"+objPlayer.timeouts+"</td>";
			trBody += "<td>"+(index+1)+"</td>";

		tr.innerHTML = trBody;
		userTBody.append(tr);
	}
	makeReport();

	function makeRanking(){

		var ulRanking = document.getElementById("ulRanking");

		var total = objPlayers.length,
			i, li, liBody;

		for(i = 0; i < total; i++){
			li = document.createElement("LI");

			liBody = "<span class='position'>"+(i+1)+"</span>";
			liBody += "<img src='"+objPlayers[i].avatar+"'>";
			liBody += "<span class='name'>"+objPlayers[i].name+"</span>";
			liBody += "<span class='coins'><b>Pontos</b>: "+objPlayers[i].coins+"</span>";

			li.innerHTML = liBody;
			ulRanking.append(li);
		}
	}
	makeRanking();

}());