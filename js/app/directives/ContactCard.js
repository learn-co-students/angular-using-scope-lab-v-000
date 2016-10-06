function ContactCard(){
  return{
    templateUrl: 'js/app/views/contactcard.html',
    scope: {
      name: '=',
      phone: '=',
      email: '='
    }
  }
}


angular
.module('app')
.directive('contactCard', ContactCard)