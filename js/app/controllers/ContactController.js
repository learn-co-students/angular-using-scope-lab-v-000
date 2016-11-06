function ContactController() {

	var ctrl = this

	ctrl.contacts = [{
		name: 'Bill Gates',
		email: 'bill@microsoft.com',
		phone: '01234567890'
	},{
		name: 'Steve Jobs',
		email: 'steve@apple.com',
		phone: '12345678910'
	},{
		name: 'Joe Bloggs',
		email: 'joe@bloggs.com',
		phone: '13092019340'
	},{
		name: 'President Obama',
		email: 'president@whitehouse.com',
		phone: '75934988239'
	}];
}

angular
	.module('app')
	.controller('ContactController', ContactController);