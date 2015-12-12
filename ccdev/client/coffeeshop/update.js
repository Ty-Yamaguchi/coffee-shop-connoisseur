//CREATE NEW COFFEESHOP ENTRY IN MONGO DB
Template.coffeeshopUpdate.events({
	'submit [hook="update-cafe-form"]': function(eventObject,templateObject){

		// Prevent default browser form submit
		eventObject.preventDefault();
		
		var id = this._id;
		// Get value from form element
		var name = event.target.name.value;
		var placeid = event.target.placeid.value;
		var description = event.target.description.value;
		var csimage = event.target.csimage.value;
		
		// Insert a cafe into the collection
		Meteor.call("updateCafe", id, name, placeid, description, csimage);
		
	}
	
});


