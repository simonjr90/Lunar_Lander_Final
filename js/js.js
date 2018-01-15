var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer = null;
var timerFuel = null;
var fuel = 100;
var veloc = v;
var altur = y;
var modo = 1; //Variable para nivel de dificultad.
var partida = 1;
var cont = 0.00;
var gasInicial = 100;

//al cargar por completo la página...
window.onload = function () {
	//definición de eventos
	//mostrar menú
	stop();
	motorOff();
	document.getElementById("opcImg").onclick = function () { //Para dispositivos moviles
		motorOff();
		stop();
		document.getElementsByClassName("c")[0].style.display = "block";
		document.getElementById('opcImg').style.display = "none";

	}

	//ocultar menú
	document.getElementById("exitMenu").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		document.getElementById('opcImg').style.display = "block";
		document.getElementById("menu").style.display = "block";
		document.getElementById("instrucciones").style.display = "none";
		document.getElementById("acerca").style.display = "none";
		start();
	}

	//Botones al acercarse
	document.getElementById("renImg").onmouseover = function () {
		document.getElementById("renImg").src = "img/ren.gif";
	}

	document.getElementById("insImg").onmouseover = function () {
		document.getElementById("insImg").src = "img/ins1.gif";
	}

	document.getElementById("aboutImg").onmouseover = function () {
		document.getElementById("aboutImg").src = "img/about.gif";
	}
	//Botón preparado para los niveles de dificultad.
	/*document.getElementById("difImg").onmouseover = function () {
		document.getElementById("difImg").src = "img/dif1.gif";
	}*/

	document.getElementById("opcImg").onmouseover = function () {
		document.getElementById("opcImg").src = "img/opc.gif";
	}

	document.getElementById("exitMenu").onmouseover = function () {
		document.getElementById("exitMenu").src = "img/exitMenu.gif";
	}

	//botones al alejarse
	document.getElementById("renImg").onmouseout = function () {
		document.getElementById("renImg").src = "img/ren3.gif";
	}

	document.getElementById("insImg").onmouseout = function () {
		document.getElementById("insImg").src = "img/ins3.gif";
	}

	document.getElementById("aboutImg").onmouseout = function () {
		document.getElementById("aboutImg").src = "img/about3.gif";
	}

	//Botón preparado para los niveles de dificultad.
	/*document.getElementById("difImg").onmouseout = function () {
		document.getElementById("difImg").src = "img/dif.gif";
	}*/

	document.getElementById("opcImg").onmouseout = function () {
		document.getElementById("opcImg").src = "img/opc.png";
	}

	document.getElementById("exitMenu").onmouseout = function () {
		document.getElementById("exitMenu").src = "img/exitMenu.png";
	}

	//botón reniciar
	document.getElementById("renImg").onclick = function () {
		volver();
		actualizarFuel();
		document.getElementById("fuel").innerHTML = fuel.toFixed(2);
		document.getElementById("feliz").style.display = "none";
		y = 10;
		v = 0;
		fuel = 100;
		document.getElementById("fuel").innerHTML = fuel.toFixed(2);
		partida = 1;
		document.getElementsByClassName("c")[0].style.display = "none";
		document.getElementById('opcImg').style.display = "block";
		y = 10;
		v = 0;
		fuel = 100;
		partida = 1;
		volver();
		start();
	}

	//botón instrucciones
	document.getElementById("insImg").onclick = function () {
		document.getElementById("menu").style.display = "none";
		document.getElementById("instrucciones").style.display = "block";
	}

	//botón about
	document.getElementById("aboutImg").onclick = function () {
		document.getElementById("menu").style.display = "none";
		document.getElementById("acerca").style.display = "block";
	}

	//encender/apagar el motor
	document.ontouchstart = function () {
		if (a == g) {
			cambiar();
			motorOn();

		} else {
			volver();
			motorOff();

		}
	}

	document.onkeyup = function () {
		if (a == g) {
			cambiar();
			motorOn();

		} else {
			volver();
			motorOff();

		}
	}
	//encender/apagar al apretar/soltar el espacio

	document.onkeydown = function keyCode(event) {
		var x = event.keyCode;
		if (x == 32) {
			motorOn();
			cambiar();
		}
	}
	document.onkeyup = function keyCode(event) {
		var x = event.keyCode;
		if (x == 32) {
			motorOff();
			volver();
		}
	}

	document.ontouchstart = motorOn;
	document.ontouchend = motorOff;
	//Empezar a mover nave
	start();
}

