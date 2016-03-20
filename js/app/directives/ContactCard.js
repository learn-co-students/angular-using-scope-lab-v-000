function ContactCard() {
  return {
    scope: {
      name: '=',
      email: '=',
      phone: '='
    },
    template: [
      '<div>',
             '<h4>Contact Card</h4>',
             '<label>NAME:</label>',
             '{{ name }}',
             '<label>EMAIL:</label>',
             '{{ email }}',
             '<label>PHONE:</label>',
             '{{ phone }}',
      '</div>'
    ].join(''),
    restrict: 'E'
  };
}

angular.module('app').directive('contactCard', ContactCard);