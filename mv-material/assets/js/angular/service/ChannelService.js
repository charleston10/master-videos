(function () {
    'use strict';
        
    function ChannelService($http,config) {
        
        var listChannel = function(){
           var url = config.appAPI + 'channel';
           
           return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        };

        var listChannelRecommended = function(){
                var url = config.appLocalJson + 'ChannelRecommended.json';
                
                return $http({
                    url: url,
                    method: 'GET',
                    cache: true,
                    headers: {'Accept': 'application/json', 'Pragma': 'no-cache'}
                })
                .then(function (response) {
                    return response.data;
                });
        }

        var contentChannel = function (id) {
            var url = config.appAPI + 'channel/' + id;
            
            return $http.get(url)
                    .then(function (response) {
                        return response.data;
                    });
        };

        return {
            getListChannel: function () {
                return listChannel();
            },
            getListChannelRecommended: function () {
                return listChannelRecommended();
            },
            getContentChannel: function (id) {
                return contentChannel(id);
            }
        };
    }
    ;

    angular
            .module('app')
            .factory('ChannelService', ['$http','config', ChannelService]);
})();