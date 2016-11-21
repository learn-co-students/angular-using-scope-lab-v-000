function ContactCard() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },

    templateUrl: 'js/app/directives/contact.html'
  };
}

angular
  .module('app')
  .directive('contactCard', ContactCard);
