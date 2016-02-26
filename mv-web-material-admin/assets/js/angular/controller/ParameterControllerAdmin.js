(function(){
	
	function ParameterControllerAdmin($scope,$log,$window,$location,$filter,config,ToastService,ParameterService,ParameterServiceAdmin,ParameterTypeService){
        
        var vm = this;        
        
        vm.parameter = {
            object: (function(){
                var parameter = {};
                parameter.id = null;
                parameter.name = null;                
                parameter.description = null;  
                parameter.disable = false;
                parameter.visible = true;            
                parameter.prttid = null;
                parameter.startDate = null;
                parameter.endDate = null;
                
                return parameter;
            })(),
            insert: function(parameter){
                ParameterServiceAdmin.insert(parameter).success(function (response) {
                    ToastService.show('Registro inserido com sucesso!');
                    vm.parameter.back();
                });
            },
            update: function(parameter){
                ParameterServiceAdmin.update(parameter).success(function (response) {
                    $scope.showToast('Registro atualizado com sucesso!');
                    vm.parameter.back();
                });
            },
            save: function(parameter){
                parameter.startDate = $filter('dateToUSA')(parameter.startDate);
                parameter.endDate = $filter('dateToUSA')(parameter.endDate);
                
                if(!parameter.id){
                    vm.parameter.insert(parameter);
                }else{
                    vm.parameter.update(parameter);
                }
            },
            findAll: function(){
                ParameterService.findAll().success(function (response) {
                    $scope.parameters = response;                
                });
            },
            findByConstant: function(constant){
                ParameterService.findByConstant(constant).success(function (response) {
                    $scope.parametertypes = response;                
                });
            },
            disable: function(parameter){
               vm.parameter.update(parameter); 
               this.message = config
                                .appMessage
                                .register
                                .enabled(
                                    parameter.name + ' (' + parameter.description,
                                    (!parameter.disable)
                                );                   
               ToastService.show(this.message); 
            },
            error: function(){
                $location.path('/500');
            },
            back: function(){
                $location.path('/admin/parameter');
            }               
        };
        
        $scope.parameter= vm.parameter.object;
        $scope.insert   = vm.parameter.insert;
        $scope.update   = vm.parameter.update;
        $scope.save     = vm.parameter.save;
        $scope.disable  = vm.parameter.disable;
        $scope.findAll  = vm.parameter.findAll;
        $scope.error    = vm.parameter.error;
        $scope.back     = vm.parameter.back;		
	}
	
	/*inject functions with controller on app */
	angular
		.module('app')
		.controller('ParameterControllerAdmin',[
													'$scope',
													'$log',
													'$window',
													'$location',
                                                    '$filter',
                                                    'config',
                                                    'ToastService',
                                                    'ParameterService',
													'ParameterServiceAdmin',
													'ParameterTypeService',
													ParameterControllerAdmin
												]);
})();