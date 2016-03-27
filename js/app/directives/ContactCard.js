angular.module('app')
  .directive('contactCard', ContactCard);

function ContactCard(){
  return {
    scope: {
      name: '@',
      phone: '@',
      email: '@'
  },
    template: ['<div>',
                 '<h4>Contact Card</h4>',
                 '<div>Name: {{name}}</div>',
                 '<div>Email: {{email}}</div>',
                 '<div>Phone: {{phone}}</div>',              
               '</div>'].join('')
  }
}