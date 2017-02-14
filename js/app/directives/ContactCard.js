function ContactCard() {
  return {
    templateUrl: 'js/app/views/card.html',
    scope: {
      handle: '='
    }
  };
};

angular
  .module('app')
  .directive('contactCard', ContactCard)
