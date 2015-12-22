//CREATE NEW COFFEESHOP ENTRY IN MONGO DB
Template.coffeeshopUpdate.events({
	'submit [hook="form"]': function(event, template){

		// Prevent default browser form submit
		event.preventDefault();
		
		var id = this._id;
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
		
		var coffeeshopAttributes = {
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
		
		// Update a cafe
		Meteor.call("updateCafe", id, coffeeshopAttributes);
		
		
		// Redirect to Admin Route		
		Router.go('admin');
		
	},	
    
	 'click [hook="delete-cafe"]': function (event, template) {
		
		// Prevent Default Click Event		
		event.preventDefault();
		
		//Ask user if they want to delete Coffeeshop
		if (confirm('Permanently delete Coffeeshop?')) {
		
		  	 //Delete Coffeeshop from 
		  	 Meteor.call('removeCoffeeshop', this._id);
		  	 
		  	 //Redirect to Admin Route 
		  	 Router.go('admin');	
		}
	}
	
});
/*


//CREATE NEW COFFEESHOP ENTRY IN MONGO DB
Template.coffeeshopUpdate.events({
	'submit [hook="form"]': function(event, template){

		// Prevent default browser form submit
		event.preventDefault();
		
		var id = this._id;
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
		
		// Update a cafe
		Meteor.call("updateCafe", id, cafeAttributes);
		
		
		// Redirect to Admin Route		
		Router.go('admin');
		
	},	
    
	 'click [hook="delete-cafe"]': function (event, template) {
		
		// Prevent Default Click Event		
		event.preventDefault();
		
		//Ask user if they want to delete Coffeeshop
		if (confirm('Permanently delete Coffeeshop?')) {
		
		  	 //Delete Coffeeshop from 
		  	 Meteor.call('removeCafe', this._id);
		  	 
		  	 //Redirect to Admin Route 
		  	 Router.go('admin');	
		}
	}
	
});


*/


