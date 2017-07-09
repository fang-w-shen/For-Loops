function addten() {
	var number = 5;
	var count = 10;
	for (var i = 1; i < (120-5)/10 ; i++) {
		number = number + count
		console.log("Current value is "+number);
	}
}

function dividetwo() {
	var number = 4096;
	for (var i = 1; i > 0 ; i++) {
		number = number / 2;
		console.log("Current value is "+number);
		if (number === 1) {
			break;
		}
	}
}

var presidents = ["GWash","GBush","BClint","Obama","Trump"];
function arrayiteration() {
	var number = 0;
	for (var i = 1; i <= presidents.length; i++) {
		console.log("President #"+i+" is "+presidents[i-1]);
	}
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}
function objectiteration() {
	for (var i in antSpecies) {
		console.log(i);
	}
}