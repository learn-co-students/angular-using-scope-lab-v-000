function contactCard() {
  return {
    restrict: 'E',
    templateUrl: '/js/app/views/contactCard.html',
    scope: {
      name: '=',
      email: '=',
      phone: '='
    }

  };
}


angular 
  .module('app')
  .directive('contactCard', contactCard);
