function ContactCard() {
  return {
    template: ['<div>',
    '<h4>Contact Card</h4>',
    '<label>Name:</label>',
    '<p>{{ contact.name }}</p>',
    '<label>Email:</label>',
    '<p>{{ contact.email }}</p>',
    '<label>Phone:</label>',
    '<p>{{ contact.phone }}</p>',
    '</div>'].join(''),
    scope: {
    contact: '='
  }

  };

}

angular
  .module('app')
  .directive('contactCard', ContactCard)
