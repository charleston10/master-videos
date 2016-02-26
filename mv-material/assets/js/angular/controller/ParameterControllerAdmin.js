(function(){
	
	function ParameterControllerAdmin($scope,$log,$window,ParameterServiceAdmin,ParameterTypeService){
		
		$scope.init = function(){
			$scope.listTypeParameter();
			
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
            $window.location = '/admin/parameter/register';
        };
		
		$scope.insert = function(){
			var object = [];
			
			object.push({
				name : $scope.name,
				description : $scope.description,
				startDate : ($scope.startDate).split('/').reverse().join('-'),
				endDate : ($scope.endDate) ? ($scope.endDate).split('/').reverse().join('-') : null,
				prttid : $scope.parameterType				
			});			
			
			if (object.length > 0) {
                ParameterServiceAdmin.insert(object).then(function (response) {
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
                ParameterServiceAdmin.delete(id).then(function (response) {
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
            $window.location = '/admin/parameter';
        };
		
		$scope.list = function(){
			ParameterServiceAdmin.list().success(function(response){
				$scope.listParameter = response;
			});
		};
		
		$scope.listTypeParameter = function(){
				ParameterTypeService.getList().success(function(response){
					$scope.listCategory = response;
				});
		};
		
	}
	
	/*inject functions with controller on app */
	angular
		.module('app')
		.controller('ParameterControllerAdmin',[
													'$scope',
													'$log',
													'$window',
													'ParameterServiceAdmin',
													'ParameterTypeService',
													ParameterControllerAdmin
												]);
})();