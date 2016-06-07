import template from './dsMenu.html';
import controller from './dsMenu.controller';
import './dsMenu.styl';

let dsMenuComponent = {
  restrict: 'E',
  bindings: {
    dsMenuItems: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default dsMenuComponent;
