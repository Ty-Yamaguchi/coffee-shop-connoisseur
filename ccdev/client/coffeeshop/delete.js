  // Form Handler for UPDATING & DELETING Coffee Shops in Mongo DB
  Template.coffeeshopDelete.events({
	
    
	 'click [hook="delete-cafe"]': function (eventObject, templateObject) {
	  
	  // Prevent Default Click Event		
	  event.preventDefault()
	  
      Meteor.call("removeCafe", this._id);	
       	 
	   // Redirect to Admin Route		
	  Router.go('/admin');

    }
	
  });
