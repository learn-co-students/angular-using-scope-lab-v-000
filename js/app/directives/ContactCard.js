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
        '<label>Name:</label>',
        '{{ name }}',
        '<label>Email:</label>',
        '{{ email }}',
        '<label>Phone:</label>',
        '{{ phone }}',
      '</div>'
    ].join(''),
    restrict: 'E'
  };
}

angular
  .module('app')
  .directive('contactCard', ContactCard);
