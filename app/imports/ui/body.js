import { Template } from 'meteor/templating';
 
import './body.html';


 
Template.body.helpers({
  assets: [
    { output: 'This is asset 1' },
    { output: 'This is asset 2' },
    { output: 'This is asset 3' },
  ],
});
