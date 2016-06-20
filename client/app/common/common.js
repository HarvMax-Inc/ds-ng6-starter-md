import angular from 'angular';
import dsMenuItem from './dsMenuItem/dsMenuItem';
import dsMenu from './dsMenu/dsMenu';
import dsNavItem from './dsNavItem/dsNavItem';
import dsNavbar from './dsNavbar/dsNavbar';
import dsButton from './dsButton/dsButton';
import dsMenuTrigger from './dsMenuTrigger/dsMenuTrigger';
import dsSwitcher from './dsSwitcher/dsSwitcher';
import dsCard from './dsCard/dsCard';
import dsButtonImg from './dsButtonImg/dsButtonImg';
import dsToolbar from './dsToolbar/dsToolbar';

let commonModule = angular.module('app.common', [
  dsNavbar.name,
  dsMenuItem.name,
  dsMenu.name,
  dsNavItem.name,
  dsButton.name,
  dsMenuTrigger.name,
  dsSwitcher.name,
  dsButtonImg.name,
  dsToolbar.name
]);

commonModule.config(($mdThemingProvider) => {
  $mdThemingProvider.theme('default')
    .primaryPalette('purple')
    .accentPalette('deep-purple')
    .warnPalette('purple');
});

export default commonModule;
