$(document).ready(function(){
    $('body').removeClass('fade-in');

    let box = $('#box');
    box.hide();

// mobile navigation

    $('.menuBtn').on('click', function(e){
      e.preventDefault();
      $('#miniNav').css("width", "100%");
    });

    $('.closebtn', $('#miniNav')).on("click", function(e){
      e.preventDefault();
      $('#miniNav').css("width", "0");
    });

// main navigation

    $('nav.menu a').on("click", function(e){
      e.preventDefault();
      $('nav.menu a').css('font-weight', '400');
      $(this).css('font-weight', '600');
    });

    $('nav.menu a').one("click", function(e){
      e.preventDefault();
      box.show();
    });

    $('.aboutme-link').on("click", function(e){
      e.preventDefault();

      $('#miniNav').animate({
        width: 0
      });

      box.animate({
        opacity: 0
      }, 1000);

      $('html, body').delay(1000).animate({
        scrollTop: $(window).height() - $('nav').outerHeight(true)
      }, 1000, 'easeInSine');

      $.ajax({
        url: "aboutme.html",
        method: "GET",
        success: function(data) {
            setTimeout(function() {
              box.html(data);
            }, 1000);
        }
      });

      box.animate({
        opacity: 1
      });
    });

    $('.projects-link').on("click", function(e){
      e.preventDefault();

      $('#miniNav').animate({
        width: 0
      });

      box.animate({
        opacity: 0
      }, 1000);

      $('html, body').delay(1000).animate({
        scrollTop: $(window).height() - $('nav').outerHeight(true)
      }, 1000, 'easeInSine');

      $.ajax({
        url: "projects.html",
        method: "GET",
        success: function(data) {
            setTimeout(function() {
              box.html(data);
            }, 1000);
          }
      });

      box.animate({
        opacity: 1
      });
    });

    $('.contact-link').on("click", function(e){
      e.preventDefault();

      $('#miniNav').animate({
        width: 0
      });

      box.animate({
        opacity: 0
      }, 1000);

      $('html, body').delay(1000).animate({
        scrollTop: $(window).height() - $('nav').outerHeight(true)
      }, 1000, 'easeInSine');

      $.ajax({
        url: "contact.html",
        method: "GET",
        success: function(data) {
            setTimeout(function() {
              box.html(data);
            }, 1000);
          }
      });

      box.animate({
        opacity: 1
      });
    });

});

// typing

window.onload = function(){
  let elem = $('.typewrite'),
      toType = [],
      time = 3000;
  elem.each(function(){
    toType = elem.attr('data-type');
    time = elem.attr('data-period');
  });
  setTimeout(function() {
    let typing = new Type(elem, JSON.parse(toType), time);
  },"2000");
};

class Type {
  constructor(elem, toType, time){
    this.elem = elem; //a
    this.toType = toType; //desgn x code
    this.time = time; // 2000
    this.loopNum = 0;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  }
  tick() {
    let i = this.loopNum % this.toType.length,
        fullTxt = this.toType[i];

    if(this.isDeleting) {
      this.txt = fullTxt.substr(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substr(0, this.txt.length + 1);
    }

    this.elem.text(this.txt);

    var that = this;
    let delta = 240 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if(!this.isDeleting && this.txt === fullTxt) {
      delta = this.time;
      longTicking();
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      shortTicking();
      this.isDeleting = false;
      this.loopNum++;
      delta = 4000;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  }
}

function longTicking(){
  let cursor = $('span.cursor');
  cursor.removeClass('shortTicking').addClass('longTicking');
}

function shortTicking(){
  let cursor = $('span.cursor');
  cursor.removeClass('longTicking').addClass('shortTicking');
}
