angular.module("starter", ["ui.router", "ui.bootstrap", "ngCordova", "ngAnimate", "ngStorage", "ngResource", "ngTable", "duScroll", "starter.translate", "starter.home"]).config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}).run(function($rootScope) {});

var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

angular.module('starter.translate', ['pascalprecht.translate']).config(function($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: 'i18n/locale-',
    suffix: '.json'
  });
  $translateProvider.determinePreferredLanguage(function() {
    var availables, lang, nav;
    availables = ['en', 'fr'];
    nav = window.navigator;
    lang = nav.language || nav.browserLanguage || nav.systemLanguage || nav.userLanguage;
    if (lang) {
      lang = lang.split('-')[0];
      if (indexOf.call(availables, lang) < 0) {
        lang = void 0;
      }
    }
    if (!lang) {
      lang = availables[0];
    }
    return lang;
  });
  $translateProvider.fallbackLanguage('en');
});

angular.module('starter').directive('scrolly', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var raw;
      raw = element[0];
      return element.bind('scroll', function() {
        return scope.nextBack(raw.scrollTop, raw.offsetHeight);
      });
    }
  };
});

angular.module("starter.home", []).config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'home.view.html',
    controller: 'homeCtrl'
  });
}).run(function() {});

angular.module("starter.home").controller("homeCtrl", function($scope, $timeout, $location, $anchorScroll) {
  var aboutMe, nextWording;
  $scope.showTechnoOne = false;
  $scope.projectShow = false;
  $scope.animeWording = true;
  $scope.wordingSelected = 0;
  $scope.welcomeWording = ["Bienvenue sur le portfolio de Fabien Tafforeau", "Etudiant en 2eme années à l'école 42"];
  $scope.back = 1;
  $scope.backHeader = 1;
  $scope.projects = [
    {
      title: "Noon",
      src: "http://ec2-52-17-249-12.eu-west-1.compute.amazonaws.com/",
      back: "../img/noon.png",
      picto: "../img/web.png",
      description: "Landing Page de l'application Noon, Réaliser en AngularJs, coffeeScript, jade et less. Entiérement responsive",
      show: false
    }, {
      title: "Looky",
      back: "../img/looky.png",
      picto: "../img/applimobile.png",
      description: "Application Hybride, Réaliser avec le framework Ionic et AngularJs en frontend et NodeJs et Stroogloop en backend",
      show: false
    }, {
      title: "Mondialtourisme",
      back: "../img/nouvelair.png",
      picto: "../img/web.png",
      description: "Maintenance et refonte des sites Nouvelair et Mondialtourisme (site de réservation de voyage) en PHP avec Zend framework",
      show: false
    }
  ];
  aboutMe = document.body.querySelector("#about-me");
  nextWording = function() {
    return $timeout(function() {
      $scope.animeWording = false;
      $timeout(function() {
        $scope.wordingSelected += 1;
        if ($scope.wordingSelected > $scope.welcomeWording.length - 1) {
          $scope.wordingSelected = 0;
        }
        return $scope.animeWording = true;
      }, 1000);
      return nextWording();
    }, 4000);
  };
  nextWording();
  $scope.goTo = function(idDiv) {
    $location.hash(idDiv);
    return $anchorScroll();
  };
  $scope.nextBack = function(top, height) {
    if (top < 100 && $scope.backHeader === 2) {
      $scope.backHeader = 1;
      return $('#back-header').animate({
        opacity: 0
      }, '100');
    } else if (top > 100 && $scope.backHeader === 1) {
      $scope.backHeader = 2;
      return $('#back-header').animate({
        opacity: 0.7
      }, '100');
    }
  };
});
