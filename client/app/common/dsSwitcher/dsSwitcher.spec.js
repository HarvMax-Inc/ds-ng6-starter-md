import DsSwitcherModule from './dsSwitcher'
import DsSwitcherController from './dsSwitcher.controller';
import DsSwitcherComponent from './dsSwitcher.component';
import DsSwitcherTemplate from './dsSwitcher.html';

describe('DsSwitcher', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DsSwitcherModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DsSwitcherController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(DsSwitcherTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DsSwitcherComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DsSwitcherTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DsSwitcherController);
      });
  });
});
