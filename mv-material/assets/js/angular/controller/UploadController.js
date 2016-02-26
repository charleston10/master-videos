(function(){
    /* http://deviantsart.com/ */
    function UploadController($scope,$modal, $log,$window,config,UploadService,FileUploader,ParameterService){
      
       $scope.back = function(){
                  $window.location = "/admin/image";      
            };
      
      var uploader = $scope.uploader = new FileUploader({
            url: config.appAPI + 'upload'   
             //url: 'lib/php/image/upload.php' 
        });

        // FILTERS
        uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        }); 
        
        uploader.onAfterAddingFile = function (fileItem) {
            fileItem.formData.push(
                { 
                  name: fileItem._file.name,
                  type: fileItem._file.type,
                  size: fileItem._file.size,
                  folder: $scope.folder
                }
            );
        };       
        
        $scope.init = function(){
            $scope.folder = 0;
            _listFolder();
        };
               
        
        $scope.upload = function(){   
            var input = angular.element(document.getElementsByName('file[0]')); 
            var obj = input[0].files[0];
             
            UploadService.uploadImage(obj).then(function(response){                  
    			         console.log(response);          
            });
        };
        
        var _listFolder = function(){
            ParameterService.listByConstant('PARAMETER_TYPE_FOLDER').success(function(response){
                $scope.listFolder = response;
            });
        };
        
        $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
    }
    
   function ModalInstanceCtrl($scope, $modalInstance, items) {
  
    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };
  
    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };
  
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  };
    
    /*inject functions with controller on app */
    angular
        .module('app')
        .controller('ModalInstanceCtrl',ModalInstanceCtrl)
        .controller('UploadController',  [
                                              '$scope',
                                              '$modal',
                                              '$log',
                                              '$window',
                                              'config',
                                              'UploadService',
                                              'FileUploader', 
                                              'ParameterService',
                                              UploadController
                                          ]);
})();