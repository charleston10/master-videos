(function () {
   'use strict';
   
   function ParameterServiceAdmin($http,config){
       
       var _insert = function(obj){
           var url = config.appAPI + 'parameter';
           
           return $http.post(url,obj);
       };
       
       var _update = function(obj){
            var url = config.appAPI + 'parameter/';
            
            return $http.put(url,obj);           
       };
       
       var _delete = function(id){
            var url = config.appAPI + 'parameter/' + id;
            
            return $http.delete(url);           
       };
       
       return {
           insert : _insert,
           update : _update,
           delete : _delete
           };
   }    
    
    angular
        .module('app')
        .factory('ParameterServiceAdmin',  ['$http','config',ParameterServiceAdmin]);
})();