//File added to handle POST, PUT, and DELETE requests.
$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger ={
            burger_name: $("#newBurger").val().trim(),
            devoured: 0
        };
//POST request for a new burger
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Created a new burger.");
                location.reload();
            });
    });
//PUT request to change devoured state of burger.    
    $(".devour").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var devouredState ={
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured.");
            location.reload();
        });
    });

//DELETE request to remove burger from 'Devoured' list
$(".delete").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
    }).then(
        function() {
            console.log("Deleted burger", id);
            location.reload()
        });
});

});