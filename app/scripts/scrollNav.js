
// Module name
var scrollNav = (function() {

  // Initializes module
  var init = function() {
    _setUpListners();
  };

  // Listen for the event
  var _setUpListners = function () {
    $(document).on('scroll', onScroll);
    $('a[href^="#"]').not('.logo-header').on('click', smoothScroll)
  };

  var fixedPanel = $('.fixed-panel');

  var smoothScroll = function (event) {
    event.preventDefault();
    $(document).off('scroll');

    $('a').each(function () {
      $(this).removeClass('navigation-link_current');
    });

    $(this).addClass('navigation-link_current');

    var target = this.hash,
        menu = target,
        $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2-fixedPanel.height()
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on('scroll', onScroll);
    });
  };

  var onScroll = function (event) {
    var scrollPos = $(document).scrollTop();

    var navigationLink = $('.navigation-link');
    navigationLink.each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr('href'));
      if (refElement.position().top - fixedPanel.height() <= scrollPos
        &&
        refElement.position().top + refElement.innerHeight() - fixedPanel.height()> scrollPos)
      {
        navigationLink.removeClass('navigation-link_current');
        currLink.addClass('navigation-link_current');
      }
      else{
        currLink.removeClass('navigation-link_current');
      }
    });
  };

  // Return the object (public methods)
  return {
    init: init
  };

})();

scrollNav.init();