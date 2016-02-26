(function () {
    'use strict';
    
    var LOCAL_SERVER = 'project/json/';

    function MainService($http) {
        var listProgrammingLanguage =
            $http({
                url: SERVER_URL + 'ProgrammingLanguage.json',
                method: 'GET',  
                cache: true,
                headers: {'Accept': 'application/json', 'Pragma' : 'no-cache'}
            })   
            .then(function(response){
                return response.data;
            });
    };

    angular
        .module('app')
        .factory('MainService',   ['$http',MainService]);

})();