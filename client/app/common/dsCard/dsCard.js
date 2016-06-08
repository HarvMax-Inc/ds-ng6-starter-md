import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dsCardComponent from './dsCard.component';

let dsCardModule = angular.module('dsCard', [
  uiRouter
])

.component('dsCard', dsCardComponent);

export default dsCardModule;
