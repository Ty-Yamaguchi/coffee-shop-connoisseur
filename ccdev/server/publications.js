// Publish Coffeeshops collection
Meteor.publish('coffeeshops' , function(){
	return Coffeeshops.find({}, {fields: {
		owner: false,
		username: false
	}});
});