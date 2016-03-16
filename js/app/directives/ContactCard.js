function contactCard() {
  return {
    templateUrl: 'js/app/views/contactCard.html',
    scope: { name: '=', phone: '=', email: '=' },
    restrict: 'E'
  };
}

angular
  .module('app')
  .directive('contactCard', contactCard);