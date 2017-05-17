(function() {

    angular.module("app").controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', '$log', 'UserService'];

    function DashboardCtrl($scope, $log, UserService) {

        var vm = this;

        vm.home = {};
        vm.home.mainData = [];

        vm.home.fields = [];

        vm.home.headers = [];

        vm.rowCollection = [];

        getMenuData();

        function getMenuData() {
            UserService.getData().then(function(data) {
                vm.home.mainData = data.menuItems;
                vm.home.fields = data.searchFields;
                vm.home.headers = data.tableHeader;
                vm.rowCollection = data.tableData;
            }, function(error) {
                console.log("error")
            });
        }

        $scope.logOut = function() {
            alert("hai")
        }

        function getProfile() {
            alert('hai');
        }
        $scope.totalItems = 20;

        $scope.setPage = function(pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function() {
            alert('Page changed to: ' + $scope.currentPage);
        };

        $scope.maxSize = 5;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;
    }

})();
