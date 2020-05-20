//wait for DOM load
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    //flip devoured boolean
    var newDevoured = !newDevoured;
    //add new state to object
    var newDevouredState = {
      devoured: newDevoured
    };
    //PUT updated burger state to server
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        //reload page
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    //override default button action
    event.preventDefault();
    //create new burger object
    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0
    };
    console.log(newBurger);
    //POST new burger to server
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        //reload page
        location.reload();
      }
    );
  });
});