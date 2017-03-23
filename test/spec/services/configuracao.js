'use strict';

describe('Service: configuracao', function () {

  // load the service's module
  beforeEach(module('placarHandebolOnlineApp'));

  // instantiate service
  var configuracao;
  beforeEach(inject(function (_configuracao_) {
    configuracao = _configuracao_;
  }));

  it('should do something', function () {
    expect(!!configuracao).toBe(true);
  });

});
