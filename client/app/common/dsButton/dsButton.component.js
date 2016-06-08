import template from './dsButton.html';
import controller from './dsButton.controller';
import './dsButton.styl';

let dsButtonComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default dsButtonComponent;
