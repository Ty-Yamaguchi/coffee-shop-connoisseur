//CREATE NEW COFFEESHOP ENTRY IN MONGO DB
Template.coffeeshopCreate.events({
	'submit [hook="new-cafe-form"]': function(event,template){

		// Prevent default browser form submit
		event.preventDefault();
		
		// Get value from form element
		var name = event.target.name.value;
		var placeid = event.target.placeid.value;
		var description = event.target.description.value;
		var csimage = event.target.csimage.value;
		
		// Insert a cafe into the collection
		var cafeAttributes = {
			name: name,
			placeid: placeid,
			description: description,
			csimage: csimage
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