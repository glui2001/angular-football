(function (angular) {
    'use strict';

    angular.module('football').component('teamContainer', {
        templateUrl: 'code/team-component.html',
        controller: TeamContainerController,
        controllerAs: 'vm'

    });

    function TeamContainerController($http, $stateParams) {
        var vm = this;

        vm.id = $stateParams.id;
        vm.teams = [];
        
        var config = {headers:  {
            'X-Auth-Token': 'e128efad79b74f128fa069650be90e75'
        }
        };



        var url = 'http://api.football-data.org/v1/competitions/' + vm.id + '/teams';

        $http.get(url, config)
            .then(function(response) {
                console.log("testing the response", response.data);
                vm.teams = [];
                for (var i=0; response && response.data && response.data.teams && i < response.data.teams.length; i++) {
                    vm.teams.push({
                        name: response.data.teams[i].name
                    });
                }

            });


    }
})(angular);
