(function(){
    function MainController($scope,$log,$window,$mdToast,$mdSidenav,$mdComponentRegistry,$mdBottomSheet,MainService){
        
        $scope.toggle = angular.noop;
        $scope.isOpen = function() { return false; };

        $mdComponentRegistry
            .when('side')
            .then(function(sideNav){    
                $scope.isOpen = angular.bind(sideNav, sideNav.isOpen);
                $scope.toggle = angular.bind(sideNav, sideNav.toggle);
        });

        /* get list data of service */
        MainService.getListProgrammingLanguage().then(function(response){
            $scope.listProgrammingLanguage =  response;
        });

        /* get data of footer */
        MainService.getContentFooter().then(function(response){
            $scope.contentFooter = response;
        });
        
        $scope.openToast = function($event) {  
            $mdToast.show($mdToast.showSimple('Hello'));
        };
        
        $scope.toggleNavSide = function(){
            $mdSidenav('left').toggle();
        };
        
        $scope.closeNavSide = function(){
            $mdSidenav('left').close();
        };  
        
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };
        
        $scope.navigateTo = function(to,event){
           $window.location = to;
        };
    }
    
    /*inject functions with controller on app */
    angular
        .module('app')
        .controller('MainController',   [
                                            '$scope',
                                            '$log',
                                            '$window',
                                            '$mdToast',
                                            '$mdSidenav',
                                            '$mdComponentRegistry',
                                            '$mdBottomSheet',
                                            'MainService', 
                                            MainController
                                        ]);
})();
