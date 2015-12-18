Meteor.methods({
	addCafe : function (cafeAttributes) {
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
	updateCafe : function (id, cafeAttributes) {
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
			}
	    Cafes.update(id, {
	      $set: cafeAttributes
	    });
			 
	 }	    

});