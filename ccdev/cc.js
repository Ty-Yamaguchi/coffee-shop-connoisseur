/********* IRON ROUTER *********/

Router.route('/', function () {
  this.render('home');
});

Router.route('/backend', function () {
  this.render('backend');
});

Router.route('/post/:_id', function () {
  var params = this.params; // { _id: "5" }
  var id = params._id; // "5"
    this.render('details');

});



Router.route('/edit', function () {
  this.render('edit');
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
  
  	"click .edit": function (event) {  		
  		event.preventDefault();
  		document.getElementById("publish_" + this._id).style.display = "block";
  		document.getElementById("edit_" + this._id).style.display = "none";
  		document.getElementById("update_name").removeAttribute("disabled");
  		document.getElementById("update_placeid").removeAttribute("disabled");
  		document.getElementById("update_csimage").removeAttribute("disabled");
  		document.getElementById("update_description").removeAttribute("disabled");
	},	
		
		
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


      // Show Edit Button / Hide Publish Button + Set Form Input Attributes to disabled

  		document.getElementById("edit_" + this._id).style.display = "block";
  		document.getElementById("publish_" + this._id).style.display = "none";
  		document.getElementById("update_name").setAttribute('disabled', 'disabled');
  		document.getElementById("update_placeid").setAttribute('disabled', 'disabled');
  		document.getElementById("update_csimage").setAttribute('disabled', 'disabled');
  		document.getElementById("update_description").setAttribute('disabled', 'disabled');


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