function ContactCard() {
    return {
        templateUrl: 'contact_card.html',
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