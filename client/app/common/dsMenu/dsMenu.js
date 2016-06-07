import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dsMenuComponent from './dsMenu.component';

let dsMenuModule = angular.module('dsMenu', [
  uiRouter
])

.component('dsMenu', dsMenuComponent);

export default dsMenuModule;
