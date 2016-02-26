(function(angular,undefined){
    
    angular
        .module('app')
        .service('ToastService',ToastService);
        
    ToastService.$inject = ['$mdToast'];
    
    function ToastService($mdToast){
        var vm = this;
        
        vm.toastPosition = {
            bottom: false,
            top: true,
            left: false,
            right: true
          };
          
          vm.getToastPosition = function() {
            return Object.keys(vm.toastPosition)
              .filter(function(pos) { return vm.toastPosition[pos]; })
              .join(' ');
          };
          
          vm.show = function(message) {
            $mdToast.show(
              $mdToast.simple()
                .content(message)
                .position(vm.getToastPosition())
                .hideDelay(3000)
            );
          };
          
          return {
              show: vm.show
          }
    }    
    
})(angular);