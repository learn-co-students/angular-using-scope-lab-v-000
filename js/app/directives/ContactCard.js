function ContactCard(){
  return {
    scope: {},
    template: [
      '<div>',
        '<h4>Contact Card</h4>',
        '<label>Name: {{ ctrl.name }}</label>',
        '<label>Email: {{ ctrl.email }}</label>',
        '<label>Phone: {{ ctrl.phone }}</label>',
      '</div>'
    ].join(''),
    		controller: function () {
		},
    controllerAs: 'ctrl',
    bindToController: {
      name: '=',
      phone: '=',
      email: '='
    },
    restrict: "E"
  };
}

angular
  .module('app')
  .directive('contactCard', ContactCard);
