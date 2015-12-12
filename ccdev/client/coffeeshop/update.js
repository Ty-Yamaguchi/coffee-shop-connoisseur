  // Form Handler for UPDATING & DELETING Coffee Shops in Mongo DB
  Template.coffeeshopUpdate.events({
	
    "submit .update-cafe-form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var name = event.target.name.value;
      var placeid = event.target.placeid.value;
      var description = event.target.description.value;
      var csimage = event.target.csimage.value;
      var id = event.target.id.value;
 
      // Update cafe into the collection
      Meteor.call("updateCafe", id, name, placeid, description, csimage);
      console.log('logged');

    },
    
	 "click .delete": function () {
      Meteor.call("removeCafe", this._id);	
	  
	  // Redirect to Admin Route		
	  Router.go("/admin");
	  
	  }
	
  });
