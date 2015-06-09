'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('angular-bootstrap');
//require('./controllers/_index');
//require('./services/_index');
var siteFrame   = require('./controllers/SiteFrame');

// create and bootstrap application
angular.element(document).ready(function() {

    var requires = [
        'ui.router',
        'ui.bootstrap',
        /* 'app.controllers', */
        siteFrame.name
    ];

    // mount on window for testing
    window.app = angular.module('app', requires);

    angular.bootstrap(document, ['app']);

});