(function () {

    function ChannelController($scope, $routeParams, $log, ChannelService, VideoService) {
        
        $scope.init = function(){
            $scope.showRecommended = false;          
            $scope.list(); 
            $scope.content(); 
        };

        /* close window */
        $scope.closeRecommended = function () {
            $scope.showRecommended = false;
        };

        /* list */
        $scope.list = function () {
            /* get list data of service */
            ChannelService.getListChannel().then(function (response) {
                $scope.listChannel = response; 
            });
        };

        $scope.listRecommended = function () {
            if ($scope.showRecommended == true) {
                /* get list of channel recommended */
                ChannelService.getListChannelRecommended().then(function (response) {
                    $scope.listChannelRecommended = response;
                });
            }
        };

        /* content */
        $scope.content = function () {
            /* get param id */
            $scope.channelId = $routeParams.id;

            if (($scope.channelId > 0) && (typeof $scope.channelId !== 'undefined')) {
                /* get content channel */
                ChannelService.getContentChannel($scope.channelId).then(function (response) {
                    $scope.contentChannel = response;
                });

                VideoService.getListVideoByChannel($scope.channelId).then(function (response) {                   
                    $scope.contentChannel.listVideo = response;                    
                    $scope.showContentVideo = (response.length) ? true : false;  
                });
            }
        };
    }

    /*inject functions with controller on app */
    angular
            .module('app')
            .controller('ChannelController', 
                                            [
                                                '$scope', 
                                                '$routeParams',
                                                '$log', 
                                                'ChannelService', 
                                                'VideoService', 
                                                ChannelController
                                            ]);
}());