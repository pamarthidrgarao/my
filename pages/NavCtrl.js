(function() {
    angular.module("app").controller('NavCtrl', NavCtrl);

    NavCtrl.$inject = ['$scope', '$log', '$window'];

    function NavCtrl($scope, $log, $window) {
        var vm = this;
        $scope.name = "Guest";

        $scope.img = "img/avatar.png";
        
        loadProfile();

        function loadProfile() {
            var profile = window.localStorage['username'];
            var url = window.localStorage['imgUrl'];
            if (profile) {
                $scope.name = profile;
            }
            if (url) {
                $scope.img = url;
            }


        }
        logOut = function() {

            window.localStorage.clear();
            $window.location.assign('#/login');
        }

        myProfile = function() {

            $window.location.assign('#/profile');
        }
    }
})();
