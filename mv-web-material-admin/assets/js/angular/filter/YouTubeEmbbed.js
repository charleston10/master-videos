(function(){
	'use strict';
	
	function youtubeembbed(){
		return function(url) {
		    var id = url.replace(/^(.*)v=([^&]+)(.*)/,'$2');
            return 'https://www.youtube.com/embed/' + id;
		};		
	}
	
	angular
		.module('app')
		.filter('youtubeembbed', youtubeembbed);	
})();