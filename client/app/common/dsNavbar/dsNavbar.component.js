import template from './dsNavbar.html';
import controller from './dsNavbar.controller';
import './dsNavbar.styl';

let dsNavbarComponent = {
  restrict: 'E',
  bindings: {
    dsNavbarItems: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default dsNavbarComponent;
