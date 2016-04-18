function ContactCard() {
  return {
    
    template: [
      '<div>',
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
    }
  }
}

angular
  .module('app')
  .directive('contactCard', ContactCard);