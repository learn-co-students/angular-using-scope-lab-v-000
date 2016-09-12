function ContactCard() {


   return {scope: {
   contact: '=contact'
   },
   template: [
   '<div class="twitter">',
  '{{contact.name}}', '{{contact.email}}', '{{contact.phone}}',
   '</div>'
   ].join('')
   





}
}

angular 
  .module('app')
  .directive('contactCard', ContactCard)