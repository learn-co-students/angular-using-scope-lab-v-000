function ContactCard() {
    return {
        template: [
            '<div>',
                '<h4>Contact Card</h4>',
                '<label>Name:</label>',
                '<p>{{ handle.name }}</p>'
                '<label>Email:</label>',
                '<p>{{ handle.email }}</p>'
                '<label>Phone:</label>',
                '<p>{{ handle.phone }}</p>'
            '</div>'
        ].join(''),
        restrict: 'E',
        scope: {
          handle: '='
        }
    };
}
 
angular
    .module('app')
    .directive('contactCard', ContactCard);


