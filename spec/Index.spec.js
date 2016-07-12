var path = require('path');

describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	it('should display the contact details correctly', function() {
		var list = element.all(by.repeater('contact in ctrl.contacts'));

		expect(list.get(1).getText()).toContain('Steve Jobs');
		expect(list.get(1).getText()).toContain('steve@apple.com');
		expect(list.get(1).getText()).toContain('12345678910');
	});
});