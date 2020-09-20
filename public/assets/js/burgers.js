$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger ={
            name: $("#newBurger").val().trim(),
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
    $(".devour").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var devouredState ={
            devoured: 1
        };
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured.");
            location.reload();
        });
    });
});

$(".delete").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.ajax({
        type: "DELETE",
        url: "/api/burgers" + id
    }).then(location.reload());
});