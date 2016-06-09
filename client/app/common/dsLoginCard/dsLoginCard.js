import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dsLoginCardComponent from './dsLoginCard.component';

let dsLoginCardModule = angular.module('dsLoginCard', [
  uiRouter
])

.component('dsLoginCard', dsLoginCardComponent);

export default dsLoginCardModule;
