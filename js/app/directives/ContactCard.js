function ContactCard() {
    return {
        templateUrl: 'js/app/views/ContactCard.html',
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