// Google Maps
Template.coffeeshopView.onRendered(function() {
	GoogleMaps.load({ v: '3', key: 'AIzaSyDuz95a5e7907yAlgPt3WkGgbhDP6V-RA4'});
});

  Template.coffeeshopView.helpers({
    coffeeshopMapOptions: function() {
    	var lat = this.lat;
    	var lng = this.lng;
      // Make sure the maps API has loaded
      if (GoogleMaps.loaded()) {
        // Map initialization options
        return {
          center: new google.maps.LatLng(lat, lng),
          zoom: 16
        };
      }
    }
  });

Template.coffeeshopView.onCreated(function() {
	// We can use the `ready` callback to interact with the map API once the map is ready.
	GoogleMaps.ready('coffeeshopMap', function(map) {
			// Add a marker to the map once it's ready
			var marker = new google.maps.Marker({
			position: map.options.center,
			map: map.instance
		});
	});
});
