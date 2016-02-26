(function () {
    'use strict';
        
    function CourseService($http,config) {
        
        var _findAll = function(){
                           var url = config.appAPI + 'course';
                           
                           return $http.get(url);             
                        };
            

        var _findById =  function (id) {
                            var url = config.appAPI + 'course/' + id;
                            
                            return $http.get(url);
                         };  

        return {
            findAll: _findAll,         
            findById: _findById
        };
    }

    angular
            .module('app')
            .factory('CourseService', ['$http','config', CourseService]);
})();