function ContactCard() {
  return {
    scope: {
      name: '=',
      email: '=',
      phone: '-'
    },
    restrict: 'E'
  };
}

angular
  .module('app')
  .directive('contactCard', ContactCard)