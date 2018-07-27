// function for making button hover preceeding the navdrop div
$(() => {
    $(".navdrop").hover(function() {$(this).parent().children("button").addClass("navbtn-hover")},
                        function() {$(this).parent().children("button").removeClass("navbtn-hover")})
})