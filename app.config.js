(function (angular) {
    'use strict';

    angular.module('football').config(angConfig);

    function angConfig($urlRouterProvider, $locationProvider, $qProvider) {
        // $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('/home');
        // $qProvider.errorOnUnhandledRejections(false);
    }

})(angular);