import { Template } from 'meteor/templating';
 
import './body.html';

import { HTTP } from 'meteor/http';

//array of assets to grab

//function to get api data for given asset
HTTP.get('https://api.coinmarketcap.com/v1/ticker/$ticker/', function (error, data){
  console.log( 'http.get ::', error, data);
});
 
Template.body.helpers({
  assets: [
    { output: 'This is asset 1' },
    { output: 'This is asset 2' },
    { output: 'This is asset 3' },
  ],
});
