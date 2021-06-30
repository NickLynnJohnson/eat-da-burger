
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  // This handler is for the input form for the typed new burger...
  $(".submit-burger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("input#typed-burger").val().trim(),
      devoured: 0

    }; 

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(response) {
        console.log("created new burger" + response);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // This handler is for the "devour" function...
  $(".devour-burger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var toDevourID = $(this).data("id");
    var setDevouredState = {
      devoured: true
    }

    console.log(toDevourID);
    console.log(setDevouredState);

    // Send the PUT request.
    $.ajax("/api/burgers/" + toDevourID, {
      type: "PUT",
      data: setDevouredState
    }).then(
      function(response) {
        console.log("created new burger" + response);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});