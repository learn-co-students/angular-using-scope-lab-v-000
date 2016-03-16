function ContactCard() {
  return {
    template: [
            '<div class="contact">',
            '<h4>Contact Card</h4>',
              '<a href="https://twitter.com/{{contact.name}}">Follow @{{contact.name}} on twitter!</a>',
              '<label>Name: {{contact.name}}</label>',
              '<label>Email: {{contact.email}}</label>',
              '<label>Phone: {{contact.phone}}</label>',
            '</div>'
        ].join(''),
        restrict: 'E',
        scope: true
  }
}

angular
  .module('app')
  .directive('contactCard', ContactCard )
