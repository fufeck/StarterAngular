angular.module "starter.home"

.controller "homeCtrl", ($scope, $timeout, $location, $anchorScroll) ->
	$scope.showTechnoOne = false
	$scope.projectShow = false

	$scope.animeWording = true
	$scope.wordingSelected = 0
	$scope.welcomeWording = [
		"Bienvenue sur le portfolio de Fabien Tafforeau"
		"Etudiant en 2eme années à l'école 42"
	]
	$scope.back	= 1
	$scope.backHeader	= 1

	$scope.projects = [
		{
			title : "Noon"
			src : "http://ec2-52-17-249-12.eu-west-1.compute.amazonaws.com/"
			back : "../img/noon.png"
			picto : "../img/web.png"
			description : "Landing Page de l'application Noon, Réaliser en AngularJs, coffeeScript, jade et less. Entiérement responsive"
			show : false
		},
		{
			title : "Looky"
			back : "../img/looky.png"
			picto : "../img/applimobile.png"
			description : "Application Hybride, Réaliser avec le framework Ionic et AngularJs en frontend et NodeJs et Stroogloop en backend"
			show : false
		},
		{
			title : "Mondialtourisme"
			back : "../img/nouvelair.png"
			picto : "../img/web.png"
			description : "Maintenance et refonte des sites Nouvelair et Mondialtourisme (site de réservation de voyage) en PHP avec Zend framework"
			show : false
		}
	]

	aboutMe = document.body.querySelector("#about-me")

	nextWording = ->
		$timeout () ->
			$scope.animeWording = false
			$timeout () ->
				$scope.wordingSelected += 1
				if $scope.wordingSelected > $scope.welcomeWording.length - 1
					$scope.wordingSelected = 0
				$scope.animeWording = true
			, 1000
			nextWording()
		, 4000

	nextWording()

	$scope.goTo = (idDiv) ->
		$location.hash(idDiv);
		$anchorScroll();

	$scope.nextBack = (top, height) ->
		if top < 100 && $scope.backHeader == 2
			$scope.backHeader = 1
			$('#back-header').animate {opacity: 0}, '100'
		else if top > 100 && $scope.backHeader == 1
			$scope.backHeader = 2
			$('#back-header').animate {opacity: 0.7}, '100'
	return
