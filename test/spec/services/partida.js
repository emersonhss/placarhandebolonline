'use strict';

describe('Service: partida', function () {

  // load the service's module
  beforeEach(module('placarHandebolOnlineApp'));

  // instantiate service
  var partida;
  beforeEach(inject(function (_partida_) {
    partida = _partida_;
  }));

  it('should do something', function () {
    expect(!!partida).toBe(true);
  });

});
