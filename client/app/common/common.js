import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import dsMenuItem from './dsMenuItem/dsMenuItem';
import dsMenu from './dsMenu/dsMenu';
import dsNavItem from './dsNavItem/dsNavItem';
import dsNavbar from './dsNavbar/dsNavbar';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  dsNavbar.name,
  dsMenuItem.name,
  dsMenu.name,
  dsNavItem.name
]);

export default commonModule;
