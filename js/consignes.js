// Initialisation des variables globales
var nb_msg = -1;
var nb_car = 0;
var chaine = "";
var id;

function changeMessage()
{
	nb_msg++;
	if (nb_msg <= nb_car) {
	document.getElementById("consignes").innerHTML = chaine.substr(0,nb_msg);
	}
	else {
		clearInterval(id);
	}
}

function afficheMessage(monTexte) {
	nb_msg = -1;
	chaine = monTexte;
	nb_car = chaine.length;
	id = setInterval("changeMessage()",20);
}

let i = 0;

const virusSelect  = document.querySelector(".virusP1");
virusSelect.addEventListener('click',()=>{
     virusSelect.classList.remove("virus1");
	 virusSelect.classList.add("virusD1");
	 i++;
	 if(i == 3){
		afficheMessage("Cliquez sur la bibliothèque");
	}
}
)

const virusSelectS  = document.querySelector(".virusP2");
virusSelectS.addEventListener('click',()=>{
     virusSelectS.classList.remove("virus2");
	 virusSelectS.classList.add("virusD2");
	 i++;
	 if(i == 3){
		afficheMessage("Cliquez sur la bibliothèque");
	}
}
)

const virusSelectT  = document.querySelector(".virusP3");
virusSelectT.addEventListener('click',()=>{
     virusSelectT.classList.remove("virus3");
	 virusSelectT.classList.add("virusD3");
	 i++;
	 if(i == 3){
		afficheMessage("Cliquez sur la bibliothèque");
	}
}
)

