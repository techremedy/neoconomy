import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  tokens: [
    { output: 'This is token 1' },
    { output: 'This is token 2' },
    { output: 'This is token 3' },
  ],
});
