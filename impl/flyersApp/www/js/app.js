// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.shops', {
     url: '/shops',
     views: {
        'menuContent': {
            templateUrl: 'templates/shops.html',
            controller: 'ShopsCtrl'
        }
     }    
    })
    .state('app.publications', {
     url: '/shops/publications/:storeid',
     views: {
        'menuContent': {
            templateUrl: 'templates/publications.html',
            controller: 'PublicationsByShopCtrl'
        }
     }
    })
    .state('app.publication', {
     url: '/publication/:pubid',
     views: {
        'menuContent': {
            templateUrl: 'templates/show_publication.html',
            controller: 'PublicationByIdCtrl'
        }
     }
    })
    .state('app.product', {
     url: '/product/:productid',
     views: {
        'menuContent': {
            templateUrl: 'templates/show_product.html',
            controller: 'ProductByIdCtrl'
        }
     }
    })
    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/shops');
});
