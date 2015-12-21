//Admin List View Helper
Template.admin.helpers({
    Cafes: function () {
        return Cafes.find({}, {sort: {createdAt: -1}});    }
});

