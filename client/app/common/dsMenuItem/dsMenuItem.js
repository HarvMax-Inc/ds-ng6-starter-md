import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dsMenuItemComponent from './dsMenuItem.component';

let dsMenuItemModule = angular.module('dsMenuItem', [
  uiRouter
])

.component('dsMenuItem', dsMenuItemComponent);

export default dsMenuItemModule;
