function ContactCard() {
  return {
    replace: true,
    templateUrl: 'js/app/views/contact.html'
  }
};

angular
  .module('app')
  .directive('contactCard', ContactCard);
