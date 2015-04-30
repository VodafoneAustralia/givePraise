/*global Meteor, praisePosts */

Meteor.publish('praisePosts', function() {
	return PraisePosts.find({});
});
