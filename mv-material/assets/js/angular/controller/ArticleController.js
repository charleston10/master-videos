(function(){
    
    function ArticleController($scope,ArticleService){

        $scope.init = function(){
            $scope.htmlPreview = '';
        };

        /* get list data of service */
        ArticleService.getContentArticle().then(function(response){
           $scope.contentArticle = response.article;
           $scope.contentAuthor  = response.author;
        });
    }
    
    /*inject functions with controller on app */
    angular
        .module('app')
        .controller('ArticleController',['$scope','ArticleService', ArticleController]);
})();