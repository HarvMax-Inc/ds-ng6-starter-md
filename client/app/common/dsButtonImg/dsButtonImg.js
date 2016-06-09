import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dsButtonImgComponent from './dsButtonImg.component';

let dsButtonImgModule = angular.module('dsButtonImg', [
  uiRouter
])

.component('dsButtonImg', dsButtonImgComponent);

export default dsButtonImgModule;
