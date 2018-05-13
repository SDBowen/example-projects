
var cels = true;
var degreeC = "";
var degreeF = "";
// Get geo data
navigator.geolocation.getCurrentPosition(function(loc) {	
	
	// Pull weather based on location
	$.getJSON("https://fcc-weather-api.glitch.me/api/current?", // API request
			 ("lat=" + (loc.coords.latitude) + "&lon=" + (loc.coords.longitude)), //Location data
			 function(data) {

		// Display weather data
		$("#location").text(data.name);
		degreeC = (data.main.temp.toFixed(1) + "\xB0C");
		degreeF = (((data.main.temp.toFixed(2)) * 1.8 + 32).toFixed() + "\xB0F"); 
		$("#temp").text(degreeC); 
		$("#condition").text(data.weather[0].main);
		// Pull background & icon
		setImages(data.weather[0].id);
	});
});

$("#temp").click( function() {

	if (cels) {
		$("#temp").text(degreeF);
		cels = false;
	} else {
		$("#temp").text(degreeC);
		cels = true;
	}
});


function setImages(id) {

	var i = String(id).charAt(0);
	
	switch (Number(i)) {
		case 2:
			$("#icon").addClass("stormIcon")
			$("body").addClass("storm")
			break; 
		case 3:
			$("#icon").addClass("drizzleIcon")
			$("body").addClass("drizzle")
			break;
		case 5:
			$("#icon").addClass("rainIcon")
			$("body").addClass("rain")
			break;
		case 6:
			$("#icon").addClass("snowIcon")
			$("body").addClass("snow") 
			break;
		case 8:
			$("#icon").addClass("cloudsIcon")
			$("body").addClass("clouds")	 
			break;
		default:
			$("#icon").addClass("clearIcon")
			$("body").addClass("clear")	 
			break;
	}	

};