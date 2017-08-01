 //making sure everything in HTML loads first before we have any actions
 $(document).ready(function(){
//defining all variables for the game
	var win=0;
	var loss=0;
	var totalScore=0;
	var targetNumber=(Math.floor(Math.random()* 120)+ 19);
	var moana=(Math.floor(Math.random()* 12)+ 1);
	var elsa=(Math.floor(Math.random()* 12)+ 1);
	var rapunzel=(Math.floor(Math.random()* 12)+ 1);
	var tiana=(Math.floor(Math.random()* 12)+ 1);


	function reset () {
	//reset variables; these variable are pre-defined so we do not need var
		totalScore=0;
		targetNumber=(Math.floor(Math.random()* 120)+ 19);
		moana=(Math.floor(Math.random()* 12)+ 1);
		elsa=(Math.floor(Math.random()* 12)+ 1);
		rapunzel=(Math.floor(Math.random()* 12)+ 1);
		tiana=(Math.floor(Math.random()* 12)+ 1);
	//printing everything in the game stats area to the DOM	
		$("#total").html(total);
		$("#target").html(targetNumber);
		$("#wins").html(win);
		$("#losses").html(loss);
	}
//Printing our target Number to the DOM
	$("#target").html(targetNumber);
//on click event for any princess clicked 
	$("img").on("click", function(){
		var princessValue = $(this).attr("id");
//grabbing each id and then adding it's repective score to our total
		if (princessValue === "moana") {
			totalScore += moana;
			$("#total").html(totalScore);
		}
//grabbing each id and then adding it's repective score to our total
		else if (princessValue === "elsa") {
			totalScore += elsa;
			$("#total").html(totalScore);
		}
//grabbing each id and then adding it's repective score to our total
		else if (princessValue === "rapunzel") {
			totalScore += rapunzel;
			$("#total").html(totalScore);
		}
//grabbing each id and then adding it's repective score to our total
		else   {
			totalScore += tiana;
			$("#total").html(totalScore);
				
		}

		console.log("Moana"+moana);
		console.log("Elsa"+elsa);
		console.log("Rapunzel"+rapunzel);
		console.log("Tiana"+tiana);
		console.log(totalScore);
// adding to our counter for wins are losses and resetting the game
		if (totalScore === targetNumber) {
			win++;
			alert("YOU WIN!");
			reset();
		}
		else if (totalScore > targetNumber) {
			loss++;
			alert("WOW, YOU'RE TRASH!");
			reset();
		}	


	});
});



