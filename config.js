(function() {

    var app = angular.module("app", ['ui.router','ngSanitize', 'ui.bootstrap']);

    app.config(function($stateProvider, $urlRouterProvider) {
        var login = {
            name: 'login',
            url: '/login',
            templateUrl: 'pages/login/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'vm'
        }

        var dashboard = {
            name: 'dashboard',
            url: '/dashboard',
            templateUrl: 'pages/dashboard/dashboard.html',
            controller: 'DashboardCtrl',
            controllerAs: 'vm'
        }

        var profile = {
            name: 'profile',
            url: '/profile',
            templateUrl: 'pages/profile/profile.html',
            controller: 'ProfileCtrl',
            controllerAs: 'vm'
        }

        $stateProvider.state(login);
        $stateProvider.state(dashboard);
        $stateProvider.state(profile);
        $urlRouterProvider.otherwise('/login');
    });

})();
