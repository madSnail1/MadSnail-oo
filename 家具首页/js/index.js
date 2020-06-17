/*
*******右侧客服
*/
$(".ser-show img").on("mouseover", function () {

    $(".ser-show").animate({
        "position": "absolute",
        "right": "-50px"
    }, "slow");

    $(".ser-hide").animate({
        "position": "absolute",
        "left": "-180px"
    }, "slow");

});

$(".ser-hide ").on("mouseout", function () {

    $(".ser-show").animate({
        "position": "absolute",
        "right": "0px"
    }, "slow");

    $(".ser-hide").animate({
        "position": "absolute",
        "left": "50px"
    }, "slow");
});

/*
***********手机端导航栏
*/
//显示
$("#header1-show").on("click", function () {
    $(".header1-hide").show();
})
//隐藏
$("#header1-hide").on("click", function () {
    $(".header1-hide").hide();
})


/*
********顶部左右logo
*/
$(function () {

    function headerLeft(box) {

        //页面刷新
        $(document).ready(function () {
            $(box).css({
                "position": "relative",
                "left": "-32%"
            });
            $(box).animate({
                "left": "0"
            }, "slow");

        });

    }
    headerLeft(".header-nav2");

});

$(function () {

    function headerRight(box) {

        //页面刷新
        $(document).ready(function () {
            $(box).css({
                "position": "absolute",
                "right": "-100%"
            });
            $(box).animate({
                "right": "10%"
            }, "slow");

        });

    }
    headerRight("#header-p");
    headerRight("#header-span");

});

/*
*****简介图片
*/
$(function () {

    function oal(box) {

        var b2;
        b2 = false;

        var a2 = $(box).parent().offset().top;
        if (a2 >= $(window).scrollTop() && a2 < ($(window).scrollTop() + $(window).height())) {

            if (b2 == false) {

                $(box).css({
                    "left": "-200px"
                });
                $(box).animate({
                    "position": "absolute",
                    "left": "40px",
                }, "slow");
            }
            b2 = true;

        } else {
            $(window).scroll(function () {
                if (a2 >= $(window).scrollTop() && a2 < ($(window).scrollTop() + $(window).height())) {

                    if (b2 == false) {

                        $(box).css({
                            "left": "-200px"
                        });
                        $(box).animate({
                            "position": "absolute",
                            "left": "40px",
                        }, "slow");

                    }
                    return b2 = true;

                }
            });
        }

    }
    oal(".intro-img");
});



/*
*****题目斜杠
*/
$(function () {

    function titleTop(box) {

        var b2;
        b2 = false;

        var a2 = $(box).parent().offset().top;
        if (a2 >= $(window).scrollTop() && a2 < ($(window).scrollTop() + $(window).height())) {

            if (b2 == false) {

                $(box).css({
                    "top":"-500%"
                });
                $(box).animate({
                    "position": "absolute",
                    "top":"-120%"
                }, "slow");
            }
            b2 = true;

        } else {
            $(window).scroll(function () {
                if (a2 >= $(window).scrollTop() && a2 < ($(window).scrollTop() + $(window).height())) {

                    if (b2 == false) {

                        $(box).css({
                            "top":"-500%"
                        });
                        $(box).animate({
                            "position": "absolute",
                            "top":"-120%"
                        }, "slow");

                    }
                    return b2 = true;

                }
            });
        }

    }
    titleTop("#title1-top");
    titleTop("#title2-top");
    titleTop("#title3-top");
    titleTop("#title4-top");
    titleTop("#title5-top");
});

$(function () {

    function titleBot(box) {

        var b2;
        b2 = false;

        var a2 = $(box).parent().offset().top;
        if (a2 >= $(window).scrollTop() && a2 < ($(window).scrollTop() + $(window).height())) {

            if (b2 == false) {

                $(box).css({
                    "bottom":"-600%"
                });
                $(box).animate({
                    "position": "absolute",
                    "bottom":"-200%"
                }, "slow");
            }
            b2 = true;

        } else {
            $(window).scroll(function () {
                if (a2 >= $(window).scrollTop() && a2 < ($(window).scrollTop() + $(window).height())) {

                    if (b2 == false) {

                        $(box).css({
                            "bottom":"-600%"
                        });
                        $(box).animate({
                            "position": "absolute",
                            "bottom":"-200%"
                        }, "slow");

                    }
                    return b2 = true;

                }
            });
        }

    }
    titleBot("#title1-bot");
    titleBot("#title2-bot");
    titleBot("#title3-bot");
    titleBot("#title4-bot");
    titleBot("#title5-bot");
});

