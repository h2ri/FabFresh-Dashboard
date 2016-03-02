'use strict';

var routerApp = angular.module('routerApp', [
    'ui.router',
    'ngAnimate',
    'ui.bootstrap',
    'ngCookies',
    ]);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('login', {
            url: '/#',
            templateUrl: '../views/login.html',
            controller: 'loginCTRL',
        })
        .state('customer_care', {
            url: '/customer-care',
            templateUrl: '../views/customer_care.html',
            controller: 'customer_careCTRL',
        })
        .state('finance', {
            url: '/finance',
            templateUrl: '../views/finance.html',
            controller: 'financeCTRL',
        })
        .state('logout', {
            url: '/#',
            //template: '<h1>BYE<h1>',
            controller: 'logoutCTRL',
        })
});
