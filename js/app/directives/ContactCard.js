function ContactCard() {
return {
  scope: {
    name: '=',
    email: '=',
    phone: '='
  },
template: [
'<div>',
        '<h4>Contact Card </h4>',
        '<label>Name:</label>',
        '{{handle.name}}',
        '<label>Email:</label>',
        '{{handle.email}}',
        '<label>Phone:</label>',
        '{{handle.phone}}',
      '</div>'
].join(''),
scope: {
  handle: '='
    },
restrict: 'E'
};
}
 
angular
.module('app')
.directive('contactCard', ContactCard);
