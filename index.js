var $ = require("jquery");

$(function() {
  var h1 = $("<h1>", {
    html: "hola mundo",
    style: {
      color: "red"
    }
  });

  $("body").append(h1);
});
