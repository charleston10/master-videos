(function () {
    'use strict';

    function MainService($http,config) {
        var _listProgrammingLanguage = function(){
            var url = config.appAPI + 'parameter/constant/PARAMETER_TYPE_MENU';
            
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        var _contentFooter = function(){
               var url = config.appLocalJson + 'HomeFooter.json';
               
               return $http({
                    url: url,
                    method: 'GET',
                    cache: true,
                    headers: {'Accept': 'application/json', 'Pragma': 'no-cache'}
                })
                .then(function (response) {
                    return response.data;
                });
        }

        return {
            getListProgrammingLanguage: _listProgrammingLanguage,
            getContentFooter: _contentFooter
        };
    }
    ;

    angular
            .module('app')
            .factory('MainService', ['$http','config', MainService]);

})();