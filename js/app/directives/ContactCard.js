function ContactCard () {
  return {
    template: [
    '<div>',
    '<h4>Contact Card</h4>',
    '<label>Name: </label> {{ name }}<br />',
    '<label>Email: </label> {{ phone }}<br />',
    '<label>Phone: </label> {{ email }}',
    '</div>'
  ].join(''),
  scope: {
    name: '@name',
    phone: '@phone',
    email: '@email'
  },
  restrict: 'E'
  };
}

angular
  .module('app')
  .directive('contactCard', ContactCard);
