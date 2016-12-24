function ContactCard() {
	return {
    replace: true,
    template:[
        '<div ng-repeat="contact in ctrl.contacts">',
          '<h4>Contact Card</h4>',
          '<label>Name:{{ contact.name }}</label>',
          '<label>Email:{{ contact.email }}</label>',
          '<label>Phone:{{ contact.phone }}</label>',
        '</div>'
    ].join(""),

    // scope:{
    //   info:''
    // },
    restrict: 'E'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);
