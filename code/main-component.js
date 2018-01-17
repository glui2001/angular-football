(function (angular) {
    'use strict';

    angular.module('football').component('mainContainer', {
        templateUrl: 'code/main-component.html',
        controller: MainContainerController,
        controllerAs: 'vm'

    });

    function MainContainerController($http) {
        var vm = this;
        vm.competitions = [];

        vm.$onInit = function () {

        };

        vm.handleSubmit = function() {
            var wsUrl = 'http://api.football-data.org/v1/competitions/';

            if (vm.year) {
                wsUrl += '?season=' + vm.year;
            }

            $http.get(wsUrl, { headers: {'X-Auth-Token': 'e128efad79b74f128fa069650be90e75'}})
                .then(function(response) {
                    console.log(JSON.stringify(response));
                    vm.competitions = [];
                    for (var i = 0; i < response.data.length; i++) {
                        vm.competitions.push({
                            id: response.data[i].id,
                            caption: response.data[i].caption
                        })
                    }
                });
        };

        vm.handleKeyPress = function(evt) {
            if (evt.keyCode === 13)
                vm.handleSubmit();
        };

    }
})(angular);
