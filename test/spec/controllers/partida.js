'use strict';

describe('Controller: PartidaCtrl', function () {

  // load the controller's module
  beforeEach(module('placarHandebolOnlineApp'));

  var PartidaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PartidaCtrl = $controller('PartidaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PartidaCtrl.awesomeThings.length).toBe(3);
  });
});
