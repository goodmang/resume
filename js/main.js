
// // Tabs & Windows

// $(".tab.one").on('click', function() {
//   $(".slider").removeClass("right");
//   $(".tags").removeClass("active");
//   $(".main").removeClass("disabled")
// });

// $(".tab.two").on('click', function() {
//   $(".slider").addClass("right");
//   $(".tags").addClass("active");
//   $(".main").addClass("disabled")
//   $(".main").removeClass("current")
// });



// // Header Shadow

// $(".main").scroll(function() {
//   if ($(this).scrollTop() >= 10) {
//     $(".header").addClass("shadow");
//   } else {
//     $(".header").removeClass("shadow");
//   }
// });

// // Ripple Effect

// $(document).on('click', '.ripple', function(e) {
  
//   var $ripple = $('<span class="rippling" />'),
//       $button = $(this),
//       btnOffset = $button.offset(),
//       xPos = e.pageX - btnOffset.left,
//       yPos = e.pageY - btnOffset.top,
//       size = 0,
//       animateSize = parseInt(Math.max($button.width(), $button.height()) * Math.PI);

//   $ripple.css({
//       top: yPos,
//       left: xPos,
//       width: size,
//       height: size,
//       backgroundColor: $button.attr("ripple-color")
//     })
//     .appendTo($button)
//     .animate({
//       width: animateSize,
//       height: animateSize,
//       opacity: 0
//     }, 500, function() {
//       $(this).remove();
//     });
// });

// // Scroll to top when 'Home' key is pressed

// $(window).keyup(function (e) {
//   if (e.keyCode == 36) {
//     $('.page').animate({ scrollTop: 0 }, 0);
//   }
// });