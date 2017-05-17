(function() {

    angular.module("app").controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$window', '$scope', 'UserService'];


    function LoginCtrl($window, $scope, UserService) {
        var error = false;
        var CLIENT_ID = '459109124273-mcv2ngm5ibuq1itrp8abt723tq49j6cp.apps.googleusercontent.com';
        var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
        var SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

        load();

        login = function() {
            if ($scope.username == $scope.password) {
                $window.location.assign('#/dashboard');
            } else {
                error = true;
            }
        }

        getResp = function() {
            console.log(UserService.getData());

        }

        function load() {
            loadFacebookDetails();
            loadGoogleDetails();
        }

        /*Facebook login*/
        function loadFacebookDetails() {
            FB.init({
                appId: '1948394118715925', // FB App ID
                cookie: true, // enable cookies to allow the server to access the session
                xfbml: true, // parse social plugins on this page
                version: 'v2.8' // use graph api version 2.8
            });
        }

        fbLogin = function() {
            FB.login(function(response) {
                if (response.authResponse) {
                    // Get and display the user profile data
                    getFbUserData();
                } else {
                    document.getElementById('status').innerHTML = 'User cancelled login or did not fully authorize.';
                }
            }, { scope: 'email' });
        }

        function getFbUserData() {
            FB.api('/me', { locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture' },
                function(response) {

                    window.localStorage['username'] = response.first_name;
                    window.localStorage['imgUrl'] = response.picture.data.url;
                    $window.location.assign('#/dashboard');
                });
        }

        /*Google login*/

        function loadGoogleDetails() {
            gapi.load('client:auth2', initClient);
        }

        function initClient() {
            gapi.client.init({
                discoveryDocs: DISCOVERY_DOCS,
                clientId: CLIENT_ID,
                scope: SCOPES
            }).then(function() {
                // Listen for sign-in state changes.
                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

                // Handle the initial sign-in state.
                //  updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

            });
        }

        function updateSigninStatus(isLogin) {
            
        }

        handleAuthClick = function() {
            gapi.auth2.getAuthInstance().signIn();
            listLabels();
        }


        function handleSignoutClick() {
            gapi.auth2.getAuthInstance().signOut();
        }

        function listLabels() {
            gapi.client.load('plus', 'v1', function() {
                var request = gapi.client.plus.people.get({
                    'userId': 'me'
                });

                request.execute(function(resp) {

                    window.localStorage['username'] = resp.displayName;
                    window.localStorage['imgUrl'] = resp.image.url;
                    $window.location.assign('#/dashboard');
                });
            });
        }

    }

})();
