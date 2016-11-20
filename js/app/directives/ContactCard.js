function ContactCard() {
  return {
    templateUrl: 'js/app/views/contacts.html',
    scope: {
      name: '=',
      email: '=',
      phone: '='
    }
  }
}

angular
  .module('app')
  .directive('contactCard', ContactCard);
