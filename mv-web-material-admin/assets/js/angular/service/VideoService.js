(function () {
    'use strict';

    function VideoService($http,config) {

        var _findById = function (id) {
            var url =  config.appAPI + 'video/' + id;
            
            return $http.get(url);
        };

        var _findAll = function () {
            var url =  config.appAPI + 'video';
            
            return $http.get(url);
        };

        return {
            findAll : _findAll,
            findById : _findById
        };
    }
    ;

    angular
            .module('app')
            .factory('VideoService', ['$http','config', VideoService]);
})();