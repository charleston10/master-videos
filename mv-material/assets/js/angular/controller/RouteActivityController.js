(function(){
    
    function RouteActivityController($scope){  
        /* I determine whether or not there is pending activity on the route
         change. This will only be meaningful if the route has a resolve that
         requires a tick to complete. */
        $scope.isResolvingRoute = false;

        /* When the route starts changing, mark the activity. */
        $scope.$on("$routeChangeStart", handleRouteChangeStartEvent);

        /* Whether or not the route finishes successfully, or in error, it is
         done. As such, we need to mark is as done resolving. */
        $scope.$on("$routeChangeSuccess", handleRouteChangeFinallyEvent );
        $scope.$on("$routeChangeError", handleRouteChangeFinallyEvent );

        /* I handle either the Success or Error route change events. */
        function handleRouteChangeFinallyEvent(event) {
            //$scope.isResolvingRoute = false;
            $scope.classLoad = 'fadeOut';            
        }

        /* I handle the the Start route change event. */
        function handleRouteChangeStartEvent(event) {
            //$scope.isResolvingRoute = true;
            $scope.classLoad = 'fadeIn';
        }
   }
    
    /*inject functions with controller on app */
    angular
        .module('app')
        .controller('RouteActivityController',['$scope', RouteActivityController]);
})();