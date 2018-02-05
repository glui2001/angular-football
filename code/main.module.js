/**
 * Defines the login module configuration and routes
 */

(function (angular) {
    'use strict';

    angular.module('football').config(mainConfig);

    function mainConfig($stateProvider) {

        $stateProvider
            .state({
                name: 'home',
                url : '/home',
                component : 'mainContainer'
            })
            .state({
                name: 'teams',
                url : '/teams/:id',
                component : 'teamContainer'
            });
    }

})(angular);