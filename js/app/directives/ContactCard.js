function ContactCard() {
  return {
    template: [
      '<div class="contact">',
        '<h4>Contact Card</h4>',
        '<div>Name: {{ name }}</div>',
        '<div>Email: {{ email }}</div>',
        '<div>Phone: {{ phone }}</div>',
      '</div>'
    ].join(''),

    scope: {
      name: '=',
      phone: '=',
      email: '='
    },

    restrict: 'E'
  }
}

angular
  .module('app')
  .directive('contactCard', ContactCard);