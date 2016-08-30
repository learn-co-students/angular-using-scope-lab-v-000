function ContactCard() {
	return {
		scope: {
			name: '=',
			email: '=',
			phone: '='
		},
		templateUrl: 'js/app/views/contacts.html'
	};
}
angular
  .module('app')
  .directive('contactCard', ContactCard)
