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
import GlanceCtrl from '../controllers/glance.controller';
import CalendarFilter from '../filters/calendar.filter';
import RoutesConfig from '../routes';
const App = 'Neoconomy';

//App
Angular.module(App, [
	'angular-meteor',
	'ionic'
]);

new Loader(App)
	.load(GlanceCtrl)
	.load(CalendarFilter)
	.load(RoutesConfig);

//startup
Angular.element(document).ready(onReady);

function onReady(){
	Angular.bootstrap(document, [App]);
}