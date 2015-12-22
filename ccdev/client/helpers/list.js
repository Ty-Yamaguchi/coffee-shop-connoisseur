// Coffeshop List Template Helper
Template.coffeeshopList.helpers({
    Cafes: function () {
        return Cafes.find({}, {sort: {createdAt: -1}});    }
});