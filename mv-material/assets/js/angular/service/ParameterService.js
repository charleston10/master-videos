(function () {
   'use strict';
   
   function ParameterService($http,config){
       
       var _list = function(){
           var url = config.appAPI + 'parameter';
           
           return $http.get(url);
       };
       
       var _listByConstant = function(constant){
           var url = config.appAPI + 'parameter/constant/' + constant;
           
           return $http.get(url);
       };
       
       return {           
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
        .factory('ParameterService',  ['$http','config',ParameterService]);
})();