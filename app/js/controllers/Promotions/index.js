'use strict';

var angular = require('angular');
console.log('in promotions index');
module.exports = angular
    .module('QB.Quiz.Promotions',[

        require('angular-ui-router')

    ])
    .run(['$rootScope', '$state', '$stateParams',
        function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }])
    .config(require('./states'));