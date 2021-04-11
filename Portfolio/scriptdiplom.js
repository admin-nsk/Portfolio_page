$(function () {
    $('.burger-menu').click(function () {
        // var src = ($(this).attr("src") === "img/burger.png") ? "img/close.png" : "img/burger.png";
        // $(this).attr('src', src);
        $('.mobile-menu').toggle();
    });
});