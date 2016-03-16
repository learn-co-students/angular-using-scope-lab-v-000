function ContactCard() {
  return {
    scope: {
      name: '=',
      email: '=',
      phone: '='
    },
    template: [
            '<div class="contact">',
            '<h4>Contact Card</h4>',
              '<a href="https://twitter.com/{{name}}">Follow @{{name}} on twitter!</a>',
              '<label>Name:</label>',
              '{{name}}',
              '<label>Email:</label>',
              '{{email}}',
              '<label>Phone:</label>',
              '{{phone}}',
            '</div>'
        ].join(''),
        restrict: 'E'
  }
}

angular
  .module('app')
  .directive('contactCard', ContactCard )
