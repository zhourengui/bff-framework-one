System.register([], function (_export, _context) {
  "use strict";

  var app;
  return {
    setters: [],
    execute: function () {
      app = new Vue({
        el: "#root",
        data: {
          message: "Hello World"
        }
      });

      _export("default", app);
    }
  };
});
