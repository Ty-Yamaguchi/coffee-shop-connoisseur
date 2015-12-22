// Coffeshop List Template Helper
Template.coffeeshopList.helpers({
    Coffeeshops: function () {
        return Coffeeshops.find({}, {sort: {createdAt: -1}});    }
});

/*
// Coffeshop List Template Helper
Template.coffeeshopList.helpers({
    Cafes: function () {
        return Cafes.find({}, {sort: {createdAt: -1}});    }
});
*/