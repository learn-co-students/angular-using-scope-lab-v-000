function ContactCard(){
  return {
    template: [
      "<div>",
        "<h3>Contact</h3>",
          "<label>Name:</label>",
          "{{name}}",
          "<label>Email:</label>",
          "{{email}}",
          "<label>Phone:</label>",
          "{{phone}}",
        "</div>"
      ].join(""),

      scope: {
        name: "=",
        email: "=",
        phone: "="
      },

      restrict: "E"
  };
}

angular
      .module("app")
      .directive("contactCard",ContactCard);
