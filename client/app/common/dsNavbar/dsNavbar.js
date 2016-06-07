import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dsNavbarComponent from './dsNavbar.component';

let dsNavbarModule = angular.module('dsNavbar', [
  uiRouter
])

.component('dsNavbar', dsNavbarComponent);

export default dsNavbarModule;
