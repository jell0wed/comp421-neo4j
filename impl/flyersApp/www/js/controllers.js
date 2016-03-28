angular.module('starter.controllers', [])
.filter('htmlToPlainText', function() {
    return function (text) {
        return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    }
})
.filter('split', function() {
        return function(input, splitChar) {
            // do some bounds checking here to ensure it has that index
            return input.split(splitChar);
        }
    })

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ShopsCtrl', function($scope, $http, $ionicLoading) {
    $scope.stores = [ ];
    
    $scope.load = function() {
        $ionicLoading.show();
        $http.get('http://localhost:8080/stores').then(function (res) {
            $scope.stores = res.data;
            $ionicLoading.hide();
        }, function (err) {
            console.log(err);
            $ionicLoading.hide();
        });
    };
})

.controller('PublicationsByShopCtrl', function($scope, $stateParams, $ionicLoading, $http) {
    $scope.publications = [ ];
    
    $scope.load = function() {
        $ionicLoading.show();
        $http.get('http://localhost:8080/stores/' + $stateParams.storeid + '/publications').then(function (res) {
            $scope.publications = res.data;
            $ionicLoading.hide();
        }, function (err) {
            console.log(err);
        });
    };
})

.controller('PublicationByIdCtrl', function($scope, $stateParams, $ionicLoading, $http) {
    $scope.products = undefined;
    
    $scope.load = function() {
        $ionicLoading.show();
        $http.get('http://localhost:8080/publication/'+ $stateParams.pubid +'/products').then(function (res) {
            $scope.products = res.data;
            $ionicLoading.hide();
        }, function (err) {
            console.log(err);
        });
    };
});
