(function () {
    'use strict';

    angular
        .module('app.feature2')
        .controller('Feature2', Feature);

    Feature.$inject = [];

    /* @ngInject */
    function Feature() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'Feature';
        vm.things = ["A", "Set", "Of", "Things"];

        activate();

        ////////////////

        function activate() {

        }
    }
})();