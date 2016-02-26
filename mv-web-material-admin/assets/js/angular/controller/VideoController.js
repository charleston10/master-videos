(function(){
    
    function VideoController($scope,$sce,$routeParams,$window,$log,VideoService,ChannelService){
        /* get param id */
        $scope.videoId      = $routeParams.video;
        $scope.channelId    = $routeParams.channel;
        
        /* content */
        $scope.content = function(){
            if(($scope.videoId > 0) && (typeof $scope.videoId !== 'undefined')){
                /* get list data of service */
                VideoService.getContentVideo($scope.videoId).then(function(response){
                   $scope.contentVideo = response;
                });
            }
        };
        
        $scope.backChannel = function(){            
            if(($scope.channelId > 0) && (typeof $scope.channelId !== 'undefined')){
                $window.location.href = "/channel/" + $scope.channelId;
            }
        };                
        
        /* list channel */
        $scope.listChannel = function(){
            /* get list of channel */
            ChannelService.getListChannel().then(function(response){
               $scope.listChannel = response;
            });
        };
        
        
         /* allow open url youtube */
        $scope.trustUrl = function(url) { 
            var regexValidator = new RegExp(/^(https?:\/\/)(www\.)?(youtube\.)([a-z\.]+)/i);
              
            if (regexValidator.test(url)){
                return $sce.trustAsResourceUrl(url);                
            }else{
                return '';
            }
        };         
    }
    
    /*inject functions with controller on app */
    angular
        .module('app')
        .controller('VideoController',  [
                                            '$scope',
                                            '$sce',
                                            '$routeParams',
                                            '$window',
                                            '$log',
                                            'VideoService',
                                            'ChannelService', 
                                            VideoController
                                        ]);
})();