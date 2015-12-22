//Admin List View Helper
Template.admin.helpers({
    Coffeeshops: function () {
        return Coffeeshops.find({}, {sort: {createdAt: -1}});    }
});

/*
//Admin List View Helper
Template.admin.helpers({
    Cafes: function () {
        return Cafes.find({}, {sort: {createdAt: -1}});    }
});
*/

