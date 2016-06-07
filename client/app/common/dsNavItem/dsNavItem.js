import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dsNavItemComponent from './dsNavItem.component';

let dsNavItemModule = angular.module('dsNavItem', [
  uiRouter
])

.component('dsNavItem', dsNavItemComponent);

export default dsNavItemModule;
