(function () {    
    
    function VideoControllerAdmin($scope, $window,$location, $mdDialog,$mdToast, $log, $filter,config,VideoService,VideoServiceAdmin, CourseService,ToastService) {
        var vm = this;        
        
        vm.video = {
            object: (function(){
                var video = {};
                video.id = null;
                video.name = null;
                video.title = null;
                video.description = null;                
                video.url = null;
                video.disable = false;            
                video.friendUrl = null;
                video.crsid = null;
                video.imgid = null;   
                
                return video;
            })(),
            insert: function(video){
                VideoServiceAdmin.insert(video).success(function (response) {
                    ToastService.show('Registro inserido com sucesso!');
                    vm.video.back();
                });
            },
            update: function(video){
                VideoServiceAdmin.update(video).success(function (response) {
                    $scope.showToast('Registro atualizado com sucesso!');
                    vm.video.back();
                });
            },
            save: function(video){                
                video.url = $filter('youtubeembbed')(video.url); 
              
                if(!video.id){
                    vm.video.insert(video);
                }else{
                    vm.video.update(video);
                }
            },
            findAll: function(){
                VideoService.findAll().success(function (response) {
                    $scope.videos = response;                
                });
            },
            disable: function(video){
               vm.video.update(video); 
               this.message = config.appMessage.register.enabled(video.name,(!video.disable));                   
               ToastService.show(this.message); 
            },
            error: function(){
                $location.path('/500');
            },
            back: function(){
                $location.path('/admin/video');
            },
            course : {
                findAll: function(){
                    CourseService.findAll().success(function(response){
                        $scope.courses =  response;
                    });
                }
            }                       
        };
        
        $scope.video    = vm.video.object;
        $scope.insert   = vm.video.insert;
        $scope.update   = vm.video.update;
        $scope.save     = vm.video.save;
        $scope.disable  = vm.video.disable;
        $scope.findAll  = vm.video.findAll;
        $scope.error    = vm.video.error;
        $scope.back     = vm.video.back;
        $scope.course   = vm.video.course;
        
        /* init controller */
        $scope.initRegister = function(){
            $scope.course.findAll();
        };  
                
        //modal
        $scope.openDialogImage = function(ev) {
            $mdDialog.show({
              controller: 'ModalImageController',
              templateUrl: 'component/modalImage.html',
              parent: angular.element(document.body),
              targetEvent: ev,
            })
            .then(function(response) {
                $scope.video.image = response.image;  
                $scope.video.imgid = response.image.id;            
            });
          };
    }    

    /*inject functions with controller on app */
    angular
            .module('app')         
            .controller('VideoControllerAdmin', [
                                                    '$scope', 
                                                    '$window',
                                                    '$location',
                                                    '$mdDialog',
                                                    '$mdToast',
                                                    '$log', 
                                                    '$filter',
                                                    'config',
                                                    'VideoService',
                                                    'VideoServiceAdmin', 
                                                    'CourseService',                     
                                                    'ToastService',
                                                    VideoControllerAdmin
                                                ]);
})();
