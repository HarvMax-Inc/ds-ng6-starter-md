import template from './dsSwitcher.html';
import controller from './dsSwitcher.controller';
import './dsSwitcher.styl';

let dsSwitcherComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default dsSwitcherComponent;
