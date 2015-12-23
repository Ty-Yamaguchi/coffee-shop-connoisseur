//CREATE NEW COFFEESHOP ENTRY IN MONGO DB
Template.coffeeshopUpdate.events({
	'submit [hook="form"]': function(event, template){

		// Prevent default browser form submit
		event.preventDefault();
		
		var id = this._id;
		// Get value from form element
		var name = event.target.name.value;
		var placeid = event.target.placeid.value;
		var description = event.target.description.value;
		var csimage = event.target.csimage.value;
		var lat = event.target.lat.value;
		var lng = event.target.lng.value;
		
		var coffeeshopAttributes = {
			name: name,
			placeid: placeid,
			description: description,
			csimage: csimage,
			lat : lat,
			lng : lng
		};
		
		// Update a cafe
		Meteor.call("updateCoffeeshop", id, coffeeshopAttributes);
		
		
		// Redirect to Admin Route		
		Router.go('admin');
		
	},	
    
	 'click [hook="delete-coffeeshop"]': function (event, template) {
		
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