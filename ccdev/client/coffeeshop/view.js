//Coffeeshop List View Helper
  Template.coffeeshopList.helpers({
    Cafes: function () {
		return Cafes.find({}, {sort: {createdAt: -1}});    }
  });