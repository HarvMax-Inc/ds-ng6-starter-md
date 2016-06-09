import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dsSwitcherCardComponent from './dsSwitcherCard.component';

let dsSwitcherCardModule = angular.module('dsSwitcherCard', [
  uiRouter
])

.component('dsSwitcherCard', dsSwitcherCardComponent);

export default dsSwitcherCardModule;
