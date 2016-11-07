function ContactCard() {
    return {
        template: [
            '<div>',
                '<h4>Contact Card</h4>',
                '<label>Name:</label>',
                '<h5>{{ contact.name }}</h5>',
                '<label>Email: </label>',
                '<h5>{{ contact.email }}</h5>',
                '<label>Phone: </label>',
                '<h5>{{ contact.phone}}</h5>',
            '</div>'
        ].join(''),
        restrict: 'E'
    };
}
 
angular
    .module('app')
    .directive('contactCard', ContactCard);