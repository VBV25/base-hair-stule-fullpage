var btnDown=document.getElementById("sidebar-nav__btn"),massBlockSectNum=Array.from(document.querySelectorAll(".section"));btnDown.addEventListener("click",function(e){var t=document.getElementById("scroller"),n=massBlockSectNum[0].offsetHeight;t.scrollBy({left:0,top:n,behavior:"smooth"})}),$(document).ready(function(){function e(){var e=document.documentElement.clientWidth,t=document.documentElement.clientHeight;t<e&&t<=315?$("html,body").css("height","100vh"):$("html,body").css("height","")}function t(){var t=[];$(".content-container__text").each(function(e){t.push(this)}),$.each(t,function(e,t){var n=$(t).outerHeight(!0),i=document.documentElement.clientWidth,s=document.documentElement.clientHeight,a=$(".saidbar-nav__wrapper1").css("width"),o=$(".content-container").css("grid-template-rows").split("px")[1],c=$(".content-container").css("width");if(s<=315&&s<i)$(".scroller").css("height",s),$(".section").css("width",i).css("padding-left",a),$(".header").css("width",c),$(".footer").css("left",a),n<o?$(t).css("overflow-y","unset"):$(t).css("overflow-y","scroll");else if($(".scroller").removeAttr("style"),$(".section").removeAttr("style"),$(".header").removeAttr("style"),$(".footer").removeAttr("style"),580<=s)n<290?$(t).css("overflow-y","unset"):$(t).css("overflow-y","scroll");else if(s<580&&400<=s)n<200?$(t).css("overflow-y","unset"):$(t).css("overflow-y","scroll");else if(s<400&&370<=s)n<120?$(t).css("overflow-y","unset"):$(t).css("overflow-y","scroll");else if(s<=315){a=$(".saidbar-nav__wrapper1").css("width"),o=$(".content-container").css("grid-template-rows").split("px")[1],c=$(".content-container").css("width");$(".scroller").css("height",s),$(".section").css("width",i).css("padding-left",a),$(".header").css("width",c),$(".footer").css("left",a),n<o?$(t).css("overflow-y","unset"):$(t).css("overflow-y","scroll")}})}$(".header__mobile").click(function(){$(".header__nav").toggleClass("active-mobile-menu"),$("body").toggleClass("hidden")});for(var n=document.getElementById("line1"),i=Array.from(document.querySelectorAll(".section")),s=parseInt(i.length)-1,a=0;a<s;a++)n.insertAdjacentHTML("afterend",'<div class="sidebar-nav__progress-bar-line page-number" data-id="02"><div class="placeholder-page-nav">02 page</div></div>');var o=[];$(".sidebar-nav__progress-bar-line").each(function(e){o.push(this)}),$.each(o,function(e,t){$(t).attr("data-id",e+1);var n=e+1;$(t).children("div").text("0"+n+" page"),$(t).click(function(){$(".active-page-nav").text("0"+n)})});var c=Math.round($("#line1").outerHeight(!0));$("#active-line-nav").css("height",c),window.addEventListener("resize",function(){var e=Math.round($("#line1").outerHeight(!0));$("#active-line-nav").css("height",e)},!1);var r=o[o.length-1].offsetTop,l=$("#active-line-nav").outerHeight(!0),d=Math.trunc(r-c-2);$(".sidebar-nav__btn").click(function(){$(".sidebar-nav__btn").prop("disabled",!0);var e=document.getElementById("active-line-nav").offsetTop;d<=e?($(".sidebar-nav__btn").prop("disabled",!0),$(".last-page").css("opacity","1"),$(".active-page-nav").css("opacity","0.3")):setTimeout(function(){$(".sidebar-nav__btn").prop("disabled",!1)},1e3)}),$(".sidebar-nav__btn").click(function(){$(".active-line-nav").animate({top:"+="+l+"px"},0)}),$(".page-number").click(function(){var e=Math.round($(this).position().top);$(".active-line-nav").css("top",e),e<r?($(".active-page-nav").css("opacity","1"),$(".last-page").css("opacity","0.3"),$(".sidebar-nav__btn").prop("disabled",!1)):($(".last-page").css("opacity","1"),$(".active-page-nav").css("opacity","0.3"),$(".sidebar-nav__btn").prop("disabled",!0))});var v=[];$(".section").each(function(e){v.push(this)}),v.length<10?$(".last-page").text("0"+v.length):$(".last-page").text(v.length),$.each(v,function(e,n){$(n).offset().top;$("#scroller").scroll(function(){if(0===$(n).offset().top){var e=$(n).attr("data-id"),s=$(n).attr("data-id");$.each(o,function(e,t){var n=$(t).attr("data-id");if(s===n){var i=$(t).position().top;$(".active-line-nav").css("top",i),$(".sidebar-nav__btn").prop("disabled",!0)}}),s>=o.length?($(".sidebar-nav__btn").prop("disabled",!0),$(".sidebar-nav__btn").css("opacity","0.1"),$(".last-page").css("opacity","1"),$(".active-page-nav").css("opacity","0.3")):($(".active-page-nav").css("opacity","1"),$(".last-page").css("opacity","0.3"),setTimeout(function(){$(".sidebar-nav__btn").css("opacity","1"),$(".sidebar-nav__btn").prop("disabled",!1)},1e3)),$(".active-page-nav").text("0"+e)}}),$("#blockLineContainer").children(this).click(function(){var e=$(this).attr("data-id");if($(n).attr("data-id")===e){var t=$(n).offset().top;return document.getElementById("scroller").scrollBy({left:0,top:t,behavior:"smooth"}),!1}})});var h=[];$(".content-container__text").each(function(e){h.push(this)}),e(),t(),window.addEventListener("resize",function(){e(),t()},!1)});var windowInnerWidth=document.documentElement.clientWidth,windowInnerHeight=document.documentElement.clientHeight;window.addEventListener("touchstart",function(){if(windowInnerHeight<windowInnerWidth&&windowInnerHeight<=315){var e=document.documentElement.clientWidth,t=document.getElementById("scroller");t.style.height="",t.style.height="100vh"}else t.style.height=e});