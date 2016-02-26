(function () {
    'use strict';    
    
    function VideoServiceAdmin($http,config){
        var _insertVideo = function(obj){     
              var url = config.appAPI + 'video'; 
                    
              return $http.post(url,obj)
              .then(function(response){
                  return response;
              });
        };
        
        var _listVideo = function(){
              var url = config.appAPI + 'video';
              return $http.get(url)
              .then(function(response){
                  return response.data;
              });
        };
        
        var _deleteVideo = function(id){ 
              var url = config.appAPI + 'video/' + id;
                               
              return $http.delete(url)
              .then(function(response){
                  return response;
              });
        };
        
        var _categoryVideo = function(){
            var url = config.appAPI + 'parameter/constant/PARAMETER_TYPE_VIDEO';
            
            return $http.get(url)
              .then(function(response){
                  return response.data;
              });
        };
                  
        return {
            insertVideo: function(obj){
                return _insertVideo(obj);
            },
            deleteVideo: function(id){
                return _deleteVideo(id);
            },
            getListVideo: function(){
                return _listVideo();
            },
            getCategoryVideo: function(){
                return _categoryVideo();
            }
        };
    };

    angular
        .module('app')
        .factory('VideoServiceAdmin',  ['$http','config',VideoServiceAdmin]);
})();