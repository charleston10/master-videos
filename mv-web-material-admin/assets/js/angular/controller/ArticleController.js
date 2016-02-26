(function(angular,undefined){    
    
    angular
        .module('app')
        .controller('ArticleController', ArticleController);
        
    ArticleController.$inject = ['$scope','ArticleService'];
    
    function ArticleController($scope,ArticleService){
        
        var vm = this;

         vm.init = function(){
            $scope.htmlPreview = '';
        };

        /* get list data of service */
        ArticleService.getContentArticle().then(function(response){
           vm.contentArticle = response.article;
           vm.contentAuthor  = response.author;
        });
    }    
})(angular);