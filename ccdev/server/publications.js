//Publish Cafes collection 
Meteor.publish('cafes' , function(){
	return Cafes.find();
});