angular.module "starter", [
	"ui.router"
	"ui.bootstrap"
	"ngCordova"
	"ngAnimate"
	"ngStorage"
	"ngResource"
	"ngTable"
	"duScroll"

	"starter.translate"

	"starter.home"
]

.config ($urlRouterProvider) ->

	$urlRouterProvider.otherwise '/'

	return

.run ($rootScope) ->

	return

