(function(){
	'use strict';
	
	function ParameterTypeService($http,config){
		var _findAll = function(){
			var url = config.appAPI + 'parametertype';
			
			return $http.get(url);	
		};
		
		return {
			findAll : _findAll
		};
	}
	
	angular
		.module('app')
		.factory('ParameterTypeService',['$http','config',ParameterTypeService]);
})();