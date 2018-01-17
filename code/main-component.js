(function (angular) {
    'use strict';

    angular.module('football').component('mainContainer', {
        templateUrl: 'code/main-component.html',
        controller: MainContainerController,
        controllerAs: 'vm'

    });

    function MainContainerController($http) {
        var vm = this;
    }
})(angular);
