(function(){
	
	function CourseServiceAdmin($http,config){
		var _insert = function(obj){
           var url = config.appAPI + 'course';
           
           return $http.post(url,obj);
       };
       
       var _delete = function(id){
            var url = config.appAPI + 'course/' + id;
            
            return $http.delete(url);           
       };
       
       var _update = function(obj){
           var url = config.appAPI + 'course';
            
            return $http.put(url,obj);  
       };
       
       return {
           insert : _insert,        
           delete : _delete,
           update : _update 
       };
	}
	
	angular
		.module('app')
		.factory('CourseServiceAdmin',['$http','config',CourseServiceAdmin]);
})();