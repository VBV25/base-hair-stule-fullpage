var btnDown=document.getElementById("sidebar-nav__btn"),massBlockSectNum=Array.from(document.querySelectorAll(".section"));btnDown.addEventListener("click",function(e){var t=document.getElementById("scroller"),n=massBlockSectNum[0].offsetHeight;t.scrollBy({left:0,top:n,behavior:"smooth"})}),$(document).ready(function(){function t(){console.log("grgrgrgrgyrgjgh");var t=[];$(".content-container__text").each(function(e){t.push(this)}),$.each(t,function(e,t){var n=$(t).outerHeight(!0),s=document.documentElement.clientWidth,a=document.documentElement.clientHeight,i=$(".saidbar-nav__wrapper1").css("width"),o=$(".content-container").css("grid-template-rows").split("px")[1],c=$(".content-container").css("width");if(a<=315&&a<s)$(".scroller").css("height",a),$(".section").css("height",a).css("width",s).css("padding-left",i),$(".header").css("width",c),$(".footer").css("left",i),n<o?$(t).css("overflow-y","unset"):$(t).css("overflow-y","scroll");else if($(".scroller").removeAttr("style"),$(".section").removeAttr("style"),$(".header").removeAttr("style"),$(".footer").removeAttr("style"),580<=a)n<290?$(t).css("overflow-y","unset"):$(t).css("overflow-y","scroll");else if(a<580&&400<=a)n<200?$(t).css("overflow-y","unset"):$(t).css("overflow-y","scroll");else if(a<400&&370<=a)n<120?$(t).css("overflow-y","unset"):$(t).css("overflow-y","scroll");else if(a<=315){i=$(".saidbar-nav__wrapper1").css("width"),o=$(".content-container").css("grid-template-rows").split("px")[1],c=$(".content-container").css("width");$(".scroller").css("height",a),$(".section").css("height",a).css("width",s).css("padding-left",i),$(".header").css("width",c),$(".footer").css("left",i),n<o?$(t).css("overflow-y","unset"):$(t).css("overflow-y","scroll")}})}$(".header__mobile").click(function(){$(".header__nav").toggleClass("active-mobile-menu"),$("body").toggleClass("hidden")});for(var e=document.getElementById("line1"),n=Array.from(document.querySelectorAll(".section")),s=parseInt(n.length)-1,a=0;a<s;a++)e.insertAdjacentHTML("afterend",'<div class="sidebar-nav__progress-bar-line page-number" data-id="02"><div class="placeholder-page-nav">02 page</div></div>');var i=[];$(".sidebar-nav__progress-bar-line").each(function(e){i.push(this)}),$.each(i,function(e,t){$(t).attr("data-id",e+1);var n=e+1;$(t).children("div").text("0"+n+" page"),$(t).click(function(){$(".active-page-nav").text("0"+n)})});var o=Math.round($("#line1").outerHeight(!0));$("#active-line-nav").css("height",o),window.addEventListener("resize",function(){var e=Math.round($("#line1").outerHeight(!0));$("#active-line-nav").css("height",e)},!1);var c=i[i.length-1].offsetTop,r=$("#active-line-nav").outerHeight(!0),l=Math.trunc(c-o-2);$(".sidebar-nav__btn").click(function(){$(".sidebar-nav__btn").prop("disabled",!0);var e=document.getElementById("active-line-nav").offsetTop;l<=e?($(".sidebar-nav__btn").prop("disabled",!0),$(".last-page").css("opacity","1"),$(".active-page-nav").css("opacity","0.3")):setTimeout(function(){$(".sidebar-nav__btn").prop("disabled",!1)},1e3)}),$(".sidebar-nav__btn").click(function(){$(".active-line-nav").animate({top:"+="+r+"px"},0)}),$(".page-number").click(function(){var e=Math.round($(this).position().top);$(".active-line-nav").css("top",e),e<c?($(".active-page-nav").css("opacity","1"),$(".last-page").css("opacity","0.3"),$(".sidebar-nav__btn").prop("disabled",!1)):($(".last-page").css("opacity","1"),$(".active-page-nav").css("opacity","0.3"),$(".sidebar-nav__btn").prop("disabled",!0))});var d=[];$(".section").each(function(e){d.push(this)}),d.length<10?$(".last-page").text("0"+d.length):$(".last-page").text(d.length),$.each(d,function(e,n){$(n).offset().top;$("#scroller").scroll(function(){if(0===$(n).offset().top){var e=$(n).attr("data-id"),a=$(n).attr("data-id");$.each(i,function(e,t){var n=$(t).attr("data-id");if(a===n){var s=$(t).position().top;$(".active-line-nav").css("top",s),$(".sidebar-nav__btn").prop("disabled",!0)}}),a>=i.length?($(".sidebar-nav__btn").prop("disabled",!0),$(".sidebar-nav__btn").css("opacity","0.1"),$(".last-page").css("opacity","1"),$(".active-page-nav").css("opacity","0.3")):($(".active-page-nav").css("opacity","1"),$(".last-page").css("opacity","0.3"),setTimeout(function(){$(".sidebar-nav__btn").css("opacity","1"),$(".sidebar-nav__btn").prop("disabled",!1)},1e3)),$(".active-page-nav").text("0"+e)}}),$("#blockLineContainer").children(this).click(function(){var e=$(this).attr("data-id");if($(n).attr("data-id")===e){var t=$(n).offset().top;return document.getElementById("scroller").scrollBy({left:0,top:t,behavior:"smooth"}),!1}})});var v=[];$(".content-container__text").each(function(e){v.push(this)}),t(),window.addEventListener("resize",function(){t()},!1),$(".scroller").scroll(function(){var e=document.documentElement.clientWidth;document.documentElement.clientHeight<e&&t()})});