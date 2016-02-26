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
                        method: 'POST', 
                        url: 'http://localhost:8080/api/v2/oauth/token', 
                        headers: {
                            'Authorization': 'Basic OGRlNzlmMjYyODcyNDg2YmU1MWM1OGQyMmU2MWU4MmI6MWZlMzZkYjRkNzE2ZDI0NWJlNWZlYzVhMTdlMTA5YTc='}
                        }
                    );                            
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


