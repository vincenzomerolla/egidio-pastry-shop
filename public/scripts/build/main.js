!function(){var e,n=function(){};for(methods=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],length=methods.length,console=window.console=window.console||{};length--;)e=methods[length],console[e]||(console[e]=n)}();var navigation=responsiveNav(".nav-collapse",{insert:"before",openPos:"static"});$(".headline.one").fitText(1.55),$(".headline.two").fitText(1.55),$(".headline.three").fitText(1.9),$(window).load(function(){$(".flexslider").flexslider({animation:"fade",touch:!0,prevText:"",nextText:""})}),$(document).ready(function(){var e=$("html,body"),n=$(window),o=$(".go-top");n.scroll(function(){$(this).scrollTop()>200?o.fadeIn(200):o.fadeOut(200)}),o.click(function(n){n.preventDefault(),e.animate({scrollTop:0},300)}),o.bind("contextmenu",function(e){return e.preventDefault(),!1}),$("a[href='#history'], a[href='#menu'], a[href='#services'], a[href='#contact']").click(function(e){e.preventDefault();var n=$(this).attr("href");$.scrollTo(n,800,{axis:"y"})}),$(".navicon-button").click(function(){$(this).toggleClass("open")})});