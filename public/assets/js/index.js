$(document).ready(function(){
    $('.sidenav').sidenav();
    $(window).scroll(
        {
            previousTop: 0
        },
        function () {
            var currentTop = $(window).scrollTop();
            if (currentTop <= this.previousTop) {
                $(".container em").text("");
                $("nav").css("opacity", "1");
            } else {
                $(".container em").text("");
                $("nav").css("opacity", "0");
            }
            this.previousTop = currentTop;
        });
});
