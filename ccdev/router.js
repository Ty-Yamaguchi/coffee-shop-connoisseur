// ROUTER OPTIONS
Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});



// MAIN ROUTE: WELCOME

Router.route('/', function () {
  this.render('welcome');
});



// CRUD: CREATE COFFEESHOP
Router.route('/coffeeshop/create', {
	name: 'coffeeshopCreate'
});


// CRUD: READ COFFEESHOP (SINGLE)
Router.route('/coffeeshop/view/:_id', {
	name: 'coffeeshopView',
	data: function(){
		var cafeData = Cafes.findOne(
			{
				_id: this.params._id
			}
		);
		return {
			cafe: cafeData
		}
	}
});

// CRUD: READ COFFEESHOP LIST
Router.route('/coffeeshop/list', {
	name:'coffeeshopList',
	data: function(){
		var cafeList = Cafes.find(
			{
				_id: this.params._id
			}
		);
		return {
			cafe: cafeList
		}
	}
});

// CRUD: READ COFFEESHOP LIST (ADMIN)
Router.route('/admin', {
	name:'admin',
	data: function(){
		var cafeList = Cafes.find(
			{
				_id: this.params._id
			}
		);
		return {
			cafe: cafeList
		}
	}
});


// CRUD: UPDATE
Router.route('/coffeeshop/update/:_id', {
	name: 'coffeeshopUpdate',
	data: function(){
		return Cafes.findOne(
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
		return Cafes.findOne(
			{
				_id: this.params._id
			}
		);
	}
	
});

var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {only: 'coffeeshopUpdate'});
Router.onBeforeAction(requireLogin, {only: 'admin'});
