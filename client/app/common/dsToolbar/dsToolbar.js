import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dsToolbarComponent from './dsToolbar.component';

let dsToolbarModule = angular.module('dsToolbar', [
  uiRouter
])

.component('dsToolbar', dsToolbarComponent);

export default dsToolbarModule;
