(function () {
   'use strict';
   
   function ParameterServiceAdmin($http,config){
       
       var _insert = function(obj){
           var url = config.appAPI + 'parameter';
           
           return $http.post(url,obj);
       };
       
       var _delete = function(id){
            var url = config.appAPI + 'parameter/' + id;
            
            return $http.delete(url);           
       };
       
       var _list = function(){
           var url = config.appAPI + 'parameter';
           
           return $http.get(url);
       };
       
       var _listByConstant = function(constant){
           var url = config.appAPI + 'parameter/constant/' + constant;
           
           return $http.get(url);
       };
       
       return {
           insert : function(obj){
               return _insert(obj);
           },
           delete : function(id){
             return _delete(id);  
           },
           list : function(){
               return _list();
           },
           listByConstant : function(constant){
               return _listByConstant(constant);
           }
       };       
   }    
    
    angular
        .module('app')
        .factory('ParameterServiceAdmin',  ['$http','config',ParameterServiceAdmin]);
})();