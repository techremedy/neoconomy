import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
 
import './body.html';

Assets = new Mongo.Collection('assets');

Sesssion.setDefault('searching', false);

Tracker.autorun(function(){
  if(Session.get('query')){
  	var searchHandle = Meteor.subscribe('assetSearch', Session.get('query'));
  	Session.set('searching', ! searchHandle.ready());
  }
});

Template.body.events({
  'submit form': function(event, template){
  	event.preventDefault();
  	var query = template.$('input[type=text]').val();
  	if(query)
  	  Session.set('query', query);
  }
});
 
Template.body.helpers({
  assets: function(){
  	return Assets.find();
  },
  searching: function(){
  	return Session.get('searching');
  }
});
