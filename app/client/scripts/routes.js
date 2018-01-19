import { Config } from 'angular-ecmascript/module-helpers';

import glanceTemplateUrl from '../templates/glance.html';
import tabsTemplateUrl from '../templates/tabs.html';

export default class RoutesConfig extends Config {
	configure() {
		this.$stateProvider
			.state('tab', {
				url: '/tabs',
				abstract: true,
				templateUrl: tabsTemplateUrl
			})
			.state('tab.glance', {
				url: '/glance',
				views: {
					'tab-glance': {
						templateUrl: glanceTemplateUrl,
						controller: 'GlanceCtrl as glance'
					}
				}
			});
		this.$urlRouterProvider.otherwise('tabs/glance');
	}
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];