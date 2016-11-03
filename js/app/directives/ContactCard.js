function ContactCard(){
  return {
    template: [
      '<div>',
        '<h4>Contact Card</h4>',
        '<label>Name:</label> {{name}}',
        '<label>Email:</label> {{email}}',
        '<label>Phone:</lable> {{phone}}',
      '</div>'
    ].join(''),
    scope: {name: '=', phone: '=', email: '=', }
  }
}

angular
  .module('app')
  .directive('contactCard', ContactCard)