function ContactCard () {
  return {
    templateUrl: 'js/app/views/card.html',
    scope: {
      name: '=',
      email: '=',
      phone: '='
    }
  }
}

angular
  .module("app")
  .directive("contactCard", ContactCard)
