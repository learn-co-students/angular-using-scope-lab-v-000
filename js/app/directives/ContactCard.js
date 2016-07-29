function ContactCard() {
  return {
    scope: {
      name: '=',
      email: '=',
      phone: '='
    },
    templateUrl: 'js/app/directives/contactCard.html',
    restrict: 'E'
  }
}

angular
  .module('app')
  .directive('contactCard', ContactCard);
