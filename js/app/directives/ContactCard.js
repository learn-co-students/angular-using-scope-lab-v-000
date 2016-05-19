function ContactCard (){
  return {
    template: ['<div>',
        '<h4>Contact Card</h4>',
        '<label>Name:</label> {{ person.name }}',
        '<label>Email:</label> {{ person.email }}',
        '<label>Phone:</label> {{ person.phone }}',
        '</div>'].join(''),
    scope: {
      person: '='
    },
    restrict: 'E',
    replace: true
  };
}

angular
    .module('app')
    .directive('contactCard', ContactCard);
