(function(){
	'use strict';
	
	angular
		.module('app')
		.constant('config',{
			appName : 'MasterVideos',
			appVersion : '1.0',
			appTitle : 'Portal',
			appAPI : 'http://localhost:8055/master-videos/api/',
			appLocalJson : 'project/json/',
            appMessageWelcome : 'Seja bem-vindo ao portal'
		});
})();