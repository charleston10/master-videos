(function(){
	'use strict';
	
	function FormatDate(date){
        
        var _dateToUSA = function(date){       
            if(date){
                var month = (date.getMonth() + 1);
                var day = (date.getDate() + 1);
                
                month = (month.length == 1) ? '0' + month :  month;
                day = (day.length == 1) ? '0' + day : day;
                
                date = date.getFullYear() + '-' + month + '-'  + day;                
            }
            
            return date;
        }
            
		return {
            dateToUSA : _dateToUSA
        };
	}
	
	angular
		.module('app')
		.filter('FormatDate', FormatDate);	
})();