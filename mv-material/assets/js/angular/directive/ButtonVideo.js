(function(){
    'use strict';

    function exButtonVideo($compile){        
        return{
            restrict: "E",
            scope: { },            
            template: "<button class='btn btn-default'>Adicionar Vídeo</button>",
            link:
                function(scope,element,attrs){
                   
                    element.on('click',function(){
                        
                        var template = '<div class="bs-docs-example"> <div class="label-e ng-binding"> Novo Vídeo </div> <div class="input-prepend"> <span class="add-on" style="width: 70px">Nome</span> <input name="videoName[]" placeholder="Nome" type="text" required="true"></input> </div> <div class="input-prepend"> <span class="add-on" style="width: 70px">Título</span> <input name="videoTitle[]" placeholder="Título" type="text" required="true"></input> </div> <div class="input-prepend"> <span class="add-on" style="width: 70px">YouTube</span> <input name="videoUrl[]" placeholder="URL" type="text" required="true"></input> </div> <div class="input-prepend"> <span class="add-on" style="width: 70px">Imagem</span> <input name="videoImg[]" placeholder="Url Imagem" type="text" required="true"></input> </div> <button class="btn btn-info" modal="modalOpen()">Imagens</button> <br><br> <span>Descrição</span><br> <textarea name="videoDescription[]" rows="6" cols="60"></textarea> <br> <br> <exlinkvideoremove></exlinkvideoremove> </div>'; 
                        
                        angular.element(document.getElementById('form-video')) 
                        .append(
                            $compile(template)(scope)
                        );
                        
                        
                         
                    });
                }
        };
    }

    angular
        .module('app')
        .directive("exbuttonvideo",     exButtonVideo);
})();