'use strict';

var angular = require('angular');

module.exports = angular
    .module('QB.Quiz.SiteFrame',[
        require('angular-ui-router'),
        require('../HomePage').name,
        require('../Promotions').name
    ])
    .run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }])
    .config(require('./states'));

