$(function() {
    $(".devour").on("click", function(event) {
        console.log(this);
      var id = $(this).data("id");
      console.log(id);
      var newDevoured = {
        devoured: 1
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
        burger_name: $("#burgerName").val().trim(),
        devoured: 0
      };
      console.log(newBurger);
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
  