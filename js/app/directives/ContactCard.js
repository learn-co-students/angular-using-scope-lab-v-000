function ContactCard () {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'js/app/views/ContactCard.html',
    scope: true
  }
}

angular
  .module('app')
  .directive('contactCard', ContactCard);