/*global Router*/

'use strict';

Router.map(function() {
	this.route('welcome', {
		path: '/home',
		layoutTemplate: 'baseLayout'
	});

	this.route('indexPage', {
		path: '/',
		layoutTemplate: 'baseLayout'
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
