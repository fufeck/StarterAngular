angular.module 'starter'

.directive 'myHeader', ->

  restrict: 'AEC'
  templateUrl: 'myHeader.view.html'
  controller: 'myHeaderCtrl'

.controller 'myHeaderCtrl', ($rootScope, $scope) ->

