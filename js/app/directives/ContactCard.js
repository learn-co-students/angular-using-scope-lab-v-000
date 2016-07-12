function ContactCard() {
    return {
        template: [
            '<div>',
                '<h4>Contact Card</h4>',
                '<label>Name: {{ handle.name }}</label>',
                '<label>Email: {{ handle.email }}</label>',
                '<label>Phone: {{ handle.phone }}</label>',
            '</div>'
        ].join(''),
        scope: {
            handle: '='
        },
        restrict: 'E'
    };
}

angular
    .module('app')
    .directive('contactCard', ContactCard);

    // <twitter-card handle="billgates"></twitter-card>
