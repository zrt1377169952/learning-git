/**
 * Created by dllo on 17/7/28.
 */
var $documentBody = $(document.body);
//滚轮事件封装完美版


function changeStyle(obj, down) {
    if(down) {
//				obj.style.width = oDiv1.offsetWidth + 1 + "px";
//				obj.style.height = oDiv1.offsetHeight + 1 + "px";
        console.log("向下")
        if($(document.body).scrollTop()>= 20 )
        {
            $("#head").slideUp(800);
        }
    } else {
//				obj.style.width = oDiv1.offsetWidth - 1 + "px";
//				obj.style.height = oDiv1.offsetHeight - 1 + "px";
        console.log("向上")

        $("#head").slideDown(800);
    }
    console.log($(document.body).scrollTop())
    if($(document.body).scrollTop()<= 20)
    {
        $("#head").slideDown(800);
    }

    if($(document.body).scrollTop()>= 800)
    {
        $(".backTop").css("display","block")
    } else {
        $(".backTop").css("display","none")
    }

}

function mouseWheel(obj,fn) {

    var isFireFox = window.navigator.userAgent.indexOf("FireFox") > 0;
    //绑定相同的响应事件（函数）
    if(isFireFox) {
        //火狐浏览器绑定滚轮事件
        obj.addEventListener("DOMMouseScroll", progress, false);
    } else {
        obj.onmousewheel = progress;
    }

    function progress(ev) {
        var ev = ev || window.event;
        var down = true; //记录滚轮方向  默认向上

//            console.log(ev.wheelDelta)

        //ev.detail 火狐获取滚轮滚动系数
        if(ev.detail) {
            //小于0  页面向下  改变down记录的状态
            if(ev.detail < 0) {
                down = false;
            }
        } else {
            //非火狐  大于0  页面向下
            if(ev.wheelDelta > 0) {
                down = false;
            }
        }

        //fn changeStyle(obj,down)
        fn(obj,down);

    }

}



$(function () {
//        滚轮事件
    mouseWheel($documentBody[0],changeStyle)

//backTop点击
    $(".backTop").click(function () {
        $(document.body).scrollTop(0);
        $("#head").slideDown(800);
        $(".backTop").hide();
    })







})