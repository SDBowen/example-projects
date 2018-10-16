
// Pull quote on page load
$(document).ready( function() { 
	getQuote();
	getColor();
});


// Pull new quote on click
$(document).click(function() {
	// New quote transition
	$(".quote").animate({'opacity': 0}, 500, function() {	
		getQuote();
		$(this).animate({'opacity': 1}, 1000);
	})
	// Set backgound color
	getColor();

	// Hide click instruction
	$("#instruction").fadeOut(500, function() {});
	// Select random backgound 
	
});


// Retreive new quote
function getQuote() {

	$.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(a) {
		// Update html text
		$("#text").text(a.quote);
		$("#author").text("-" + a.author);

	});
};

// Select random background
getColor = function() {
	// Select random background number
	n = ("b" + Math.floor(Math.random() * 20));
	// Assign color to background
	$("body").removeClass();
	$("body").addClass(n);
};

