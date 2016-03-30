function ContactCard(){
  return {
    scope:{ name: '@', phone: '@', email: '@' },
    templateUrl: 'contact-card.html',
    restrict: 'E'
  };
}

angular
    .module('app')
    .directive('contactCard', ContactCard);