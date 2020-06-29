jQuery(document).ready(function($){
  //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
  var MQL = 1170;

  //primary navigation slide-in effect
  if($(window).width() > MQL) {
    var headerHeight = $('.cd-header').height();
    $(window).on('scroll',
    {
          previousTop: 0
      }, 
      function () {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop ) {
          //if scrolling up...
          if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
            $('.cd-header').addClass('is-visible');
          } else {
            $('.cd-header').removeClass('is-visible is-fixed');
          }
        } else {
          //if scrolling down...
          $('.cd-header').removeClass('is-visible');
          if( currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
        }
        this.previousTop = currentTop;
    });
  }

  //open/close primary navigation
  $('.cd-primary-nav-trigger').on('click', function(){
    $('.cd-menu-icon').toggleClass('is-clicked'); 
    $('.cd-header').toggleClass('menu-is-open');
    
    //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    if( $('.cd-primary-nav').hasClass('is-visible') ) {
      $('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
        $('body').removeClass('overflow-hidden');
      });
    } else {
      $('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
        $('body').addClass('overflow-hidden');
      }); 
    }
  });

  $(".heybiz-request-form button").prop("disabled", true);

  $(".terms-and-conditions").on("change", function(e) {
    $(".heybiz-request-form button").prop("disabled", !e.target.checked);
  });

  $(".heybiz-request-form").on("submit", function(e) {
    e.preventDefault();
    let formData = $(e.target).serializeArray();
    var body = {};

    let checkPaybox = formData.find(x => x.name === "InteresPaybox");
    let checkTDC    = formData.find(x => x.name === "InteresTDC");

    formData.forEach(el => body[el.name] = el.value);

    body["InteresPaybox"] = checkPaybox ? "S" : "N";
    body["InteresTDC"]    = checkTDC    ? "S" : "N";

    // "NombreCompleto": "NombreCompleto",
    // "CorreoElectronico": "a@a.com",
    // "NumeroCelular": "11111",
    // "RFC": "RFC",
    // "Estado": "NL",
    // "InteresPaybox": "S",
    // "InteresTDC": "N"

    fetch("https://us-central1-banregiolabs-whatsapp-250421.cloudfunctions.net/HeyPayboxRegister", {
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    $(e.target).find("button").parent().html('');
    jQuery('#finishModal').modal('show');
    e.target.reset();
  });

});