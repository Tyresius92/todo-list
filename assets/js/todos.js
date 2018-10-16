
// Check off specific todos by Clicking
$("ul").on("click", "li", function() {
        $(this).toggleClass("completed")
});

// Click on X to delete todo
$("ul").on("click", "span", function(event) {
        $(this).parent().fadeOut(500, function() {
                $(this).remove(); 
        }); 
        event.stopPropagation();
});

// Create a new todo
$("input[type='text']").keypress(function(event) {
        if (event.which === 13) {
                var todo = $(this).val();
                $(this).val(""); 
                $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todo + "</li>")
        }
})

$(".fa-plus").click(function() {
        $("input[type='text'").fadeToggle();
});