(function () {
    'use strict';    
    
    function VideoServiceAdmin($http,config){
        var _insert = function(obj){
           var url = config.appAPI + 'video';
           
           return $http.post(url,obj);
       };
       
       var _delete = function(id){
            var url = config.appAPI + 'video/' + id;
            
            return $http.delete(url);           
       };
       
       var _update = function(obj){
           var url = config.appAPI + 'video';
            
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
        .factory('VideoServiceAdmin',  ['$http','config',VideoServiceAdmin]);
})();