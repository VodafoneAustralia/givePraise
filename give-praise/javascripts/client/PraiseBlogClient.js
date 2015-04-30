/*global Meteor, Template, PraisePosts, PraisePostService*/
/*jshint -W020 */
/**
 * Separate player logic into an own service singleton for better testability and reusability.
 * @type {{}}
 */
PraisePostService = {
	praisePosts: function() {
		return PraisePosts.find({});
	},
	postCount: function() {
		return PraisePosts.find().count();
	}
};


// This code only runs on the client
Meteor.subscribe('praisePosts');

Template.praiseBlog.helpers({
	praisePosts: function() {
		return  PraisePostService.praisePosts();
	},
	postCount: function() {
		return PraisePostService.postCount();
	}

});

Template.praiseBlog.events({
	'submit .newPraisePostForm': function(event) {
		// This function is called when the new task form is submitted

		var text = event.target.text.value;

		Meteor.call('addPost', text);

		// Clear form
		event.target.text.value = '';

		// Prevent default form submit
		return false;
	}
});

Template.praisePost.events({
	'click .delete': function() {
		Meteor.call('deletePraisePost', this._id);
	}
});


Template.praisePost.helpers({
	isOwner: function() {
		return this.owner === Meteor.userId();
	}
});



