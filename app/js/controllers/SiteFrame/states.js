'use strict';

module.exports = /* @ngInject */ function States( $stateProvider, $urlRouterProvider, $locationProvider ) {

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise( '/' );

     /* $locationProvider
    .html5Mode(false)
    .hashPrefix('!'); */

    $stateProvider
        .state( 'QB', {
           template: require('./views/SiteFrame.html'),
            controller: require( './SiteFrameController' ),
            controllerAs: 'siteframe'
        } )
        .state( 'QB.Quiz', {
            views: {
                'app': {
                    template: '<div id="content-container"><div class="view-section" ui-view=""></div></div>'
                },
                'footer': {
                    template: require('../Footer/views/Footer.html'),
                    controller: require( '../Footer/FooterController')
                },
                'header': {
                    template: require('../Header/views/Header.html'),
                    controller: require('../Header/HeaderController')
                }
            }

        } );

};
