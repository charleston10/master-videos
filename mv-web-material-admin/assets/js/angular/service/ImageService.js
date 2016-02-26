(function(){
	'use strict';
	
	function ImageService($http,config){
		
		var _findImageById = function(id){			
			var url = config.appAPI + "image/" + id;
			
			return $http.get(url);
		};
		
		var _findImageWithLimit = function(init,max,paramId){
			var queryString = '?init=' + init + '&max=' + max + '&prtid=' + paramId;
			var url = config.appAPI + "image/limit" + queryString;
			
			return $http.get(url);
		};
		
		var _count = function(){			
			var url = config.appAPI + "image/total";
			
			return $http.get(url);
		}
		
		var _countByFolder = function(paramId){			
			var url = config.appAPI + "image/total/" + paramId;
			
			return $http.get(url).success(function(response){				
				return response;
			});
		}
		
		
		return {
			findImageById : _findImageById,
			findImageWithLimit : _findImageWithLimit,
			count : _count,
			countByFolder : _countByFolder
		};
	}
	
	angular
		.module('app')
		.factory('ImageService',['$http','config',ImageService]);
	
})();