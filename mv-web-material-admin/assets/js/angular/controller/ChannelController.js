(function (angular,undefined) {
    
    angular
        .module('app')
        .controller('ChannelController', ChannelController);
    
    ChannelController.$inject = ['$routeParams','$log','ChannelService','VideoService'];

    function ChannelController($routeParams, $log, ChannelService, VideoService) {
        
        var vm = this;
        
        vm.init = function(){
            vm.showRecommended = false;          
            vm.list(); 
            vm.content(); 
        };

        /* close window */
        vm.closeRecommended = function () {
            vm.showRecommended = false;
        };

        /* list */
        vm.list = function () {
            /* get list data of service */
            ChannelService.getListChannel().then(function (response) {
                vm.listChannel = response;                
            });
        };

        vm.listRecommended = function () {
            if (vm.showRecommended == true) {
                /* get list of channel recommended */
                ChannelService.getListChannelRecommended().then(function (response) {
                    vm.listChannelRecommended = response;
                });
            }
        };

        /* content */
        vm.content = function () {
            /* get param id */
            vm.channelId = $routeParams.id;

            if ((vm.channelId > 0) && (vm.channelId !== undefined)) {
                /* get content channel */
                ChannelService.getContentChannel(vm.channelId).then(function (response) {
                    vm.contentChannel = response;
                });

                VideoService.getListVideoByChannel(vm.channelId).then(function (response) {                   
                    vm.contentChannel.listVideo = response;                    
                    vm.showContentVideo = (response.length) ? true : false;  
                });
            }
        };
    }    
})(angular);