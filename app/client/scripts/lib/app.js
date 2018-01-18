//libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';

//modules
const App = 'Neoconomy';

//App
Angular.module(App, [
	'angular-meteor',
	'ionic'
]);

//startup
if (Meteor.isCordova){
	Angular.element(document).on('deviceready', onReady);
} else {
	Angular.element(document).ready(onReady);
}

function onReady(){
	Angular.bootstrap(document, [App]);
}