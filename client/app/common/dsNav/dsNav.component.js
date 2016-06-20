import template from './dsNav.html';
import controller from './dsNav.controller';
import './dsNav.styl';

let dsNavComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default dsNavComponent;
