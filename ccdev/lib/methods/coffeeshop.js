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