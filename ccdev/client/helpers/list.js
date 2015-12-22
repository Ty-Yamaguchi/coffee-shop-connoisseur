// Coffeshop List Template Helper
Template.coffeeshopList.helpers({
    Coffeeshops: function () {
        return Coffeeshops.find({}, {sort: {createdAt: -1}});    }
});