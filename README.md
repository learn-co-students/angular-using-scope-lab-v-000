# Using "scope"

## Objectives

- Implement isolate in the Directive

## Instructions

In this repo, we've got a controller named `ContactController`. This has a few contacts in an array.

Create a contact card directive. We should loop through the contacts, and pass their information into this directive.

The directive should nicely display the data we pass through, with prefixed titles. For example, we should see `NAME: Bill Gates` in our view.

The directive HTML should look like this:

```html
<div>
	<h4>Contact Card</h4>
	<label>Name:</label>

	<label>Email:</label>

	<label>Phone:</label>

</div>
```

You should then fill in the blanks with the data!