//Definición de funciones
function start() {
	timer = setInterval(function () { moverNave(); }, dt * 1000);
}

function stop() {
	clearInterval(timer);
}

function motor() {
	if (a == g) {
		cambiar();
		motorOn();

	} else {
		volver();
		motorOff();
	}
}

function moverNave() {
	v += a * dt;
	veloc = v.toFixed(2);
	document.getElementById("velocidad").innerHTML = veloc;
	y += v * dt;
	altur = 76 - y;
	document.getElementById("altura").innerHTML = altur.toFixed(2);

	//mover hasta que top sea un 70% de la pantalla
	if (y < 76) {
		document.getElementById("nave").style.top = y + "%";
	} else {
		stop();
	}
	if (modo == 1) {
		modo1();
	}
}

function modo1() {
	if (y <= -1) {
		document.getElementById('naveimg').src = "img/explosion.gif";
		partida = 0;
		stop();
	}
	if (altur <= 0 && veloc > 5) {
		document.getElementById('naveimg').src = "img/explosion.gif";
		document.getElementById("altura").innerHTML = cont.toFixed(2);
		partida = 0;
	} else if (altur <= 0 && veloc <= 5) {
		document.getElementById('naveimg').src = "img/giphy.gif";
		document.getElementById("altura").innerHTML = cont.toFixed(2);
		document.getElementById("feliz").style.display = "block";
		partida = 0;
	}
	velocModo1();
	colorAltura();
	gasModo1();
}
/*
function gasModo1() {
	if (fuel <= 40.00 && fuel > 15.00) {
		document.getElementById('fuel').style.color = "orange";
	} else if (fuel <= 15.00) {
		document.getElementById('fuel').style.color = "red";
	}
	else {
		document.getElementById('fuel').style.color = "green";
	}
}

function velocModo1() {
	if (veloc <= 3.99) {
		document.getElementById('velocidad').style.color = "green";
	} else if (veloc >= 4.00 && veloc < 5.00) {
		document.getElementById('velocidad').style.color = "orange";
	} else {
		document.getElementById('velocidad').style.color = "red";
	}
}

function colorAltura() {
	if (altur <= 40.00 && altur > 15.00) {
		document.getElementById('altura').style.color = "orange";
	} else if (altur <= 15.00) {
		document.getElementById('altura').style.color = "red";
	} else {
		document.getElementById('altura').style.color = "green";
	}
}*/

function motorOn() {
	if (fuel > 0) {
		cambiar();
		a = -g;
		if (timerFuel == null)
			timerFuel = setInterval(function () { actualizarFuel(); }, 10);

	} else {
		motorOff();
	}
}

function motorOff() {
	a = g;
	clearInterval(timerFuel);
	timerFuel = null;
	volver();
}

function actualizarFuel() {
	if (partida == 1) {
		//Aquí hay que cambiar el valor del marcador de Fuel...
		if (fuel > 0) {
			fuel -= 0.1;
		}
		else {
			fuel = 0;
			motorOff();
		}

		document.getElementById("fuel").innerHTML = fuel.toFixed(2);
	}
}

function cambiar() {
	if (partida == 1) {
		document.getElementById('naveimg').src = "img/nave.gif";
	}
}

function volver() {
	if (partida == 1) {
		document.getElementById('naveimg').src = "img/batnave.png";
	}
}


