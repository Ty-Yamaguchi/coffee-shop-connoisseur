/********* IRON ROUTER *********/

Router.route('/', function () {
  this.render('home');
});


/********* ACCOUNTS UI *********/



/********* MONGO DB *********/

Cafes = new Mongo.Collection("cafes");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.cafe.helpers({
    Cafes: function () {
		return Cafes.find({}, {sort: {createdAt: -1}});    }
  });
  // Form Handler for submitting Coffee Shops to Mongo DB
  Template.admin.events({
    "submit .new-cafe": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var text = event.target.text.value;
      var placeid = event.target.placeid.value;
      var description = event.target.description.value;
      var csimage = event.target.csimage.value;

 
      // Insert a cafe into the collection
      Cafes.insert({
        text: text,
        placeid: placeid,
        description: description,
        csimage: csimage,
        createdAt: new Date(), // current time
        owner: Meteor.userID(),
        username: Meteor.user().username
      });
 
      // Clear form
      event.target.text.value = "";
      event.target.placeid.value = "";
      event.target.description.value = "";
      event.target.csimage.value = "";
    }
  });
  	// Delete Function for removing Coffee Shops from Mongo DB
	Template.cafe.events({
    "click .delete": function () {
      Cafes.remove(this._id);
    }
  });

  Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});

}