(function(){
	'use strict';
	
	function ParameterTypeService($http,config){
		var _list = function(){
			var url = config.appAPI + 'parametertype';
			
			return $http.get(url);	
		};
		
		return {
			getList : function(){
				return _list();
			}	
		};
	}
	
	angular
		.module('app')
		.factory('ParameterTypeService',['$http','config',ParameterTypeService]);
})();