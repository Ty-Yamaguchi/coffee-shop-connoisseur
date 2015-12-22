// Google Maps
Template.coffeeshopView.onRendered(function() {
	GoogleMaps.load({ v: '3', key: 'AIzaSyDuz95a5e7907yAlgPt3WkGgbhDP6V-RA4', libraries: 'places'});
});

Template.coffeeshopView.helpers({
	coffeeshopMapOptions: function() {
		var lat = this.lat;
		var lng = this.lng;
	  // Make sure the maps API has loadeds
	  if (GoogleMaps.loaded()) {
	    // Map initialization options
	    return {
	      center: new google.maps.LatLng(lat, lng),
	      zoom: 16
	    };
	  }
	},
	coffeeshopAddress : function() {
		return Session.get("coffeeshopAddress");
	},
	coffeeshopOpen : function() {
		var open = Session.get("coffeeshopOpen");
		if (open) {
			return "Open";
		} else {
			return "Closed";
		}
	},
	coffeeshopPhone : function() {
		return Session.get("coffeeshopPhone");
	},
	coffeeshopHours: function() {
		// the session var is reactive so as soon as session.set('coffeeshopHours') happens, 
		// the ui can update
		var h = Session.get("coffeeshopHours");
		var hObjects = [];
		if (h) {
			for( var x = 0; x < h.length; x++ ){
				hObjects.push({dayString:h[x]});
			}
		}

		return hObjects;
	}
});

Template.coffeeshopView.onCreated(function() {
	var placeid = this.data.coffeeshop.placeid;
	// We can use the `ready` callback to interact with the map API once the map is ready.
	GoogleMaps.ready('coffeeshopMap', function(map) {
			// Add a marker to the map once it's ready
			var marker = new google.maps.Marker({
			position: map.options.center,
			map: map.instance
			});

			var service = new google.maps.places.PlacesService(map.instance);
			
			// We will request coffeeshop details using the placeId
			var request = {
				placeId: placeid
			};
			
			// Get details about the coffeeshop and place them in Session variables
			
			service.getDetails(request, function(place, status) {
			  if (status == google.maps.places.PlacesServiceStatus.OK) {
			    Session.set("coffeeshopAddress", place.formatted_address);
			    Session.set("coffeeshopOpen", place.opening_hours.open_now);
			    Session.set("coffeeshopPhone", place.formatted_phone_number);
			    Session.set("coffeeshopHours", place.opening_hours.weekday_text);
			  }
			});
	});
});