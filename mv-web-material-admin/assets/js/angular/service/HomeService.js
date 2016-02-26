(function () {
    'use strict';
    
    function HomeService($http,config){
        var url = config.appLocalJson + 'HomeContent.json';
        
        var listPanel =
            $http({
                url: url,
                method: 'GET',
                cache: true,
                headers: {'Accept': 'application/json', 'Pragma': 'no-cache'}
            })   
            .then(function(response){
                return response.data;
            });
            
        return {
            getListPanel : function(){
                return listPanel;
            }
        };
    };

    angular
        .module('app')
        .factory('HomeService',   ['$http','config',HomeService]);
})();