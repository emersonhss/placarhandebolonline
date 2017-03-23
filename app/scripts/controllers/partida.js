'use strict';

/**
 * @ngdoc function
 * @name placarHandebolOnlineApp.controller:PartidaCtrl
 * @description
 * # PartidaCtrl
 * Controller of the placarHandebolOnlineApp
 */
angular.module('placarHandebolOnlineApp')
  .controller('PartidaCtrl',  PartidaCtrl);

  PartidaCtrl.$inject = ['$scope', '$timeout', 'configuracao'];

  function PartidaCtrl($scope, $timeout, configuracao) {

    let vm = this;

    // Atributos
    vm.config = configuracao;
    vm.visaoPartida = false;
    vm.partidaIniciada = false;
    vm.periodo = 1;
    vm.cronometro = {
      minutos : 0,
      segundos : 0,
      status : 'zerado'
    };

    vm.equipeA = {
      nome : '',
      gols : undefined
    };

    vm.equipeB = angular.copy(vm.equipeA);


    // Declaração dos métodos
    vm.adicionarNovaPartida = adicionarNovaPartida;
    vm.iniciaPartida = iniciaPartida;
    vm.paraCronometro = paraCronometro;
    vm.incrementaGol = incrementaGol;


    // Construção dos métodos



    function adicionarNovaPartida(){
      vm.visaoPartida = true;
    }

    function gravarPartida(){

    }

    function iniciaPartida(){
      vm.partidaIniciada = true;
      iniciaCronometro();
      iniciaEquipes();
    }

    function iniciaEquipes(){
      vm.equipeA.nome = 'Equipe A';
      vm.equipeB.nome = 'Equipe B';
    }

    function incrementaGol(equipe){
      if(!equipe.gols){
        equipe.gols = [];
      }
      equipe.gols.push({
        gol : equipe.gols.length,
        minuto : vm.cronometro.minutos,
        segundo : vm.cronometro.segundos
      });
    }

    function iniciaCronometro(){
      vm.cronometro.status = 'iniciado';
    }

    function paraCronometro(){
      vm.cronometro.status = 'parado';
    }

    function incrementaCronometro(){
      if(vm.cronometro.status === 'iniciado'){
        if(vm.cronometro.segundos < 59){
          vm.cronometro.segundos += 1;
        } else {
          vm.cronometro.minutos += 1;
          vm.cronometro.segundos = 0;
          if(vm.cronometro.minutos === 15 || vm.cronometro.minutos === 30){
            paraCronometro();
          }
        }
      }
      $timeout(incrementaCronometro, 1000);
    }

    // Execução do cronometro.
    $timeout(incrementaCronometro, 1000);

  }
