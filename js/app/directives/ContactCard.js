function ContactCard() {
  return {
    scope: {
      name: '=',
      email: '=',
      phone: '='
    },
    templateUrl: '/js/app/views/contacts_card.html'
  }
}

angular
  .module('app')
  .directive('contactCard', ContactCard);
