(function(){
    'use strict';
    
    function fileModel($parse){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;
                
                element.bind('change', function(){
                    scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }
    
    function excriptFile(){
        return {
            replace: false,
            transclude: true,
            restrict: 'E',
            scope: {
                index: '@'                                                            
            },
            template: '<input type="file" name="file[{{index}}]">',
            link: 
                function(scope,element,attrs){ 
                     
                    var formatSizeUnits = function(bytes){
                      if      (bytes>=1073741824) {bytes=(bytes/1073741824).toFixed(2)+' GB';}
                      else if (bytes>=1048576)    {bytes=(bytes/1048576).toFixed(2)+' MB';}
                      else if (bytes>=1024)       {bytes=(bytes/1024).toFixed(2)+' KB';}
                      else if (bytes>1)           {bytes=bytes+' bytes';}
                      else if (bytes==1)          {bytes=bytes+' byte';}
                      else                        {bytes='0 byte';}
                      return bytes;
                    };
                                      
                    element.on('change',function(){ 
                        /*create DOM element with proprierts of object file
                        this.object = element[0].files[0];
                        this.size = this.object.size;
                        this.sizeFormatted = formatSizeUnits(this.size); */
                        
                        /*DOM
                        this.DOM = '<div> Tamanho: ' + this.sizeFormatted +  '</div>';
                        
                        element.after(this.DOM);  */
                        
                        /*call function of controller
                        var returnFunc = scope.func(
                            {
                                'obj' : element[0].files[0]
                            }
                        ); */           
                    });
                }
        };
    }

    angular
        .module('app')
        .directive("excriptFile",excriptFile);
})();
