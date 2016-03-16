function ContactCard() {
  return {
    template: [
            '<div class="contact">',
              '<a href="https://twitter.com/{{contact.name}}">Follow @{{contact.name}} on twitter!</a>',
            '</div>'
        ].join(''),
        restrict: 'E',
        scope: true
  }
}

angular
  .module('app')
  .directive('contactCard', ContactCard )
