import template from './dsLoginCard.html';
import controller from './dsLoginCard.controller';
import './dsLoginCard.styl';

let dsLoginCardComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default dsLoginCardComponent;
