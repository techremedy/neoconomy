import { Template } from 'meteor/templating';
 
import './body.html';

if(Meteor.isServer){
  Meteor.methods({
    'getNEO': function () {
      const data = HTTP.get('https://api.coinmarketcap.com/v1/ticker/neo/')
      console.log(data);
      return data;
      }
  })
  
  neo = Meteor.call('getNEO');
  console.log(neo);
}
 
Template.body.helpers({
  assets: [
    { output: 'This is asset 1' },
    { output: 'This is asset 2' },
    { output: 'This is asset 3' },
  ],
});
