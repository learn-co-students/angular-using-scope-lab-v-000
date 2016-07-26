function ContactCard() {
    return {
      scope: {
        name: '=',
        email: '=',
        phone: '='
      },
      template: [
        '<div>{{name}}</div>',
        '<div>{{email}}</div>',
        '<div>{{phone}}</div>'
      ].join(''),
      restrict: 'E'

    }
}

angular
  .module('app')
  .directive('contactCard', ContactCard)
