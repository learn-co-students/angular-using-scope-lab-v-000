function ContactCard() {
  return {
    replace: true,
    scope: {
      name: '=',
  		email: '=',
  		phone: '='
    },
    templateUrl: 'js/app/views/contact_card.html',
    restrict: 'E'
  };
};

angular
  .module('app')
  .directive('contactCard', ContactCard)
