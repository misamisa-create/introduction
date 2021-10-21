$(window).on('scroll', function () {

  $(".JS_ScrollAnimationItem").each(function () {
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight) {
      $(this).addClass('isActive');
    } else {
      $(this).removeClass('isActive');
    }
  });

  var navPos = jQuery('#global-nav').offset().top; // グローバルメニューの位置
  var navHeight = jQuery('#global-nav').outerHeight(); // グローバルメニューの高さ
  if (100 < jQuery(this).scrollTop()) { // ◯px以上スクロールしたら
    jQuery("#global-nav").css("height", "100");
    jQuery('#global-nav').addClass('m_fixed');
  } else {
    jQuery("#global-nav").css("height", "680");
    jQuery('#global-nav').removeClass('m_fixed');
  }
});

