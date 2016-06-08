import DsMenuTriggerModule from './dsMenuTrigger'
import DsMenuTriggerController from './dsMenuTrigger.controller';
import DsMenuTriggerComponent from './dsMenuTrigger.component';
import DsMenuTriggerTemplate from './dsMenuTrigger.html';

describe('DsMenuTrigger', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DsMenuTriggerModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DsMenuTriggerController();
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
      expect(DsMenuTriggerTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DsMenuTriggerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DsMenuTriggerTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DsMenuTriggerController);
      });
  });
});
