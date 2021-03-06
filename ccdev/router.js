// ROUTER OPTIONS
Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
	waitOn: function(){
		return [
			Meteor.subscribe('coffeeshops')
		]
	}
});

//  ROUTE: ABOUT
Router.route('/about', {
  name: 'about'
});

// CRUD: CREATE COFFEESHOP
Router.route('/coffeeshop/create', {
	name: 'coffeeshopCreate'
});

// CRUD: READ COFFEESHOP (SINGLE)
Router.route('/coffeeshop/view/:_id', {
	name: 'coffeeshopView',
	data: function(){
		var coffeeshopData = Coffeeshops.findOne(
			{
				_id: this.params._id
			}
		);
		return {
			coffeeshop: coffeeshopData
		}
	}
});

// CRUD: READ COFFEESHOP LIST
Router.route('/', {
	name:'coffeeshopList',
	data: function(){
		var coffeeshopList = Coffeeshops.find(
			{
				_id: this.params._id
			}
		);
		return {
			coffeeshop: coffeeshopList
		}
	}
});

// CRUD: READ COFFEESHOP LIST (ADMIN)
Router.route('/admin', {
	name:'admin',
	data: function(){
		var coffeeshopList = Coffeeshops.find(
			{
				_id: this.params._id
			}
		);
		return {
			coffeeshop: coffeeshopList
		}
	}
});


// CRUD: UPDATE
Router.route('/coffeeshop/update/:_id', {
	name: 'coffeeshopUpdate',
	data: function(){
		return Coffeeshops.findOne(
			{
				_id: this.params._id
			}
		);
	}
	
});


// CRUD: DELETE COFFEESHOP
Router.route('/coffeeshop/delete/:_id', {
	name: 'coffeeshopDelete',
	data: function(){
		return Coffeeshops.findOne(
			{
				_id: this.params._id
			}
		);
	}
	
});

// Before action hook to force login
var requireLogin = function() {
	if (! Meteor.user()) {
		this.render('accessDenied');
	} else {
		this.next();
	}
}

Router.onBeforeAction(requireLogin, {only: ['coffeeshopUpdate','admin']});