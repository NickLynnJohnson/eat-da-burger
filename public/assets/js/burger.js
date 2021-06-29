
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  $(".submit-burger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("input#typed-burger").val().trim(),
      devoured: false
    }; 

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger" + newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );

  });
});

//   // Replace all alerts with modals

//   const userData = {
//     username: usernameInput.val().trim(),
//     email: emailInput.val().trim(),
//     password: passwordInput.val().trim()
//   };

//   if (!userData.username || !userData.email || !userData.password) {
//     return alert("Please don't leave fields blank");
//   }

//   // If we have an email and password, run the signUpUser function
//   signUpUser(userData.username, userData.email, userData.password);
//   emailInput.val("");
//   passwordInput.val("");
//   usernameInput.val("");
//   repeatPasswordInput.val("");
//   repeatEmailInput.val("");
// });

// // Does a post to the signup route. If succesful, we are redirected to the members page
// // Otherwise we log any errors
// function signUpUser(username, email, password) {
//   $.post("/users/signup", {
//     username: username,
//     email: email,
//     password: password
//   }).then(function(data) {
//     if (data.duplicateUser) {
//       // Replace with Modal
//       alert("Sorry, that username has been taken");
//     } else {
//       window.location = data.redirect;
//     }
//   }).catch(function(err) {
//     console.log(err);
//   });
// }

