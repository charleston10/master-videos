(function(){
    
    function HomeController($scope,HomeService,VideoService){ 

        /* get list data of service */
        var listContent = function(){            
            VideoService.getListVideo().then(function(response){
               $scope.listPanel = response;
            });
        };

        /* init method */
        $scope.init = function(){

            //define list of contents
            $scope.listPanel = [];

            //variable of find
            $scope.searchContent = '';

            listContent();
        };

        /* search in list */
        $scope.search = function(data){
            //receive value of search
            $scope.searchContent = data;

            //search in list
            listContent();
        };
    }
    
    /*inject functions with controller on app */
    angular
        .module('app')
        .controller('HomeController', ['$scope','HomeService','VideoService', HomeController]);
})();