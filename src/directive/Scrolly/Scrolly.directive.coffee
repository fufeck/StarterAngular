angular.module 'starter'

.directive 'scrolly', ->

	restrict : 'A'
	link : (scope, element, attrs) ->
		raw = element[0]
				
		element.bind 'scroll', () ->
			scope.nextBack(raw.scrollTop, raw.offsetHeight)
