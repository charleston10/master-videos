(function(){
	'use strict';
	
	function ChannelControllerAdmin($scope,$log,$window,$modal,ChannelService,ChannelServiceAdmin,ImageService,ParameterService){
		
        $scope.init = function(){
			$scope.name = null;
			$scope.description = null;
			$scope.parameterType = 0;
			$scope.startDate = new Date().toLocaleDateString();
			$scope.endDate = null;
		};
		
		$scope.serverError = function () {
            $window.location = '/500';
        };

        /* redirect view to insert */
        $scope.add = function () {
            $window.location = '/admin/channel/register';
        };
		
		$scope.insert = function(){
			var object = [];
			
			object.push({
				name : $scope.name,
				description : $scope.description,
				startDate : ($scope.startDate).split('/').reverse().join('-'),
				endDate : ($scope.endDate) ? ($scope.endDate).split('/').reverse().join('-') : null,
				imgid : $scope.image[0]			
			});
			
			if (object.length > 0) {
                ChannelServiceAdmin.insert(object).then(function (response) {
                    if (response.status == 200) {
                        $window.alert('Registro inserido com sucesso!');
                        $scope.back();
                    } else {
                        $scope.serverError();
                    }
                });
            } else {
                $window.alert('Falha ao salvar.\nNão há registros para salvar.');
            }				
		};
		
		$scope.delete = function (id) {
            if ($window.confirm('Deseja realmente deletar este registro?')) {
                ChannelServiceAdmin.delete(id).then(function (response) {
                    if (response.status == 200) {
                        $window.alert('Registro deletado com sucesso!');
                        $scope.list();
                    } else {
                        $scope.serverError();
                    }
                });
            }
        };

        /* redirect view to list */
        $scope.back = function () {
            $window.location = '/admin/channel';
        };
		
		$scope.list = function(){
			ChannelService.getListChannel().then(function(response){
				$scope.listChannel = response;
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
	
	
	angular
		.module('app')
		.controller('ChannelControllerAdmin',[
												'$scope',
												'$log',
												'$window',
												'$modal',
												'ChannelService',
												'ChannelServiceAdmin',
                                                'ImageService',
                                                'ParameterService',
												ChannelControllerAdmin
											]);
})();