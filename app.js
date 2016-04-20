angular.module('app', [])
    .config(['$httpProvider', function($httpProvider){
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.useXDomain = true;

    }])

    .run(function($rootScope, $http){

        var getCurrentUser = function(){
            $http.get('http://api.cuetree.com/user.json')
                .success(function(data){
                    if(data.user && data.user.name) {
                        $rootScope.currentUserStatus = "Current User is " + data.user.name + " <" + data.user.email + ">";
                        $rootScope.user = data.user;
                    }
                    else{
                        $rootScope.currentUserStatus = "Not Authenticated";
                    }
                });
        };

        var login = function(email, password){
            var request = {
                user: {
                    email: email,
                    password: password
                }
            };
            $http.post('http://api.cuetree.com/users/sign_in.json', request)
                .success(function(data){
                    console.log(data);
                    $rootScope.loggedInMessage = "Logged into API Successfully"
                    getCurrentUser();
                });
        };

        login("prathibashanmugam@gmail.com", "vdesign23");

    });