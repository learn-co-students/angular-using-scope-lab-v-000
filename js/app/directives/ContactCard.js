function ContactCard () {
  return {
    template: [
      '<div>',
        '<label>Name: </label>',
          '{{name}}',
        '<label>Email: </label>',
          '{{email}}',
        '<label>Phone: </label>',
          '{{phone}}',
      '</div>'
    ].join(' '),
    scope: {
      name: '=',
      email: '=',
      phone: '='
    }
  };
}

angular
  .module('app')
  .directive('contactCard', ContactCard);