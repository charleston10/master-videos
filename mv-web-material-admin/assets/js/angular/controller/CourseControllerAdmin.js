(function(){
	'use strict';
	
	function CourseControllerAdmin(
        $scope,
        $log,
        $window,
        $mdDialog,
        $mdToast,
        $location,
        config,
        CourseService,        
        CourseServiceAdmin,
        ImageService,
        ParameterService
    ){
        //create new object course
        $scope.course = {};
		  
        $scope.init = function(){
            //init object
            $scope.course.name = null;
            $scope.course.description = null;           
            $scope.course.startDate = null;
            $scope.course.endDate = null;
            $scope.course.friendUrl = null;
            $scope.course.imgid = null;
		};
		
		$scope.serverError = function () {            
            $location.path('/500')
        };

        /* redirect view to insert */
        $scope.add = function () {
            $location.path('/admin/course/register');
        };
        
        /* redirect view to list */
        $scope.back = function () {            
            $location.path('/admin/course');
        };
		
		$scope.insert = function(){
            
            $scope.course.imgid = $scope.image.id;  
            
            $scope.course = _formatDate($scope.course);          
			
			if ($scope.course) {
                CourseServiceAdmin.insert($scope.course).then(function (response) {
                    if (response.status == 200) {                        
                        $scope.showToast('Registro inserido com sucesso!');
                        $scope.back();
                    } else {
                        $scope.serverError();
                    }
                });
            } 				
		};
        
        $scope.disableCourse = function(course){
            CourseServiceAdmin.update(course);
            
            var message = config.appMessage.register.enabled(course.name,(!course.disable));                   
            $scope.showToast(message); 
        };
		
		$scope.list = function(){
			CourseService.findAll().success(function(response){
				$scope.listCourse = response;
			});
		};
        
        var _formatDate = function(object){
            var startDate = object.startDate;
            if(startDate){
                var monthStartDate = (startDate.getMonth() + 1);
                var dayStartDate = (startDate.getDate() + 1);
                
                monthStartDate = (monthStartDate.length == 1) ? '0' + monthStartDate :  monthStartDate;
                dayStartDate = (dayStartDate.length == 1) ? '0' + dayStartDate : dayStartDate;
                
                startDate = startDate.getFullYear() + '-' + monthStartDate + '-'  + dayStartDate;                
            }
            
            var endDate = object.endDate;
            if(endDate){
                var monthEndDate = (endDate.getMonth() + 1);
                var dayEndDate = (endDate.getDate() + 1);
                
                monthEndDate = (monthEndDate.length == 1) ? '0' + monthEndDate :  monthEndDate;
                dayEndDate = (dayEndDate.length == 1) ? '0' + dayEndDate : dayEndDate;
                
                endDate = endDate.getFullYear() + '-' + monthEndDate + '-'  + dayEndDate;                
            }
            
            return object;
        };
        
        
        //modal
        $scope.openDialogImage = function(ev) {
            $mdDialog.show({
              controller: 'ModalImageController',
              templateUrl: 'component/modalImage.html',
              parent: angular.element(document.body),
              targetEvent: ev,
            })
            .then(function(answer) {
                $scope.image = answer.image;            
            });
          };
		
		//toast
        $scope.toastPosition = {
            bottom: false,
            top: true,
            left: false,
            right: true
          };
          
          $scope.getToastPosition = function() {
            return Object.keys($scope.toastPosition)
              .filter(function(pos) { return $scope.toastPosition[pos]; })
              .join(' ');
          };
          
          $scope.showToast = function(message) {
            $mdToast.show(
              $mdToast.simple()
                .content(message)
                .position($scope.getToastPosition())
                .hideDelay(3000)
            );
          };
	}
	
	angular
		.module('app')
		.controller('CourseControllerAdmin',[
												'$scope',
												'$log',
												'$window',
												'$mdDialog',
                                                '$mdToast',
                                                '$location',
                                                'config',
												'CourseService',												
                                                'CourseServiceAdmin',
                                                'ImageService',
                                                'ParameterService',
												CourseControllerAdmin
											]);
})();