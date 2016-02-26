(function(){
	
    function OneDriveController($scope,OneDriveService){				
	var token = function(){
	        /* get list data of service */
                OneDriveService.getToken().then(function(response){                                  	
		      $scope.token = response;
	        });
	};
        
        var client = function(){
	        /* get list data of service */
	        OneDriveService.getClient().then(function(response){	           	
		      $scope.client = response;
	        });
	};                
        
        $scope.readFile = function(file){            
	        /* get list data of service */
	        OneDriveService.readFile(file,token).then(function(response){	           	
		      console.log(response);
	        });
	};
        
        $scope.user = function(){   
              token();
              
              if(typeof $scope.token !== 'undefined'){                
                      var tokena = $scope.token;
                                             
        	        /* get list data of service */
                        OneDriveService.getUser(tokena).then(function(response){	                                	
        	               
                        });
              }else{
                      console.log('asdas');
              }
	};
    }
    
    /*inject functions with controller on app */
    angular
        .module('app')
        .controller('OneDriveController', ['$scope','OneDriveService', OneDriveController]);
})();