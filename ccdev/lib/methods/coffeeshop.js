/********* METHODS *********/

Meteor.methods({
	addCafe : function (cafeAttributes) {
		// Only continue if user is logged in
		check(Meteor.userId(), String);
		check(cafeAttributes, {
  		name: String,
  		placeid: String,
  		description: String,
  		csimage: String
		});
		var user = Meteor.user();
		var cafe = _.extend(cafeAttributes, {
  		owner: user._id,
  		username: user.username,
  		createdAt: new Date()
		});
    // Insert a cafe into the collection
    var cafeId = Cafes.insert(cafe);
    return {
      _id: cafeId
    };
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