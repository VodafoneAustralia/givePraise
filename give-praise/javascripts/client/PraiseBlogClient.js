/*global Deps, Meteor, Template, PraisePosts, PraisePostService*/
/*jshint -W020 */
/**
 * Separate player logic into an own service singleton for better testability and reusability.
 * @type {{}}
 */

 Deps.autorun(function() {
	Meteor.subscribe('offlineUsers');
	Meteor.subscribe('onlineUsers');
});

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
	},
	'offlineUsers': function() {
		return Meteor.users.find({
			'status.online': false,
			_id: {
				$ne: Meteor.userId()
			}
		});
	},
	'onlineUsers': function() {
		return Meteor.users.find({
			'status.online': true,
			_id: {
				$ne: Meteor.userId()
			}
		});
	}

});

Template.praiseBlog.events({
	'submit .newPraisePostForm': function(event) {
		// This function is called when the new task form is submitted
		var user = document.getElementById('praise-user').value;
		var text = '@' + user +  ' ' +event.target.text.value;

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



