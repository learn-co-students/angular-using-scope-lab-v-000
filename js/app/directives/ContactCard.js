function ContactCard() {
    return {
        template: [
            '<div',
                '<h4>Contact Card</h4>',
                '<label>Name: {{ contact.name }}</label>',
                '<label>Email: {{ contact.email }}</label>',
                '<label>Phone: {{ contact.phone }}</label>',
            '</div>'
        ].join(''),
        scope: {
            contact: '@handle'
        },
        restrict: 'E'
    };
}

angular
    .module('app')
    .directive('contactCard', ContactCard);

    // <twitter-card handle="billgates"></twitter-card>
