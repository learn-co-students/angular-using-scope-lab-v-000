function ContactCard() {
    return {
        template: [
            '<div>',
                '<h4>Contact Card</h4>',
                '<label>Name:</label>',
                '<p>{{ name }}</p>',
                '<label>Email:</label>',
                '<p>{{ email }}</p>',
                '<label>Phone:</label>',
                '<p>{{ phone }}</p>',
            '</div>'
        ].join(''),
        scope: {
            name: '=',
            email: '=',
            phone: '='
        },
        restrict: 'E'
    };
}

angular
    .module('app')
    .directive('contactCard', ContactCard);
