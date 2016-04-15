angular.module('app.controllers', [])

.controller('pageCtrl', function($scope, $ionicModal) {

    $scope.games = [{
        nombre: "Fifa 2016",
        fechaLanzamiento: "Septiembre 2015",
        genero: "Deportes",
        imagen: "http://static4.gamelosofy.com/wp-content/uploads/fifa-2016-trucos-600x480.jpg",
        votos: 5
    }, {
        nombre: "Life Is Strange",
        fechaLanzamiento: "Enero 2015",
        genero: "Aventura Gráfica",
        imagen: "http://gamerescape.com/wp-content/uploads/2014/08/lifeisstrange.jpg",
        votos: 0
    }, {
        nombre: "Metal Gear Solid V: The Phantom Pain",
        fechaLanzamiento: "Septiembre 2015",
        genero: "Sigilo",
        imagen: "http://im.ziffdavisinternational.com/ign_es/screenshot/default/mgsv-mgo-tga-screen-12_8ewt.jpg",
        votos: 15
    }];

    $scope.juego = {
        nombre: '',
        fechaLanzamiento: '',
        genero: '',
        imagen: '',
        votosAcumulados: 0,
        votos: 0
    };

    $ionicModal.fromTemplateUrl('votarModal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.votarModal = modal;
    });

    $ionicModal.fromTemplateUrl('nuevoModal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.nuevoModal = modal;
    });

    $scope.votar = function() {
        for (var i = 0; i < $scope.games.length; i++) {
            if ($scope.games[i].nombre == $scope.juego.nombre) {
                $scope.games[i].votos = $scope.games[i].votos + parseInt($scope.juego.votos);
                break;
            }
        }
        $scope.votarModal.hide();
        $scope.juego.votos = 0;
    };

    $scope.juegoSelect = function(item) {
        $scope.juego.nombre = item.nombre;
        $scope.juego.fechaLanzamiento = item.fechaLanzamiento;
        $scope.juego.genero = item.genero;
        $scope.juego.votosAcumulados = item.votos;
        $scope.votarModal.show();
    };

    $scope.limpiarJuego = function() {
        $scope.juego.nombre = '';
        $scope.juego.fechaLanzamiento = '';
        $scope.juego.genero = '';
        $scope.juego.imagen = '';
        $scope.juego.votosAcumulados = 0;
        $scope.juego.votos = 0;
        $scope.nuevoModal.show();
    }

    $scope.anadirJuego = function() {
        $scope.games.push($scope.juego);
        $scope.nuevoModal.hide();

    }
})
