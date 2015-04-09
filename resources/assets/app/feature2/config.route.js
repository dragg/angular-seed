(function() {
   'use strict';

    angular
        .module('app')
        .config(setRoutes);

    setRoutes.$inject = ['$stateProvider'];

    /* @ngInject */
    function setRoutes($stateProvider) {

        $stateProvider
            .state('state2', {
                url: "/feature2",
                templateUrl: "build/views/feature2/feature2.html"
            })
            .state('state2.list', {
                url: "/list",
                templateUrl: "build/views/feature2/feature2.list.html",
                controller: "Feature2",
                controllerAs: "vm"
            });
    }
})();