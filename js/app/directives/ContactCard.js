function ContactCard() {
	return {
		templateUrl: 'js/app/views/contact-card.html',
		restrict: 'E',
		scope: {
			info: '='
		}
	}
}

angular
	.module('app')
	.directive('contactCard', ContactCard)