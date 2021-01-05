'use strict';



function initMap() {
	const directionsService = new google.maps.DirectionsService();
	const directionsRenderer = new google.maps.DirectionsRenderer();
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 7,
		center: { lat: 49.58854290433139, lng: 34.55153832238968 },
		disableDefaultUI: true,
	});
	directionsRenderer.setMap(map);

	const onChangeHandler = function () {
		calculateAndDisplayRoute(directionsService, directionsRenderer);
	};
	document.querySelector(".btn").addEventListener("click", onChangeHandler);


}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
	let selectedMode = document.getElementById("mode").value;
	directionsService.route(
		{

			origin: {
				query: document.querySelector(".start").value,
			},
			destination: {
				query: document.querySelector(".end").value,
			},
			travelMode: google.maps.TravelMode[selectedMode],
		},
		(response, status) => {
			if (status === "OK") {
				directionsRenderer.setDirections(response);
			} else {
				window.alert("Directions request failed due to " + status);
			}
		}
	);
}



// с навигацией на поворотах 
// function initMap() {
// 	const markerArray = [];
// 	// Instantiate a directions service.
// 	const directionsService = new google.maps.DirectionsService();
// 	// Create a map and center it on Manhattan.
// 	const map = new google.maps.Map(document.getElementById("map"), {
// 		zoom: 13,
// 		center: { lat: 40.771, lng: -73.974 },
// 	});
// 	// Create a renderer for directions and bind it to the map.
// 	const directionsRenderer = new google.maps.DirectionsRenderer({ map: map });
// 	// Instantiate an info window to hold step text.
// 	const stepDisplay = new google.maps.InfoWindow();
// 	// Display the route between the initial start and end selections.
// 	calculateAndDisplayRoute(
// 		directionsRenderer,
// 		directionsService,
// 		markerArray,
// 		stepDisplay,
// 		map
// 	);

// 	// Listen to change events from the start and end lists.
// 	const onChangeHandler = function () {
// 		calculateAndDisplayRoute(
// 			directionsRenderer,
// 			directionsService,
// 			markerArray,
// 			stepDisplay,
// 			map
// 		);
// 	};
// 	document.querySelector(".btn").addEventListener("click", onChangeHandler);
// }

// function calculateAndDisplayRoute(
// 	directionsRenderer,
// 	directionsService,
// 	markerArray,
// 	stepDisplay,
// 	map
// ) {
// 	// First, remove any existing markers from the map.
// 	for (let i = 0; i < markerArray.length; i++) {
// 		markerArray[i].setMap(null);
// 	}
// 	// Retrieve the start and end locations and create a DirectionsRequest using
// 	// WALKING directions.
// 	directionsService.route(
// 		{
// 			origin: document.querySelector(".start").value,
// 			destination: document.querySelector(".end").value,
// 			travelMode: select,
// 		},
// 		(result, status) => {
// 			// Route the directions and pass the response to a function to create
// 			// markers for each step.
// 			if (status === "OK") {
// 				document.getElementById("warnings-panel").innerHTML =
// 					"<b>" + result.routes[0].warnings + "</b>";
// 				directionsRenderer.setDirections(result);
// 				showSteps(result, markerArray, stepDisplay, map);
// 			} else {
// 				window.alert("Directions request failed due to " + status);
// 			}
// 		}
// 	);
// }

// function showSteps(directionResult, markerArray, stepDisplay, map) {
// 	// For each step, place a marker, and add the text to the marker's infowindow.
// 	// Also attach the marker to an array so we can keep track of it and remove it
// 	// when calculating new routes.
// 	const myRoute = directionResult.routes[0].legs[0];

// 	for (let i = 0; i < myRoute.steps.length; i++) {
// 		const marker = (markerArray[i] =
// 			markerArray[i] || new google.maps.Marker());
// 		marker.setMap(map);
// 		marker.setPosition(myRoute.steps[i].start_location);
// 		attachInstructionText(
// 			stepDisplay,
// 			marker,
// 			myRoute.steps[i].instructions,
// 			map
// 		);
// 	}
// }

// function attachInstructionText(stepDisplay, marker, text, map) {
// 	google.maps.event.addListener(marker, "click", () => {
// 		// Open an info window when the marker is clicked on, containing the text
// 		// of the step.
// 		stepDisplay.setContent(text);
// 		stepDisplay.open(map, marker);
// 	});
// }

(function ($) {
	$(document).ready(function () {
		// Code

	});
})(jQuery);
