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

/*
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
*/