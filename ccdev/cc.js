/********* IRON ROUTER *********/

Router.route('/', function () {
  this.render('home');
});

Router.route('/backend', function () {
  this.render('backend');
});


/********* MONGO DB *********/

Cafes = new Mongo.Collection("cafes");


if (Meteor.isClient) {
  // This code only runs on the client
  
  Template.cafe.helpers({
    Cafes: function () {
		return Cafes.find({}, {sort: {createdAt: -1}});    }
  });
  
  Template.admin.helpers({
    Cafes: function () {
		return Cafes.find({}, {sort: {createdAt: -1}});    }
  });
  
  // Form Handler for submitting Coffee Shops to Mongo DB
  Template.admin.events({
    "submit .new-cafe": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var name = event.target.name.value;
      var placeid = event.target.placeid.value;
      var description = event.target.description.value;
      var csimage = event.target.csimage.value;
     /*
 var owner = Meteor.userId();
      var username = Meteor.user().username;
*/

 
      // Insert a cafe into the collection
      Meteor.call("addCafe", name, placeid, description, csimage);
 
      // Clear form
      event.target.name.value = "";
      event.target.placeid.value = "";
      event.target.description.value = "";
      event.target.csimage.value = "";
    }
  });
  
  
  
  



		
  // Form Handler for updating Coffee Shops in Mongo DB
  Template.admin.events({
	
    "submit .update-cafe": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var name = event.target.name.value;
      var placeid = event.target.placeid.value;
      var description = event.target.description.value;
      var csimage = event.target.csimage.value;
      var id = event.target.id.value;

     /*
 var owner = Meteor.userId();
      var username = Meteor.user().username;
*/

 
      // Update cafe into the collection
      Meteor.call("updateCafe", id, name, placeid, description, csimage);


  
	 
  	


    }
  });



  	// Delete Function for removing Coffee Shops from Mongo DB
	Template.cafe.events({
    "click .delete": function () {
      Meteor.call("removeCafe", this._id);
	  }
	});
	
	Template.admin.events({
    "click .delete": function () {
      Meteor.call("removeCafe", this._id);
	  }
	});

  Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});

}


/********* METHODS *********/

Meteor.methods({
	addCafe : function (name, placeid, description, csimage) {
		// Only continue if user is logged in
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}	
    // Insert a cafe into the collection
    Cafes.insert({
      name: name,
      placeid: placeid,
      description: description,
      csimage: csimage,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
   },
	 removeCafe : function (id) {
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}	
		Cafes.remove(id);
	 },
	 updateCafe : function (id, name, placeid, description, csimage) {
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}
    Cafes.update(id, {
      $set: {
      
      	name: name,
      	placeid : placeid,
      	description : description,
      	csimage : csimage
	      
      }
    });
			 
	 }
	    

});