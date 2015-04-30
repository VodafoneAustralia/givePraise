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
});
