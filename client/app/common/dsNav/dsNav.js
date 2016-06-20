import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dsNavComponent from './dsNav.component';

let dsNavModule = angular.module('dsNav', [
  uiRouter
])

.component('dsNav', dsNavComponent);

export default dsNavModule;
