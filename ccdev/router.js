/**
 * Router options
 */
Router.configure({
    layoutTemplate: 'layout'
});

// CRUD: create coffeeshop
Router.route('/coffeeshop/create', {
	name: 'coffeeshopCreate'
});

// CRUD: update coffeeshop
Router.route('/coffeeshop/update/:_id', {
	name: 'coffeeshopUpdate',
	data: function(){
		return Cafes.findOne(
			{
				_id: this.params._id
			}
		);
	}
	
})

// CRUD: read coffeeshop (single)
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

// CRUD: read coffeeshop (list)
Router.route('/coffeeshop/list', {
	name:'coffeeshopList',
	data: function(){
		return Cafes.find();
	}
});