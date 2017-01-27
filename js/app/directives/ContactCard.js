function ContactCard() {
  return {
    template: [
      '<div> <h4>Contact Card</h4>',
      	'<p>Name: {{handle.name}}</p>',
      	'<p>Email: {{handle.email}}</p>',
      	'<p>Phone: {{handle.phone}}</p>',
      '</div>'
    ].join(''),
    scope: {
      handle: '='
    },
    restrict: 'E'
  }
}

angular
  .module('app')
  .directive('contactCard', ContactCard)
