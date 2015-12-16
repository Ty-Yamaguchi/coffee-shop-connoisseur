//CREATE NEW COFFEESHOP ENTRY IN MONGO DB
Template.coffeeshopUpdate.events({
	'submit [hook="update-cafe-form"]': function(event, template){

		// Prevent default browser form submit
		event.preventDefault();
		
		var id = this._id;
		// Get value from form element
		var name = event.target.name.value;
		var placeid = event.target.placeid.value;
		var description = event.target.description.value;
		var csimage = event.target.csimage.value;
		
		// Insert a cafe into the collection
		Meteor.call("updateCafe", id, name, placeid, description, csimage);
		
		
		// Redirect to Admin Route		
		Router.go('admin');
		
	},	
    
	 'click [hook="delete-cafe"]': function (event, template) {
		
		// Prevent Default Click Event		
		event.preventDefault();
		
		//Ask user if they want to delete Coffeeshop
		if (confirm('Permanently delete Coffeeshop?')) {
		
		  	 //Delete Coffeeshop from 
		  	 Meteor.call("removeCafe", this._id);
		  	 
		  	 //Redirect to Admin Route 
		  	 Router.go('admin');	
		
		}
	}
	
});


