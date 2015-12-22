//Admin List View Helper
Template.admin.helpers({
    Coffeeshops: function () {
        return Coffeeshops.find({}, {sort: {createdAt: -1}});    }
});

