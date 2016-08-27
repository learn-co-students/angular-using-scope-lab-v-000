
function ContactCard() {
  return {
    template: [
      '<div>',
        '<h4>Contact Card</h4>',
        '<label>NAME: {{ handle.name }}</label>',
        '<label>EMAIL: {{ handle.email }}</label>',
        '<label>Phone: {{ handle.phone }}</label>',
        '</div>'
    ].join(''),
    scope: {
      handle: '='
    },
    restrict: 'E'
  };
}

angular.module('app').directive('contactCard', ContactCard);
