angular
  .module('app')
  .directive('contactCard', ContactCard);
  
function ContactCard() {
  return {
    templateUrl: 'js/app/views/contact.html',
    replace: true,
    scope: {
      name: '=',
      email: '=',
      phone: '='
    },
    restrict: 'E'
  };
}