function ContactCard() {
    return {
        templateUrl: 'js/app/views/contactcard.html',
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
