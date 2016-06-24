function ContactCard(){
  return {
    scope: {name: '=',
            email: '=',
            phone: '='
    },
    template: ['<div>',
     '<h4>Contact Card</h4>',
      '<label>Name: {{name}}</label>',
       '<label class="email">Email: {{email}}</label>',
        '<label>Phone: {{phone}}</label>',
         '</div></br>'].join(''),
    restrict: 'E'
  };
};

angular
  .module('app')
  .directive('contactCard', ContactCard);