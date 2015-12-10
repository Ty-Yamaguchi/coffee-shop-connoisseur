Template.coffeeshopCreate.events({
	'submit [hook="new-cafe-form"]': function(eventObject,templateObject){
		eventObject.preventDefault();
		// handle db stuff here...
		alert('submitting new cafe');
	}
});