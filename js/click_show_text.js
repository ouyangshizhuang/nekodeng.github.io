var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("坚持打卡！", "有源源就有我！", "its Neko","番茄鱼啊");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "linear-gradient(to bottom, green, pink)"
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            3000,
            function () {
                $i.remove();
            });
    });
    setTimeout('delay()', 1000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}