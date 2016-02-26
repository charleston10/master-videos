(function(){
	'use strict';
	
	function ImageService($http,config){
		
		var _getImage = function(id){			
			var url = config.appAPI + "image/" + id;
			
			return $http.get(url).success(function(response){				
				return response;
			});
		};
		
		var _getListImageWithLimit = function(init,max,paramId){
			var queryString = '?init=' + init + '&max=' + max + '&prtid=' + paramId;
			var url = config.appAPI + "image/limit" + queryString;
			
			return $http.get(url).success(function(response){				
				return response;
			});
		};
		
		var _getCount = function(){			
			var url = config.appAPI + "image/total";
			
			return $http.get(url).success(function(response){				
				return response;
			});
		}
		
		var _getCountPerFolder = function(paramId){			
			var url = config.appAPI + "image/total/" + paramId;
			
			return $http.get(url).success(function(response){				
				return response;
			});
		}
		
		
		return {
			getImage : _getImage,
			getListImageWithLimit : _getListImageWithLimit,
			getCount : _getCount,
			getCountPerFolder : _getCountPerFolder
		};
	}
	
	angular
		.module('app')
		.factory('ImageService',['$http','config',ImageService]);
	
})();