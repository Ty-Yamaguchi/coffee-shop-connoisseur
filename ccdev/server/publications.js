// Publish Cafes collection
Meteor.publish('cafes' , function(){
	return Cafes.find({}, {fields: {
		owner: false,
		username: false
	}});
});

// Publish Cafes collection
Meteor.publish('coffeeshops' , function(){
	return Coffeeshops.find({}, {fields: {
		owner: false,
		username: false
	}});
});