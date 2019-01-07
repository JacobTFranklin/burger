$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = {
        devoured: true
      };
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevoured
      }).then(
        function() {
          console.log("Devoured the burger.");
          // Reload the page 
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      var newBurger = {
        name: $("#burgerName").val().trim(),
        devoured: false
      };
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Created new burger.");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  