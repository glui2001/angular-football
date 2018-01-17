/**
* Contains run blocks that needs to run before all other code and has the role of bootstrapping the application
*/
(function (angular) {
    'use strict';

    angular.module('football').run(RunFunc);

    function RunFunc($state) {
        // $state.go('home');
    }
})(angular);
