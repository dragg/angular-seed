(function() {
   'use strict';

    angular
        .module('app.feature')
        .run(appRun);

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'feature/feature.html',
                    controller: 'Feature',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();