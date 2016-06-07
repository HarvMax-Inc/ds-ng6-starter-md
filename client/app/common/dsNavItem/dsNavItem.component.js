import template from './dsNavItem.html';
import controller from './dsNavItem.controller';
import './dsNavItem.styl';

let dsNavItemComponent = {
  restrict: 'E',
  bindings: {
    dsNavClick: '@',
    dsNavHref: '@',
    dsNavText: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default dsNavItemComponent;
