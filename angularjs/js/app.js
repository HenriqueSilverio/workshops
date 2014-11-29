(function(angular) {

	'use strict';

	var app = angular.module('MotoStore', []);

    app.controller('ProdutosController', function($scope, $http) {
        
        $scope.nome = 'Alex';
        $scope.menu = [
            { nome: 'Celulares', active: true },
            { nome: 'Tablets', active: false },
            { nome: 'Relogios', active: false }
        ];
        
        $scope.selecionado = null;

        $scope.carregarProdutos = function() {
            $http.get('data/data.json').then(function(response) {
                $scope.produtos = response.data;
            });
        };

        $scope.getFirstImage = function(produto) {
            return 'images/' + produto.images[0];
        };

        $scope.selecionarProduto = function(produto) {
            $scope.selecionado = produto;
        };

        $scope.voltar = function() {
            $scope.selecionado = null;
        };

        $scope.carregarProdutos();
    });

})(window.angular);