function ContactCard() {
	return {
		templateUrl: 'js/app/views/contact.html',

		replace: true,
		restrict: 'E',

		scope: {

	   		name: '=',
	      	phone: '=',
	      	email: '='
    }
  }
}

angular
	.module('app')
	.directive('contactCard', ContactCard)