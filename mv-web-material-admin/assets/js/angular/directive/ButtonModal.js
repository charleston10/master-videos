(function(){
    'use strict';

    function exButtonModal(){        
        return{
            restrict: "E",
            scope: {
				fnModal: '&'
			 },            
            template: '<button class="btn btn-info" fn-modal="modalOpen()">Imagens</button>',
            link:
                function($scope,$element,$attrs){
                    $element.on('click',function(){
                        $scope.fnModal();                        
                    });
                }
        };
    }

    angular
        .module('app')
        .directive("exbuttonmodal", exButtonModal);
})();