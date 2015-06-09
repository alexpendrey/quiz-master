'use strict';

module.exports = /* @ngInject */ function ( $stateProvider ) {
    $stateProvider
        .state( 'QB.Quiz.HomePage', {
            url: '/',
            template: require('./views/HomePage.html')
        } );
};
