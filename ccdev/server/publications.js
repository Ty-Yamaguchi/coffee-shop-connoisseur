//Publish Cafes collection 
Meteor.publish('cafes' , function(){
	return Cafes.find({}, {fields: {
		owner: false,
		username: false
	}});
});