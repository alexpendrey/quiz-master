'use strict';

var angular = require('angular');
console.log('in homepage index');
module.exports = angular
    .module('QB.Quiz.HomePage',[
        require('angular-ui-router')
    ])
    .run(['$rootScope', '$state', '$stateParams',
        function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }])
    .controller('AlertDemoCtrl', function($scope, $http) {

        $scope.answer = false;
        $scope.questionText = '';
        $scope.answerText = '';
        $scope.showAnswer = function() {
            $scope.answer = true;
            console.log('answer clicked');
        };
        /* TODO: Make this into a service */
        $scope.showNextQuestion = function() {
            /* TODO: Extract API URL into a config file */
            $http.get("http://quizapi.4s4.co.uk/questions/random").success(function(data, status) {
                console.log('done ' + data);
                $scope.answer = false;
                $scope.questionText = data.question;
                $scope.answerText = data.answer;
            }).error(function(data, status) {
                console.log('err ' + status);
            });
        };

        $scope.showNextQuestion();
    })
    .config(require('./states'));