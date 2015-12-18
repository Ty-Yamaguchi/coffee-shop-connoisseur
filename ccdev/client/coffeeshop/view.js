// Google Maps
  Template.coffeeshopView.onRendered(function() {
	GoogleMaps.load();
  });

  Template.coffeeshopView.helpers({
    coffeeshopMapOptions: function() {
      // Make sure the maps API has loaded
      if (GoogleMaps.loaded()) {
        // Map initialization options
        return {
          center: new google.maps.LatLng(22.084494, -144.9631),
          zoom: 8
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
