import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dsButtonComponent from './dsButton.component';

let dsButtonModule = angular.module('dsButton', [
  uiRouter
])

.component('dsButton', dsButtonComponent);

export default dsButtonModule;
