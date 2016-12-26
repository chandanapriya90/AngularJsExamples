(function () {
    'use strict';
    app.controller('login',login);
    login.$inject=['$scope'];
    function login($scope) {
        $scope.login_details=function (data) {
            console.log(data);
        };
    };
})();