'use strict';

/**
 * @ngdoc service
 * @name placarHandebolOnlineApp.configuracao
 * @description
 * # configuracao
 * Service in the placarHandebolOnlineApp.
 */
angular.module('placarHandebolOnlineApp')
  .service('configuracao', function () {

      let configuracao = {
        periodosNormais : 2,
        periodosExtras : 2,
        tempoPeriodoNomralMin : 15,
        tempoPeriodoExtraMin : 5,
        temposTecnicosPorPeriodo : 1
      };

      return angular.copy(configuracao);
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
