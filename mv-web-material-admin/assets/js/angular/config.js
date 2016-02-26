(function(angular,undefined){
    'use strict';
    
    angular
        .module('app')    
        .config(Config)
        .run(Run);
        
    Config.$inject  = ['$routeProvider','$locationProvider','$provide','$mdThemingProvider'];
    Run.$inject     = ['$rootScope','$route','config'];
    
    function Config($routeProvider,$locationProvider,$provide,$mdThemingProvider){
                
        /* config friend url */        
        $locationProvider
            .html5Mode({enabled:true, requireBase: true})
            .hashPrefix('!'); 
                               
        $routeProvider            
            //image
            .when('/admin/image/upload', {
                templateUrl:'view/admin/image/upload.html',
                controller: 'UploadController',
                title: 'Upload de Imagens'
            }) 
            
            .when('/admin/image', {
                templateUrl:'view/admin/image/list.html',
                controller: 'ModalImageController',
                title: 'Imagens'
            }) 
           
           //video
            .when('/admin/video', {
                templateUrl:'view/admin/video/list.html',
                controller: 'VideoControllerAdmin',
                title: 'Listar Vídeos'
            }) 
            
            .when('/admin/video/register', {
                templateUrl:'view/admin/video/content.html',
                controller: 'VideoControllerAdmin',
                title: 'Registrar Vídeo'
            })  
            
            //channel
            .when('/admin/channel', {
                templateUrl:'view/admin/channel/list.html', 
                controller: 'ChannelControllerAdmin',
                title: 'Listar Cursos'
            })
            
            .when('/admin/channel/register', {
                templateUrl:'view/admin/channel/content.html', 
                controller: 'ChannelControllerAdmin',
                title: 'Registrar Curso'
            })            
            
            //course
            .when('/admin/course', {
                templateUrl:'view/admin/course/list.html', 
                controller: 'CourseControllerAdmin',
                title: 'Listar Cursos'            
            })
            
            .when('/admin/course/register', {
                templateUrl:'view/admin/course/content.html', 
                controller: 'CourseControllerAdmin',
                title: 'Registrar Curso'
            })
            
            //parameter
            .when('/admin/parameter', {
                templateUrl:'view/admin/parameter/list.html',
                controller: 'ParameterControllerAdmin',
                title: 'Listar Parâmetros'
            }) 
            
            .when('/admin/parameter/register', {
                templateUrl:'view/admin/parameter/content.html',
                controller: 'ParameterControllerAdmin',
                title: 'Registrar Parâmetro'
            })
            
            //dashboard
            .when('/', {
                title: 'Excript Admin'
            })         

            //Outerror
            .when('/404',{ 
                templateUrl:'view/404.html', 
                title: '400'
            })
            
            .when('/500', {
                templateUrl:'view/500.html', 
                title: '500'
            })
    
            //default to page not finded
            .otherwise({redirectTo:'/404'});
            
            //config theme
             /*
            var customBlueMap = $mdThemingProvider.extendPalette('blue', {
                'contrastDefaultColor': 'light',
                'contrastDarkColors': ['50'],
                '50': 'ffffff'
            });
            
            $mdThemingProvider.definePalette('customBlue', customBlueMap);
            $mdThemingProvider.theme('default','docs-dark')
                .primaryPalette('customBlue', {
                  'default': '500',
                  'hue-1': '50'
                })
                .accentPalette('pink');
                */
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
                  
    }
    
    
    function Run($rootScope,$route,config){
        
        var title = config.appTitle + ' | ';
        
        /* if the change was success, then change title of page */
        $rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) { //listen change
            if (oldVal !== newVal) {
                if(typeof $route.current.title !== 'undefined'){
                    document.title = title + $route.current.title;
                }else{
                    document.title = title;
                }
            }
        });
    }    
})(angular);