//Avoid console errors in browsers that lack one
(function() {
  var method,
    noop = function () {};
    methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ],
    length = methods.length,
    console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
        console[method] = noop;
    }
  }
}());


var navigation = responsiveNav(".nav-collapse", {
  insert: "before",
  openPos: "static"
});


$(".headline.one").fitText(1.55);
$(".headline.two").fitText(1.55);
$(".headline.three").fitText(1.9);


$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade",
    touch: true,  
    prevText: "",           
    nextText: ""
  });
});
       

$(document).ready(function () {
  var htmlbody = $('html,body'),
      myWindow = $(window),
      backToTop = $('.go-top');

  // Fade in/out "scroll to top" button
  myWindow.scroll(function() {
    if ($(this).scrollTop() > 200) {
      backToTop.fadeIn(200);
    } else {
      backToTop.fadeOut(200);
    }
  });

  // Animate the "scroll to top" button
  backToTop.click(function(e) {
    e.preventDefault();
    htmlbody.animate({scrollTop: 0}, 300);
  });


  backToTop.bind('contextmenu', function(e){
    e.preventDefault();
    return false;
  });


  // Vertical scrolling for navbar links
  $("a[href='#history'], a[href='#menu'], a[href='#services'], a[href='#contact']").click(function(e) {
    e.preventDefault();
    var selector = $(this).attr('href');
    $.scrollTo(selector,800, {'axis':'y'});
  });


  //Navicon toggle
  $(".navicon-button").click(function(){
    $(this).toggleClass('open');
  });


  // $.getJSON('/reviews', function(data, textStatus) {
    
  //   $('#customer1 .person-photo img').attr({
  //     src: data[0].user.image_url,
  //     alt: data[0].user.name,
  //     width: 100,
  //     height: 100
  //   });

  //   $('#customer1 .review-text').html('<em>' + data[0].excerpt + '</em>');
  //   $('#customer1 .person-info h2').text(data[0].user.name);

  //   $('#customer2 .person-photo img').attr({
  //     src: data[1].user.image_url,
  //     alt: data[1].user.name,
  //     width: 100,
  //     height: 100
  //   });

  //   $('#customer2 .review-text').text(data[1].excerpt);
  //   $('#customer2 .person-info h2').text(data[1].user.name);


  // });

});



