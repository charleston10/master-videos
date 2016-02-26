(function () {
    'use strict';

    function VideoService($http,config) {

        var _contentVideo = function (id) {
            var url =  config.appAPI + 'video/' + id;
            
            return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    });
        };

        var _listVideo = function () {
            var url =  config.appAPI + 'video';
            
            return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    });
        };

        var _listVideoByChannel = function (channelId) {
            var url =  config.appAPI + 'video/channel/' + channelId;
            
            return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    });
        };

        return {
            getContentVideo: function (id) {
                return _contentVideo(id);
            },
            getListVideo: function () {
                return _listVideo();
            },
            getListVideoByChannel: function (channelId) {
                return _listVideoByChannel(channelId);
            }
        };
    }
    ;

    angular
            .module('app')
            .factory('VideoService', ['$http','config', VideoService]);
})();