(function() {

    angular.module("app").directive('search', ['UserService', function(UserService) {
        return {
            template: "<span></span>",
            link: function(scope, element, attr) {
                element.css({
                    position: 'relative',
                    border: '2px solid red',
                    backgroundColor: 'lightgrey',
                    cursor: 'pointer'
                });

                alert();

                element.append("<div ng-controller='UserCtrl as uc'><button onclick='uc.click()'>" + UserService.get() + "</button></div>");
            }
        };
    }]).controller('UserCtrl', function($scope) {
        $scope.click = function() {
            alert("Clicked");
        }

    });

})();
