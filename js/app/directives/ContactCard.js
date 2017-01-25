function ContactCard() {
  return {
    template: [
      '<div>',
        '<h4>Contact Card</h4>',
        '<label>Name: {{ contact.name }}</label>',
        '<label>Email: {{ contact.email }}</label>',
        '<label>Phone: {{ contact.phone }}</label>',
      '</div>'
    ].join(''),
    restrict: 'E',
    scope: {
      contact: '=handle'
    }
  };
}

angular
  .module('app')
  .directive('contactCard', ContactCard);
