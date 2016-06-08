import template from './dsNavItem.html';
import controller from './dsNavItem.controller';
import './dsNavItem.styl';

let dsNavItemComponent = {
  restrict: 'E',
  bindings: {
    dsNavHref: '@',
    dsNavText: '@',
    dsMenuItems: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default dsNavItemComponent;
