(function (angular) {
    'use strict';

    angular.module('football').config(angConfig);

    function angConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    }

})(angular);