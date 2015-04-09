(function() {
   'use strict';

    angular
        .module('app')
        .config(setRoutes);

    setRoutes.$inject = ['$stateProvider'];

    /* @ngInject */
    function setRoutes($stateProvider) {

        $stateProvider
            .state('state1', {
                url: "/feature1",
                templateUrl: "build/views/feature1/feature1.html"
            })
            .state('state1.list', {
                url: "/list",
                templateUrl: "build/views/feature1/feature1.list.html",
                controller: "Feature1",
                controllerAs: "vm"
            });
    }
})();