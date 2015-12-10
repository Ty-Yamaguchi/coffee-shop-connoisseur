Template.coffeeshopUpdate.events({
	'click [hook="delete-cafe"]': function(eventObject, templateObject){
		eventObject.preventDefault();
		// Db stuff goes here
		alert('deleting cafe');
	}
});