(function () {
    'use strict';

    function UploadService($http,$log,config) {

        var _uploadImage = function (file) { 
                                 
            var formData = new FormData();           
            formData.append('file', file);
            formData.append('name', file.name);
            formData.append('size', file.size);  
            formData.append('type', file.type);
          
            var url = config.appAPI + 'upload';
        
            return $http({
                url: url,
                method: 'POST',
                cache : false,
                headers :  {'Content-Type': undefined}, 
                transformRequest  : angular.identity,
                data : formData             
            });                              
        };       

        return {
            uploadImage: function (file) {
                return _uploadImage(file);
            }
        };
    };

    angular
            .module('app')
            .factory('UploadService', ['$http','$log','config', UploadService]);
})();


