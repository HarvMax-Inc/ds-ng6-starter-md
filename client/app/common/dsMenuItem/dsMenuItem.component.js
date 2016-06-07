import template from './dsMenuItem.html';
import controller from './dsMenuItem.controller';
import './dsMenuItem.styl';

let dsMenuItemComponent = {
  restrict: 'E',
  bindings: {
    dsButtonText: '@',
    dsButtonUrl: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default dsMenuItemComponent;
