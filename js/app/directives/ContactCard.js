function ContactCard() {
	return {
		template: [
		'<div>',
    	'<h4>Contact Card</h4>',
    	'<label>Name:</label>',
    	'{{contact.name}}',
   		'<label>Email:</label>',
   		'{{contact.email}}',
    	'<label>Phone:</label>',
    	'{{contact.phone}}',
    	'</div>'
    	].join(""),

	}
}

angular
	.module('app')
	.directive('contactCard', ContactCard);