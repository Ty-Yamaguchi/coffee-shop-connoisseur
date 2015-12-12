//CREATE NEW COFFEESHOP ENTRY IN MONGO DB
Template.coffeeshopCreate.events({
	'submit [hook="new-cafe-form"]': function(eventObject,templateObject){

		// Prevent default browser form submit
		eventObject.preventDefault();
		
		// Get value from form element
		var name = event.target.name.value;
		var placeid = event.target.placeid.value;
		var description = event.target.description.value;
		var csimage = event.target.csimage.value;
		
		// Insert a cafe into the collection
		Meteor.call("addCafe", name, placeid, description, csimage);
		
		// Clear form
		event.target.name.value = "";
		event.target.placeid.value = "";
		event.target.description.value = "";
		event.target.csimage.value = "";

		// Redirect to Admin Route		
		Router.go("/admin");
	}
	
});


