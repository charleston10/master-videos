(function () {    
    
    function VideoControllerAdmin($scope, $window, $modal, $log, VideoServiceAdmin, ChannelService,UploadService) {
        
        /* Convert url to embed*/
        var _convertUrl = function(url){
            var id = url.replace(/^(.*)v=([^&]+)(.*)/,'$2');
            return 'https://www.youtube.com/embed/' + id;
        };
        
        /* init controller */
        $scope.init = function(){
            
            $scope.tagSelected = [];
            $scope.channelSelected = 0;
            $scope.name = null;
            $scope.title = null;
            $scope.video = null;
            $scope.description = null;
            
            $scope.listChannel();
            $scope.listTag();           
        };

        $scope.serverError = function () {
            $window.location = '/500';
        };

        /* redirect view to insert */
        $scope.add = function () {
            $window.location = '/admin/video/register';
        };

        /* redirect view to list */
        $scope.back = function () {
            $window.location = '/admin/video';
        };

        /* insert */
        $scope.insert = function () {
            var object = [];
            			
			object.push({
				name : $scope.name,
                title : $scope.title,
				description : $scope.description,
                url : _convertUrl($scope.video),
                channelId : $scope.channelSelected,
				imgid : $scope.image[0]			
			});            

            if (object.length > 0) {
                VideoServiceAdmin.insertVideo(object).then(function (response) {
                    if (response.status == 200) {
                        $window.alert('Registro inserido com sucesso!');
                        $scope.back();
                    } else {
                        $scope.serverError();
                    }
                });
            } else {
                $window.alert('Falha ao publicar.\nNão há registros para incluir.');
            }
        };

        $scope.delete = function (id) {
            if ($window.confirm('Deseja realmente deletar este registro?')) {
                VideoServiceAdmin.deleteVideo(id).then(function (response) {
                    if (response.status == 200) {
                        $window.alert('Registro deletado com sucesso!');
                        $scope.list();
                    } else {
                        $scope.serverError();
                    }
                });
            }
        };

        /* list */
        $scope.list = function () {
            VideoServiceAdmin.getListVideo().then(function (response) {
                $scope.listVideo = response;
            });
        };

        /* list channel */
        $scope.listChannel = function () {
            /* get list data of service */
            ChannelService.getListChannel().then(function (response) {
                $scope.listChannel = response;                
            });
        };

        /* tags video */
        $scope.listTag = function () {
            VideoServiceAdmin.getCategoryVideo().then(function (response) {
                $scope.tagVideo = response;
            });
        };    
        
        //MODAL   
        $scope.modalOpen = function () {              
        
            var modalInstance = $modal.open({
              animation: true,
              templateUrl: 'imageModal',
              controller: 'ModalImageController',
              size: 'lg',
              resolve: {
                items: function () {
                  return $scope.items;
                }
              }
            });
        
            modalInstance.result.then(function (selectedItem) {               
                $scope.image = selectedItem;
            }, function () {
               //$log.info('Modal dismissed at: ' + new Date());
            }); 
                      
        }; 
    }    

    /*inject functions with controller on app */
    angular
            .module('app')         
            .controller('VideoControllerAdmin', [
                                                    '$scope', 
                                                    '$window',
                                                    '$modal',
                                                    '$log', 
                                                    'VideoServiceAdmin', 
                                                    'ChannelService',
                                                    'UploadService', 
                                                    VideoControllerAdmin
                                                ]);
})();
