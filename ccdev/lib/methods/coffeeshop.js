Meteor.methods({
	addCoffeeshop : function (CoffeeshopAttributes) {
		var user = Meteor.user();
		var Coffeeshop = _.extend(CoffeeshopAttributes, {
			owner: user._id,
			username: user.username,
			createdAt: new Date()
		});

		// Insert a Coffeeshop into the collection
		var CoffeeshopId = Coffeeshops.insert(Coffeeshop);
		return {
			_id: CoffeeshopId
    	};
	},   
	removeCoffeeshop : function (id) {
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}	
		Coffeeshops.remove(id);
	 },
	updateCoffeeshop : function (id, CoffeeshopAttributes) {
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
			}
	    Coffeeshops.update(id, {
	      $set: CoffeeshopAttributes
	    });
			 
	 }	    

});