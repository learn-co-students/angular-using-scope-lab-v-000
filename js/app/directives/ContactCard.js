function ContactCard() {
  return {
    templateUrl: 'js/app/views/ContactCardTemplate.html',
    scope: {
      name: '=',
      email: '=',
      phone: '='
    }
  };
}

angular
  .module('app')
  .directive('contactCard', ContactCard)