'use strict';

module.exports = /* @ngInject */ function ( $stateProvider ) {
    $stateProvider
        .state( 'QB.Quiz.Promotions', {
            url: '/promotions',
            template: require('./views/Promotions.html')
        } );
};
