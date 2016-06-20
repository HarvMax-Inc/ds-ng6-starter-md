import template from './dsToolbar.html';
import controller from './dsToolbar.controller';
import './dsToolbar.styl';

let dsToolbarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default dsToolbarComponent;
