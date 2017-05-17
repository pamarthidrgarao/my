(function() {

    angular.module("app").service("UserService", UserService);

    UserService.$inject = ['$http'];

    function UserService($http) {

        return {
            getData: get
        };

        function get() {

            return $http.get('json/userConfig.json').then(getSuccess).catch(getFailed);

        };

        function getSuccess(response) {
            return response.data;
        };


        function getFailed(error) {
            console.log("XHR Failed for getAvengers." + error.data)
        };


    }

})();
