function ContactCard(){
  return {
    scope: {
      name: '=',
      email: '=',
      phone: '='
    },
    templateUrl: '/js/app/views/contact.html',
    restrict: 'E'
  };
}

angular 
  .module('app')
  .directive('contactCard', ContactCard)