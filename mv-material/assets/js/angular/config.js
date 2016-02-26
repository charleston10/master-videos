(function(){
    'use strict';
    
    function configuration($routeProvider,$locationProvider,$provide,$mdThemingProvider){
                
        /* config friend url */        
        $locationProvider
            .html5Mode({enabled:true, requireBase: true})
            .hashPrefix('!'); 
                               
        $routeProvider.
            when('/', {
                templateUrl:'view/main.html',
                controller: 'HomeController',
                title: 'Home'
            })  
            
            //image
            .when('/admin/image/upload', {
                templateUrl:'view/admin/image/upload.html',
                controller: 'UploadController',
                title: 'Upload'
            }) 
            
            .when('/admin/image', {
                templateUrl:'view/admin/image/list.html',
                controller: 'ImageController',
                title: 'Imagens'
            }) 
      
            //about
            .when('/about', {
                templateUrl:'view/about/about.html',                
                title: 'Sobre'
            })          
    
            //contact
            .when('/contact', {
                templateUrl:'view/contact/contact.html',                
                title: 'Contato'
            })  
            
            //article
            .when('/article', {
                templateUrl:'view/article/main.html',
                controller: 'ArticleController',
                title: 'Artigo'
            })
            
            .when('/article/:id', {
                templateUrl:'view/article/content.html',
                controller: 'ArticleController',
                title: 'Artigo'
            })
            
            //videos
            .when('/video/:id', {
                templateUrl:'view/video/content.html',
                controller: 'VideoController',
                title: 'Video'
            })
            
            .when('/admin/video', {
                templateUrl:'view/admin/video/list.html',
                controller: 'VideoControllerAdmin',
                title: 'Registrar'
            }) 
            
            .when('/admin/video/register', {
                templateUrl:'view/admin/video/content.html',
                controller: 'VideoControllerAdmin',
                title: 'Registrar'
            })
    
            //channel
            .when('/channel', {
                templateUrl:'view/video/channel/list.html', 
                controller: 'ChannelController',
                title: 'Canal'
            })

            .when('/channel/:id', { 
                templateUrl:'view/video/channel/content.html', 
                controller: 'ChannelController',
                title: 'Canal'
            })
            
            .when('/admin/channel', {
                templateUrl:'view/admin/channel/list.html', 
                controller: 'ChannelControllerAdmin',
                title: 'Canal'
            })
            
            .when('/admin/channel/register', {
                templateUrl:'view/admin/channel/content.html', 
                controller: 'ChannelControllerAdmin',
                title: 'Canal'
            })
            
            //parameter
            .when('/admin/parameter', {
                templateUrl:'view/admin/parameter/list.html',
                controller: 'ParameterControllerAdmin',
                title: 'Registrar'
            }) 
            
            .when('/admin/parameter/register', {
                templateUrl:'view/admin/parameter/content.html',
                controller: 'ParameterControllerAdmin',
                title: 'Registrar'
            })
            
            //dashboard
            .when('/admin', {
                templateUrl:'view/admin/dashboard/content.html',
               // controller: 'DashboardControllerAdmin',
                title: 'Dashboard Admin'
            })
            
            //Outerror
            .when('/channel/:channel/video/:video',{ 
                templateUrl:'view/video/content.html',
                controller: 'VideoController',
                title: 'Video' 
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
             //config theme
            var customBlueMap = $mdThemingProvider.extendPalette('blue', {
                'contrastDefaultColor': 'light',
                'contrastDarkColors': ['50'],
                '50': 'ffffff'
            });
            
            $mdThemingProvider.definePalette('customBlue', customBlueMap);
            $mdThemingProvider.theme('default')
                .primaryPalette('customBlue', {
                  'default': '500',
                  'hue-1': '50'
                })
                .accentPalette('pink');
                  
    }
    
    
    function configStartup($rootScope,$route,$cookieStore,$mdToast,$log,config){
        
                
        var title = config.appTitle + ' | ';
        
        /* if the change was success, then change title of page */
        $rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) { //listen change
            if (oldVal !== newVal) {
                if(typeof $route.current.title !== 'undefined'){
                    document.title = title + $route.current.title;
                }else{
                    document.title = title + 'Blog';
                }
            }
        });
        
        
        //config to show message welcome
        //toast
        var toastPosition = {
            bottom: false,
            top: true,
            left: false,
            right: true
          };
          
          var getToastPosition = function() {
            return Object.keys(toastPosition)
              .filter(function(pos) { return toastPosition[pos]; })
              .join(' ');
          };
          
          var showToast = function(message) {
            $mdToast.show(
              $mdToast.simple()
                .content(message)
                .position(getToastPosition())
                .hideDelay(3000)
            );
          };
        
        var alreadyIn = $cookieStore.get('alreadyIn');
        
        if(alreadyIn == false || typeof alreadyIn == 'undefined'){
            showToast(config.appMessageWelcome);
            $cookieStore.put('alreadyIn','true');
            
        }        
        
    }

    angular
        .module('app')    
        .config([
                    '$routeProvider',
                    '$locationProvider',
                    '$provide',
                    '$mdThemingProvider', 
                    configuration 
        ])
        .run([
                '$rootScope',
                '$route',
                '$cookieStore',
                '$mdToast',
                '$log',
                'config', 
                configStartup 
            ]);
})();