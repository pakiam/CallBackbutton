$(".call-button").on("click", function () {
    $(".call-button").fadeOut(1100);
    $(".call-button-active").fadeIn(1000);
});
$(".fa-close").on("click", function () {
    $(".call-button-active").fadeOut(1000, function () {
        $(".call-button").fadeIn(900);
    });
});