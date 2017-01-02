function ContactCard() {
    return {
        template: [
            '<div class="contact">',
                '<h4>Contact Card</h4>',
                '<p>Name: {{name}}</p>',
                '<p>Email: {{email}}</p>',
                '<p>Phone: {{phone}}</p>',
            '</div>'
        ].join(''),
        scope: {
            name: "=",
      			email: "=",
      			phone: "="
        },
        restrict: 'E',
    };
}

angular
    .module('app')
    .directive('contactCard', ContactCard);
