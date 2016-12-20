function ContactCard() {
  return {
    template: [
      '<div>',
        '<h4>Contact Card</h4>',
        '<label>Name:</label> {{ name }}',
        '<label>Email:</label> {{ email }}',
        '<label>Phone:</label> {{ phone }}',
      '</div>'
    ].join(''),
    scope: {
      name: '=',
      email: '=',
      phone: '='
    },
    restrict: 'E'
  };
}

angular
  .module('app')
  .directive('contactCard', ContactCard)