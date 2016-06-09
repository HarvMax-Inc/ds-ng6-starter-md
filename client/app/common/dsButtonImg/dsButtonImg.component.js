import template from './dsButtonImg.html';
import controller from './dsButtonImg.controller';
import './dsButtonImg.styl';

let dsButtonImgComponent = {
  restrict: 'E',
  bindings: {
    dsButtonSrc: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default dsButtonImgComponent;
