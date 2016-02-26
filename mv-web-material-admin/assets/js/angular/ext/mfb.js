/**
 * updated codebase on: https://github.com/nobitagit/ng-material-floating-button
 *
 **/
+(function(window, angular, undefined){

  var mfb = angular.module('ng-mfb', []);

  mfb.directive('mfbMenu', [function(){
    return {
      restrict: 'EA',
      transclude: true,
      replace: true,
      scope: {
        position: '@',
        effect: '@',
        label: '@',
        resting: '@restingIcon',
        active: '@activeIcon'      
      },
      template: '<ul class="mfb-component--{{position}} mfb-{{effect}}">' +
                ' <li class="mfb-component__wrap">' +
                '  <a href="" data-mfb-label="{{label}}" class="mfb-component__button--main">' +
                '   <i class="mfb-component__main-icon--resting {{resting}}"></i>' +
                '   <i class="mfb-component__main-icon--active {{active}}"></i>' +              
                '  </a>' +
                '  <ul class="mfb-component__list" ng-transclude>' +
                '  </ul>' +
                ' </li>' +        
                '</ul>'              
    };
  }]);


  mfb.directive('mfbButton', [function(){
    return {
      require: '^mfbMenu',
      restrict: 'EA',
      transclude: true,  
      replace: true,
      scope: {
        icon: '@',
        label: '@'
      },
      template: '<li>' + 
                ' <a href="" data-mfb-label="{{label}}" class="mfb-component__button--child">' +
                '   <i class="mfb-component__child-icon {{icon}}"' +
                '   </i>' +
                ' </a>' +
                '</li>'
    };
  }]);

})(window, angular);



var app = angular.module('test-app', ['ng-mfb']);

app.controller('myCtrl', function($scope){

  $scope.positions = ['tl', 'tr', 'br', 'bl'];

  $scope.effects = [{
    name: 'Choose an effect here',
  },{
    value: 'slidein',
    name: 'Slide in + fade'
  },{
    value: 'zoomin',
    name: 'Zoom in'
  },{
    value: 'fountain',
    name: 'Fountain'
  }];

  $scope.buttons = [{
    label: 'a link',
    icon: 'ion-paper-airplane'
  },{
    label: 'a link',
    icon: 'ion-paper-airplane'
  },{
    label: 'a link',
    icon: 'ion-paper-airplane'
  },{
    label: 'a link',
    icon: 'ion-paper-airplane'
  }];

  $scope.chosenEffect = 'zoomin';

});

 var panel = document.getElementById('panel'),
    showcode = document.getElementById('showcode');

    showcode.addEventListener('click', _toggleCode);

    function _toggleCode() {
      panel.classList.toggle('viewCode');
    }