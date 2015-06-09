'use strict';

/* Routes are now defined in the states.js file on components */

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('Home', {
            url: '/',
            controller: 'MiddleCtrl as home',
            template: require('../views/middle.html'),
            title: 'Home'
        });

    $urlRouterProvider.otherwise('/');

}

module.exports = Routes;