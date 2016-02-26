(function(){
	'use strict';
	
	function ModalImageController($scope,$mdDialog,$log,ImageService,ParameterService){
        $scope.hide = function(object) {
            $mdDialog.hide(object);
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };       
        
		//create object pagination
        $scope.pagination = {};
		
		$scope.init = function(){
            $scope.pagination.totalRegister = 0; 
               
            $scope.pagination.totalPerPage = 5;
            $scope.pagination.currentPage = 1; 
            
            $scope.folder = null;
            
            _listFolder(); 
                    
            $scope.pagination.refresh();            
        };
             
            //paginação
        $scope.pagination.first = function(){
            $scope.pagination.currentPage = 1;
            $scope.pagination.refresh();
        };
                
        $scope.pagination.next = function(){
            if($scope.pagination.currentPage < $scope.pagination.totalPage){
                $scope.pagination.currentPage++;
                $scope.pagination.refresh();
            }
        }; 
                
        $scope.pagination.last = function(){
                $scope.pagination.currentPage = $scope.pagination.totalPage;
                $scope.pagination.refresh();   
        };
                
        $scope.pagination.previous = function(){
            if($scope.pagination.currentPage >  1){
                $scope.pagination.currentPage--;
                $scope.pagination.refresh();
            }
        }; 
                
        $scope.pagination.refresh = function(){ 
                                    
            _countImage(function(callback){
               
               $scope.pagination.totalRegister = callback;  
			   
               $scope.pagination.totalPage = _totalPage();  
    
               $scope.pagination.totalPage = _totalPage();
            
               var init = 0;                
               if($scope.pagination.currentPage > 1){
                    init = 
            			($scope.pagination.currentPage * $scope.pagination.totalPerPage) 
            			- 
            			($scope.pagination.totalPerPage); 
                       
               }
                   
               var end = $scope.pagination.totalPerPage;
               if($scope.pagination.currentPage <= $scope.pagination.totalPage && $scope.pagination.page !==  1){
                    end = init + ($scope.pagination.totalPerPage -1);  
               }
               
               $scope.pagination.dataInit = (init + 1);
               $scope.pagination.dataEnd = (end > $scope.pagination.totalRegister) ? $scope.pagination.totalRegister :  (end + 1);
               
               _listUpdate(init);
            });    
        };
                
        var _listUpdate = function(init){                  
            var max = $scope.pagination.totalPerPage;
            var paramId = $scope.folder;
            
            if(typeof paramId !== 'undefined' || paramId != 0 || paramId != null){                    
                    ImageService.findImageWithLimit(init,max,paramId).success(function(response){
                         $scope.listImage = response;
                    }); 
            }
        };
    			
       var _totalPage = function(){
    		return Math.ceil(
    			   ($scope.pagination.totalRegister / $scope.pagination.totalPerPage)
    	   	);
		};
                    
       var _countImage = function(callback){
              var paramId = $scope.folder;
              
              if(typeof paramId !== 'undefined' || paramId != 0 || paramId != null){
                  ImageService.countByFolder(paramId).success(function(response){
                      if(typeof callback !== 'undefined'){
                                callback(response);
                      }
                  }); 
              }  
        };  
                    
        var _listFolder = function(){
            ParameterService.listByConstant('PARAMETER_TYPE_FOLDER').success(function(response){                            
                $scope.listFolder = response;
            });
        };
            
        $scope.selected  = {
            item : $scope.image
        };
	};
	
	angular
		.module('app')
		.controller('ModalImageController',
											[
												'$scope', 
												'$mdDialog',
                                                '$log',
                                                'ImageService',
                                                'ParameterService',												
												ModalImageController
											]);
})();