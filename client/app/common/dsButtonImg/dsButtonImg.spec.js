import DsButtonImgModule from './dsButtonImg'
import DsButtonImgController from './dsButtonImg.controller';
import DsButtonImgComponent from './dsButtonImg.component';
import DsButtonImgTemplate from './dsButtonImg.html';

describe('DsButtonImg', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DsButtonImgModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DsButtonImgController();
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
      expect(DsButtonImgTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DsButtonImgComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DsButtonImgTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DsButtonImgController);
      });
  });
});
