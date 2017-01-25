function myMap() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		center : new google.maps.LatLng(23.80, 90.38),
		zoom : 12
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
}

