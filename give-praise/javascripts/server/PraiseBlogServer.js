/*global Meteor, BlogPosts */

Meteor.methods({
	addPost: function(text) {
		// Make sure the user is logged in before inserting a task
		if (!Meteor.userId()) {
			throw new Meteor.Error('not-authorized');
		}

		PraisePosts.insert({
			text: text,
			createdAt: new Date(),
			owner: Meteor.userId(),
			username: Meteor.user().username
		});
	},

	deletePost: function(postId) {

		var post = BlogPosts.findOne(postId);
		if ((post.private && post.owner !== Meteor.userId()) || post.owner !== Meteor.userId()) {
			// If the task is private, make sure only the owner can delete it
			throw new Meteor.Error('not-authorized');
		} else {
			PraisePosts.remove(postId);
		}

	}

});