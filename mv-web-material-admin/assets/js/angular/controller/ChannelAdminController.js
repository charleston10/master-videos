(function(angular,undefined){
	'use strict';
    
    angular
		.module('app')
		.controller('ChannelAdminController',ChannelAdminController);
    
    ChannelAdminController.$inject = ['$log','$window','$mdDialog','$mdToast','$location',
        'ChannelService','ChannelServiceAdmin','ParameterService'];

	function ChannelAdminController($log,$window,$mdDialog,$mdToast,$location,ChannelService,ChannelServiceAdmin,ParameterService){
		var vm = this;
           
        vm.clearData = function(){
            return {
                name : null,
                description : null,
                parameterType : null,
                startDate : null,
                endDate : null
            };
        }
          
        vm.init = function(){
            vm.channel = vm.clearData();
		};
		
		vm.serverError = function () {            
            $location.path('/500')
        };

        vm.add = function () {
            $location.path('/admin/channel/register')
        };
		
		vm.insert = function(channel){			
			
			if (channel) {
                ChannelServiceAdmin.insert(channel).then(function (response) {
                    if (response.status == 200) {                        
                        vm.showToast('Registro inserido com sucesso!');
                        vm.back();
                    } else {
                        vm.serverError();
                    }
                });
            } 				
		};
		
		vm.delete = function (id) {
            if ($window.confirm('Deseja realmente deletar este registro?')) {
                ChannelServiceAdmin.delete(id).then(function (response) {
                    if (response.status == 200) {                        
                        vm.showToast('Registro deletado com sucesso!');
                        vm.list();
                    } else {
                        vm.serverError();
                    }
                });
            }
        };
     
        vm.back = function () {            
            $location.path('/admin/channel');
        };
		
		vm.findAll = function(){
			ChannelService.getListChannel().then(function(response){
				vm.listChannel = response;
			});
		};
        
        //modal
        vm.openDialogImage = function(ev) {
            $mdDialog.show({
              controller: 'ModalImageController',
              templateUrl: 'component/modalImage.html',
              parent: angular.element(document.body),
              targetEvent: ev,
            })
            .then(function(answer) {
                vm.image = answer.image;            
            }, function() {
                 //$log.log('You cancelled the dialog.');
            });
          };
	}	
    
})(angular);