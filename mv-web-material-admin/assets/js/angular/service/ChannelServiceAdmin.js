(function(){
	
	function ChannelServiceAdmin($http,config){
		var _insert = function(obj){
           var url = config.appAPI + 'channel';
           
           return $http.post(url,obj);
       };
       
       var _delete = function(id){
            var url = config.appAPI + 'channel/' + id;
            
            return $http.delete(url);           
       };
       
       var _list = function(){
           var url = config.appAPI + 'channel';
           
           return $http.get(url);
       };    
       
       return {
           insert : function(obj){
               return _insert(obj);
           },
           delete : function(id){
             return _delete(id);  
           },
           list : function(){
               return _list();
           }
       };
	}
	
	angular
		.module('app')
		.factory('ChannelServiceAdmin',['$http','config',ChannelServiceAdmin]);
})();