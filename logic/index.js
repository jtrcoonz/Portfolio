$(".drop-menu").click(() => {
    $(".drop-menu-opened").fadeIn();
    $(".black-box").fadeIn();
});

$(".close-drop-menu").click(() => {
    $(".drop-menu-opened").fadeOut();
    $(".black-box").fadeOut();
});

$(".site-title").click(() => {
    window.location.href = "./index.html"
})