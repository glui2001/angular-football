(function (angular) {
    'use strict';

    angular.module('football').component('mainContainer', {
        templateUrl: 'code/main-component.html',
        controller: MainContainerController,
        controllerAs: 'vm'

    });

    function MainContainerController($http) {
        var vm = this;

        vm.seasonQuery = '';
        vm.competitions = [];

        var config = {headers:  {
            'X-Auth-Token': 'e128efad79b74f128fa069650be90e75'
        }
        };
        
        vm.getCompetitionResults = function() {
            var url = 'http://api.football-data.org/v1/competitions';
            if (vm.seasonQuery && vm.seasonQuery.length !== 0) {
                url += '/?season=' + vm.seasonQuery;
            }

            $http.get(url, config)
                .then(function(response) {
                    // Clear competitions array to avoid duplication
                    vm.competitions = [];
                    for (var i=0; response && response.data && i < response.data.length; i++) {
                        vm.competitions.push({
                           caption: response.data[i].caption,
                           id: response.data[i].id
                        });
                    }

                });
        };

    }
})(angular);
