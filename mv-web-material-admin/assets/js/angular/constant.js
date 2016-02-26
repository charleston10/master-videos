(function(angular, undefined){
	'use strict';
	
	var appName = 'eXcript';
	
	var urlApp = function(debug){
		return (debug) ? 'http://localhost:8055/master_videos/api/' : 'http://localhost:8055/master_videos/api/';
	};
	
	var messageToggle = function(){
		return function(register,toggle){
			var messageType = (toggle) ? 'ativado' : 'desativado';
			if(typeof register !== 'undefined' || register !== null){
				return register + ' ' + messageType + ' com sucesso!';
			}else{
				return 'Registro ' + messageType + ' com sucesso!';
			}
		};
	};
	
	var messages = {
		register: {
			insert: 'Registro inserido com sucesso!',
			delete: 'Registro removido com sucesso!',
			update: 'Registro atualizado com sucesso!',
			enabled: messageToggle()		
		},
		wellcome : 'Bem-Vindo a ' + appName
	};
	
	angular
		.module('app')
		.constant('config',{
			appName : appName,
			appVersion : '1.0',
			appTitle : 'Admin Excript',
			appAPI : urlApp(true),
			appLocalJson : 'project/json/',
			appMessage : messages
		});
})(angular);