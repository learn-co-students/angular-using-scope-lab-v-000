function contactCard() {
  return {
    template: [
      "<div>",
      "<h4>Contact Card</h4>",
      "<label>Name:</label>{{name}}",   
      "<label>Email:</label>{{email}}",   
      "<label>Phone:</label>{{phone}}",   
      "</div>"
    ].join(""),
    replace: true,
    scope: {
      name: "=",
      email: "=",
      phone: "=",
    },
  }
}

angular
  .module("app")
  .directive("contactCard", contactCard)