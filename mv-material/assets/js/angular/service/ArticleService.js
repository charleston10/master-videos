(function () {
    'use strict';
    
    var LOCAL_SERVER = 'project/json/';

    function ArticleService($http){
        var contentArticle =
            $http({
                url: LOCAL_SERVER + 'ArticleContent.json',
                method: 'GET',
                cache: true,
                headers: {'Accept': 'application/json', 'Pragma': 'no-cache'}
            })   
            .then(function(response){
                return response.data;
            });
            
        return {
            getContentArticle : function(){
                return contentArticle;
            }
        };
    };

    angular
        .module('app')
        .factory('ArticleService',['$http',ArticleService]);
})();