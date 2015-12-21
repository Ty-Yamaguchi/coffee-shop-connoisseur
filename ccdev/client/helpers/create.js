//CREATE NEW COFFEESHOP ENTRY IN MONGO DB
Template.coffeeshopCreate.events({
	'submit [hook="form"]': function(event,template){

		// Prevent default browser form submit
		event.preventDefault();
		
		// Get value from form element
		var name = event.target.name.value;
		var phone = event.target.phone.value;
		var streetAddress = event.target.streetAddress.value;
		var city = event.target.city.value;
		var state = event.target.state.value;
		var zip = event.target.zip.value;
		var placeid = event.target.placeid.value;
		var description = event.target.description.value;
		var csimage = event.target.csimage.value;
		var lat = event.target.lat.value;
		var lng = event.target.lng.value;
		var hours = {
		  mon: event.target.hoursMon.value,
		  tue: event.target.hoursTue.value,
		  wed: event.target.hoursWed.value,
		  thu: event.target.hoursThu.value,
		  fri: event.target.hoursFri.value,
		  sat: event.target.hoursSat.value,
		  sun: event.target.hoursSun.value
		};
		
		// Insert a cafe into the collection
		var cafeAttributes = {
			name: name,
			phone: phone,
			hours: hours,
			streetAddress: streetAddress,
			city: city,
			state: state,
			zip: zip,
			placeid: placeid,
			description: description,
			csimage: csimage,
			lat : lat,
			lng : lng
		};
		
		Meteor.call("addCafe", cafeAttributes, function(error, result){

			if (error) {

				alert(error.reason);

			} else {

				// Redirect to Admin Route
				Router.go('coffeeshopView', {_id: result._id});

			}
		});

	}
	
});