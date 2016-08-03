/*global Mongo, PraisePosts */
/*jshint -W020 */
PraisePosts  = new Mongo.Collection('praisePosts');
PraisePosts.allow({
    'update': function (userId,doc) {
      /* user and doc checks ,
      return true to allow updates */
      return true; 
    }
  });
Ground.Collection(PraisePosts, 'praisePosts');