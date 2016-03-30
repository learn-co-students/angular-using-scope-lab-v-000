function contactCard () {
  return {
    templateUrl: 'js/app/views/contact.html',
    scope: {
      name: '=',
      email: '=',
      phone: '='
    }
  };
}


angular
  .module ('app')
  .directive('contactCard', contactCard);