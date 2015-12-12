/********* MONGO DB *********/

Cafes = new Mongo.Collection("cafes");


if (Meteor.isClient) {
  // This code only runs on the client
  
  Template.coffeeshopList.helpers({
    Cafes: function () {
		return Cafes.find({}, {sort: {createdAt: -1}});    }
  });
  
  Template.admin.helpers({
    Cafes: function () {
		return Cafes.find({}, {sort: {createdAt: -1}});    }
  });

  Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});

}
