function ContactTemplate() {
	return {
		template: [
		'<div>',
		'<h4>ContactCard</h4>',
		'<p>Name: {{name}}</p>',
		'<p>Email: {{email}}</p>',
		'<p>Phone: {{phone}}</p>'
		].join(''),
		scope: {
			name: '=',
			email: '=',
			phone: '='
		}
	}
}

angular
	.module('app')
	.directive('contactTemplate', ContactTemplate);