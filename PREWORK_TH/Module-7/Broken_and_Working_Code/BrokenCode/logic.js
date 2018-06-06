//when the factButton is clicked...
$("#factButton").on("click", function() {
	//we generate a random number between 0 and the number of facts
	var number = Math.floor((Math.random() * booFacts.length));
	//we display the fact from the array that is in the random position we just generated
	$("#factText").text(booFacts[number])
})


//this array holds all of our Boo facts
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books"]

//When the textPink button is pressed...
$("#textPink").on("click", function() {
	//Change funText color to pink
	$("#funText").css("color", "pink")
})

//when the textOrange button is pressed...
$("#textOrange").on("click", function() {
	//change funText to orange
	$("#funText").css("color", "orange")
})

//when the textGreen button is pressed...
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})

//When the boxGrow button is clicked...
$("#boxGrow").on("click", function() {
	//increase the size of the box
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})

//when the BoxShrink button is clicked...
$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})