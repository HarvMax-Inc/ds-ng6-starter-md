import template from './dsCard.html';
import controller from './dsCard.controller';
import './dsCard.styl';

let dsCardComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default dsCardComponent;
