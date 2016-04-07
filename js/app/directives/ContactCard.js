function ContactCard(){
  return {
     scope: {
        name: '=',
        email: '=',
        phone: '=',
      },
    template: [
    '<div>',
      '<h4>Contact Card</h4>',
      '<label>Name: {{ name }}</label>',
      '<label>Email: {{ email }}</label>',
      '<label>Phone: {{ phone }}</label>',
      '</div>'
      ].join(''),
      restrict: 'E'
  };
}

angular
  .module('app')
  .directive('contactCard', ContactCard);