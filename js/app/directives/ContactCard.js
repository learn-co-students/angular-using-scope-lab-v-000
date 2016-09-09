app.directive('contactCard', function(){
  return {
    restrict: "E",
        template: [
        '<div>',
        '<h4>Contact Card</h4>',
        '<label>Name:</label>',
        '{{ personName }}',
        '<label>Email:</label>',
        '{{ personEmail }}',
        '<label>Phone:</label>',
        '{{ personPhone }}',
      '</div>'
    ].join(''),
    restrict: 'E',
    scope: {
      personName: "=",
      personEmail: "=",
      personPhone: "="
    }
  
  }
})