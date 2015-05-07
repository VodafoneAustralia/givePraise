/*global Router*/

'use strict';

Router.map(function() {
	this.route('indexPage', {
		path: '/',
		layoutTemplate: 'baseLayout',
		waitOn: function(){
			return Meteor.subscribe('praisePosts');
		},
	});

	this.route('praiseBlog', {
		path: '/praiseBlog',
		layoutTemplate: 'baseLayout'
	});

	this.route('showPlaudits', {
		path: '/showPlaudits',
		layoutTemplate: 'baseLayout',
		waitOn: function(){
			return Meteor.subscribe('praisePosts');
		},
	});

	this.route('yourPlaudits', {
		path: '/yourPlaudits',
		layoutTemplate: 'baseLayout',
		waitOn: function(){
			return Meteor.subscribe('praisePosts');
		},
	});

	this.route('leaderboard', {
		path: '/leaderboard',
		layoutTemplate: 'baseLayout',
		waitOn: function(){
			return Meteor.subscribe('praisePosts');
		},
	});
});
