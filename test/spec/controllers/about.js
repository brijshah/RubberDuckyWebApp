'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('rubberDuckyWeb2App'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl as aboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
