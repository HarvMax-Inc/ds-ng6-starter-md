import angular from 'angular';
import dsMenuItem from './dsMenuItem/dsMenuItem';
import dsMenu from './dsMenu/dsMenu';
import dsNavItem from './dsNavItem/dsNavItem';
import dsNavbar from './dsNavbar/dsNavbar';

let commonModule = angular.module('app.common', [
  dsNavbar.name,
  dsMenuItem.name,
  dsMenu.name,
  dsNavItem.name
]);

commonModule.config(($mdThemingProvider) => {
  $mdThemingProvider.theme('default')
    .primaryPalette('purple')
    .accentPalette('deep-purple')
    .warnPalette('purple');
});

export default commonModule;
