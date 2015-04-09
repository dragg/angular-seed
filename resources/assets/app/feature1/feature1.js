(function () {
    'use strict';

    angular
        .module('app.feature1')
        .controller('Feature1', Feature);

    Feature.$inject = [];

    /* @ngInject */
    function Feature() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'Feature';
        vm.items = ["A", "List", "Of", "Items"];

        activate();

        ////////////////

        function activate() {

        }
    }
})();