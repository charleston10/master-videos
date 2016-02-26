(function () {
   'use strict';
   
   function ParameterService($http,config){
       
       var _findAll = function(){
           var url = config.appAPI + 'parameter';
           
           return $http.get(url);
       };
       
       var _findByConstant = function(constant){
           var url = config.appAPI + 'parameter/constant/' + constant;
           
           return $http.get(url);
       };
       
       return {           
           findAll :_findAll,
           findByConstant : _findByConstant
       };       
   }    
    
    angular
        .module('app')
        .factory('ParameterService',  ['$http','config',ParameterService]);
})();