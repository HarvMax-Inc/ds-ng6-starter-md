import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dsMenuTriggerComponent from './dsMenuTrigger.component';

let dsMenuTriggerModule = angular.module('dsMenuTrigger', [
  uiRouter
])

.component('dsMenuTrigger', dsMenuTriggerComponent);

export default dsMenuTriggerModule;
