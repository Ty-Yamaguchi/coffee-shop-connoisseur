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
		var cafeAttributes = {
  		name: name,
  		placeid: placeid,
  		description: description,
  		csimage: csimage
		};
		Meteor.call("addCafe", cafeAttributes, function(error, result){
  		if (error) {
    		return alert(error.reason);
  		}
  		// Redirect to Admin Route		
  		Router.go('coffeeshopView', {_id: result._id});
  		
		});
	}
	
});