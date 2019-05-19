$(document).ready(function() {

	// ******* NUMBER ARRAYS *******

	// random computer variable array
	var rand = getRandomArray(19, 121);

	// crystal numbers array
	var crystals = getRandomArray(1, 13);

	// ******* GLOBAL VARIABLES *******

	// random variables selected by computer
	var rndNum; // number to match
	var crystalNum = []; // for array of random crystal values

	var c1;
	var c2;
	var c3;
	var c4;

  var totlScr = 0; // user's score

	var wins = 0;
	var losses = 0;

	// ******* FUNCTIONS *******
	
	//return random array within specified limits
	function getRandomArray(min, max){
		var rnd = [];
		for (var r = min; r < max; r++) {
			rnd.push(r);
		}
		return rnd;
	}
	
	// pick a random number
	function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		rndNum = x;
		$("#randomNumber").html(rndNum);

		console.log("random number: " + rndNum);

	} // END of pickRandomNumber function

	// pick random numbers for crystals

	function pickRandomCrystals(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			crystalNum.push(a);
		}
    // check which numbers have been picked
		console.log("crystal numbers: " + crystalNum);

	} // END of pickRandomCrystals function

	function crystalValues(arr) {

		// change value of each crystal button according to array
		for (i = 0; i < arr.length; i++) {

		$("#button" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		c1 = arr[0];
		c2 = arr[1];
		c3 = arr[2];
		c4 = arr[3];
	} // END of crystalValues function

	function gameReset(x) {

		crystalNum = []; // clears crystal number values

		pickRandomNumber(rand);

		pickRandomCrystals(crystals);

		crystalValues(crystalNum);

		totlScr = 0;
		$("#totalNumber").html(totlScr);

		alert(x);
	} // END of gameReset function

	// *** GAME SETTINGS AT START ***

	pickRandomNumber(rand); // random number to match
	pickRandomCrystals(crystals); // array of random crystal values
	crystalValues(crystalNum);

		// crystal button functions

		$("#button1").on("click", function() {

			totlScr += c1;
			$("#totalNumber").html(totlScr);
		});

		$("#button2").on("click", function() {

			totlScr += c2;
			$("#totalNumber").html(totlScr);
		});

		$("#button3").on("click", function() {

			totlScr += c3;
			$("#totalNumber").html(totlScr);
		});

		$("#button4").on("click", function() {

			totlScr += c4;
			$("#totalNumber").html(totlScr);
		});

	$("button").on("click", function() {
		// this is what happens if the user wins
		if (totlScr == rndNum) {

			wins++;
			console.log(totlScr);
			$("#totalNumber").html(totlScr);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {gameReset("YOU WIN!!")}, 200);
		}

		else if (totlScr > rndNum){

			losses++;
			$("#totalNumber").html(totlScr);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("YOU LOSE!")}, 200);
		}
	});

}); // end of script