/*
**** 底部左右位置
*/
$(function () {

    function titleBot(box,box1) {

        var b2;
        b2 = false;

        var a2 = $(box).parent().offset().top;
        if (a2 >= $(window).scrollTop() && a2 < ($(window).scrollTop() + $(window).height())) {

            if (b2 == false) {

                $(box).css({
                    "left": "-200px"
                });
                $(box).animate({
                    "position": "absolute",
                    "left":"0"
                }, "slow");

                $(box1).css({
                    "right": "-200px"
                });
                $(box1).animate({
                    "position": "absolute",
                    "right":"0"
                }, "slow");

            }
            b2 = true;

        } else {
            $(window).scroll(function () {
                if (a2 >= $(window).scrollTop() && a2 < ($(window).scrollTop() + $(window).height())) {

                    if (b2 == false) {

                        $(box).css({
                            "left": "-200px"
                        });
                        $(box).animate({
                            "position": "absolute",
                            "left":"0"
                        }, "slow");

                        $(box1).css({
                            "right": "-200px"
                        });
                        $(box1).animate({
                            "position": "absolute",
                            "right":"0"
                        }, "slow");

                    }
                    return b2 = true;

                }
            });
        }

    }
    titleBot("#case1-left","#case1-right");
   
});


/*
********旋转
*/
// transform: rotateY(360deg);
//transition:all 1s ease;

$(function () {

    function spin(box) {

        var b2;
        b2 = false;

        var a2 = $(box).parent().offset().top;
        if (a2 >= $(window).scrollTop() && a2 < ($(window).scrollTop() + $(window).height())) {

            if (b2 == false) {
                 
                 $(box).css({
                    "transform": "rotateY(360deg)",
                    "transition":"all 1s ease"
                 });
            }
            b2 = true;

        } else {
            $(window).scroll(function () {
                if (a2 >= $(window).scrollTop() && a2 < ($(window).scrollTop() + $(window).height())) {

                    if (b2 == false) {

                        $(box).css({
                            "transform": "rotateY(360deg)",
                            "transition":"all 1s ease"
                         });

                    }
                    return b2 = true;

                }
            });
        }

    }
    spin(".flow-box");
    spin(".number1");
    spin(".number2");
    spin("#ad-conter1");
    spin(".product1");
    spin(".case3");
});


/*
*****我们的优势左右图片的位移
*/
$(function () {

    function al(box,box1) {

        var b2;
        b2 = false;

        var a2 = $(box).parent().offset().top;
        if (a2 >= $(window).scrollTop() && a2 < ($(window).scrollTop() + $(window).height())) {

            if (b2 == false) {

                $(box).css({
                    "left": "-200px"
                });
                $(box).animate({
                    "position": "absolute",
                    "left": "-20px",
                }, "slow");

                $(box1).css({
                    "left": "200px"
                });
                $(box1).animate({
                    "position": "absolute",
                    "left": "-20px",
                }, "slow");

            }
            b2 = true;

        } else {
            $(window).scroll(function () {
                if (a2 >= $(window).scrollTop() && a2 < ($(window).scrollTop() + $(window).height())) {

                    if (b2 == false) {

                        $(box).css({
                            "left": "-200px"
                        });
                        $(box).animate({
                            "position": "absolute",
                            "left": "-20px",
                        }, "slow");

                        $(box1).css({
                            "left": "200px"
                        });
                        $(box1).animate({
                            "position": "absolute",
                            "left": "-20px",
                        }, "slow");

                    }
                    return b2 = true;

                }
            });
        }

    }
    al(".ad-img2",".ad-img3");
});


/*
*******线
*/
$(function () {

    function al(box) {

        var b2;
        b2 = false;

        var a2 = $(box).parent().offset().top;
        if (a2 >= $(window).scrollTop() && a2 < ($(window).scrollTop() + $(window).height())) {

            if (b2 == false) {

                $(box).fadeOut();
                $(box).fadeIn();

            }
            b2 = true;

        } else {
            $(window).scroll(function () {
                if (a2 >= $(window).scrollTop() && a2 < ($(window).scrollTop() + $(window).height())) {

                    if (b2 == false) {

                        $(box).fadeOut();
                        $(box).fadeIn();

                    }
                    return b2 = true;

                }
            });
        }

    }
    al(".case-line img");
});

