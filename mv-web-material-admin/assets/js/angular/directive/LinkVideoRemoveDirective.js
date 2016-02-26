(function(){
    'use strict';

    function exLinkVideoRemove(){
        return{
            restrict: "E",
            template: '<button class="btn btn-danger">Remover</button>',
            link:
                function($scope,$element,$attrs){
                    $element.on('click',function(){
                        $element.parent().remove();
                    });
                }
        };
    }

    angular
        .module('app')
        .directive("exlinkvideoremove", exLinkVideoRemove);

})();