$(".drop-menu").click(() => {
    $(".drop-menu-opened").fadeIn();
    $(".black-box").fadeIn();
});

$(".close-drop-menu").click(() => {
    $(".drop-menu-opened").fadeOut();
    $(".black-box").fadeOut();
});