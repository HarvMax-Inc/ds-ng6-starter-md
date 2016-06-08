import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dsSwitcherComponent from './dsSwitcher.component';

let dsSwitcherModule = angular.module('dsSwitcher', [
  uiRouter
])

.component('dsSwitcher', dsSwitcherComponent);

export default dsSwitcherModule;
