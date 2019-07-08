'use strict';
// fixed svg show
//-----------------------------------------------------------------------------
svg4everybody();

// checking if element for page
//-----------------------------------------------------------------------------------
function isOnPage(selector) {
    return ($(selector).length) ? $(selector) : false;
}
// search page
function pageWidget(pages) {
  var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
  widgetWrap.prependTo("body");
  for (var i = 0; i < pages.length; i++) {
    if (pages[i][0] === '#') {
      $('<li class="widget_item"><a class="widget_link" href="' + pages[i] +'">' + pages[i] + '</a></li>').appendTo('.widget_list');
    } else {
      $('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
    }
  }
  var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:fixed;top:0;left:0;z-index:9999;padding:20px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
  widgetStilization.prependTo(".widget_wrap");
}


// $('.header-slider').slick({
//   infinite: true,
//   dots: true,
//   arrows: true,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     }
//   ]
// });



$('.section-block').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg class="icon icon-arrow mod-arrow"><use xlink:href="assets/img/symbol/sprite.svg#arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><svg class="icon icon-arrow"><use xlink:href="assets/img/symbol/sprite.svg#arrow"></use></svg></button>'
});


$('.section-news').slick({
  infinite: true,
  dots: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg class="icon icon-arrow mod-arrow"><use xlink:href="assets/img/symbol/sprite.svg#arrow"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow"><svg class="icon icon-arrow"><use xlink:href="assets/img/symbol/sprite.svg#arrow"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1164,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows:false,
        dots: true
      }
    },
    {
      breakpoint: 754,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows:false,
        dots: true
      }
    }
  ]
});


$('.header-menu-account').slick({
  infinite: true,
  dots: false,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg class="icon icon-arrow mod-arrow mod-color-arrow"><use xlink:href="assets/img/symbol/sprite.svg#arrow"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow"><svg class="icon icon-arrow mod-color-arrow"><use xlink:href="assets/img/symbol/sprite.svg#arrow"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      }
    }
  ]
});


$('.trainer-block').slick({
  infinite: true,
  dots: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg class="icon icon-arrow mod-arrow"><use xlink:href="assets/img/symbol/sprite.svg#arrow"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow"><svg class="icon icon-arrow"><use xlink:href="assets/img/symbol/sprite.svg#arrow"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1164,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 951,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 542,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});


$('.archive-slider').slick({
  infinite: true,
  dots: false,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg class="icon icon-arrow mod-arrow"><use xlink:href="assets/img/symbol/sprite.svg#arrow"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow"><svg class="icon icon-arrow"><use xlink:href="assets/img/symbol/sprite.svg#arrow"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1164,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true
      }
    }
  ]
});


function initMap() {
  // The location of Uluru
  var uluru = {lat: 49.421036, lng: 26.976296}; 
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 15, 
        center: uluru,
        disableDefaultUI: true,
        zoomControl: false
      });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

if(isOnPage('#map')){
  initMap();
}


$(document).ready(function($) {
  pageWidget(['index']);
});
// custom jQuery validation
//-----------------------------------------------------------------------------------
var validator = {
    init: function () {
      $('form').each(function () {
        var $form = $(this);
        var name = $form.attr('name');
        if (validator.valitatorRules.hasOwnProperty(name) || $form.hasClass('js-validate')) {
          var rules = validator.valitatorRules[name];
          $form.validate({
            rules:          rules,
            errorElement:    'b',
            errorClass:      'error',
            focusInvalid:    true,
            focusCleanup:    false,
            errorPlacement: function (error, element) {
              validator.setError($(element), error);
            },
            highlight: function (element, errorClass, validClass) {
              var $el = validator.defineElement($(element));
              if ($(element).attr('type') == 'file'){
                setTimeout(function () {
                  $(element).parents('label').find('b.error').addClass('file-error');
                  $(element).parents('.img-load').after($(element).parents('label').find('b.error'));
                }, 100)
              } else {
                if ($el){
                  $el.closest('.el-text-fel').removeClass(validClass).addClass(errorClass);
                }
              }
            },
            unhighlight: function (element, errorClass, validClass) {
              var $el = validator.defineElement($(element));
              if ($el){
                $el.closest('.el-text-fel').removeClass(errorClass).addClass(validClass);
              }
            },
            onfocusout: function(element) {
              // var $el = validator.defineElement($(element));
              // $el.valid();
            },
            messages: validator.messages
          });
        }
      });
    },
    setError: function ($el, message) {
      $el = this.defineElement($el);
      if ($el) this.domWorker.error($el, message);
    },
    defineElement: function ($el) {
      return $el;
    },
    domWorker: {
      error: function ($el, message) {
        $el.closest('.el-text-fel').addClass('error');
        $el.after(message);
      }
    },
    messages: {
      'field_test': {
        required: 'This field is required.'
      }
    },
    valitatorRules: {
      'form_test': {
        'field_test': {
          required: true
        }
      }
    }
  };
  
  validator.init();
  
  // validate by data attribute
  //-----------------------------------------------------------------------------------
  (function(){
    // add to validate form class 'js-validate'
    // add to validate field data-valid="test"
    //-----------------------------------------------------------------------------------
    var rules = {
      'name': {
        required: true,
        minlength: 2,
        maxlength: 255,
        messages: {
          required: "Это поле обезательное для заполнения",
          minlength: 'Минимум 2 символа',
          maxlength: 'Максимально 255 символов'
        }
      },
      'phone': {
        required: true,
        digits: true,
        minlength: 8,
        maxlength: 255,
        messages: {
          required: "Это поле обезательное для заполнения",
          minlength: 'Минимум 8 символа',
          maxlength: 'Максимально 255 символов',
          digits: 'Вводите только цифры'
        }
      },
      'company': {
        minlength: 2,
        maxlength: 255,
        messages: {
          minlength: 'Must have at least 2 characters!',
          maxlength: 'No more than 255 characters.'
        }
      },
      'message': {
        minlength: 10,
        maxlength: 500,
        messages: {
          minlength: 'Must have at least 10 characters!',
          maxlength: 'No more than 500 characters.'
        }
      },
      'email': {
        required: true,
        email: true,
        maxlength: 255,
        messages: {
          required: "Это поле обезательное для заполнения",
          email: 'Неправильный e-mail!',
          maxlength: 'Максимально 255 символов'
        }
      },
      'file': {
        extension: "jpeg|jpg|png|doc|docx|pdf",
        filesize: 30720000,
        messages: {
          extension: 'Invalid extension jpeg|jpg|png|doc|docx|pdf',
          filesize: 'File must be less than 30mb.'
        }
      }
    };
  
    for (var ruleName in rules) {
      $('[data-valid=' + ruleName + ']').each(function(){
        $(this).rules('add', rules[ruleName]);
      });
    };
  }());
  
  // custom rules
  //-----------------------------------------------------------------------------------
  $.validator.addMethod("email", function (value) {
    if (value == '') return true;
    var regexp = /[a-zA-Zа-яА-ЯёЁ0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Zа-яА-ЯёЁ0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Zа-яА-ЯёЁ0-9](?:[a-zA-Zа-яА-ЯёЁ0-9-]*[a-zA-Zа-яА-ЯёЁ0-9])?\.)+[a-zA-Zа-яА-ЯёЁ0-9](?:[a-zA-Zа-яА-ЯёЁ0-9-]*[a-zA-Zа-яА-ЯёЁ0-9])?/;
    return regexp.test(value);
  });
  $.validator.addMethod("extension", function (value, element, param) {
    param = typeof param === "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
    return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
  });
  $.validator.addMethod('filesize', function (value, element, param) {
    return this.optional(element) || (element.files[0].size <= param)
  });
  $.validator.addMethod("letters", function(value, element) {
    return this.optional(element) || /^[^1-9!@#\$%\^&\*\(\)\[\]:;,.?=+_<>`~\\\/"]+$/i.test(value);
  });
  $.validator.addMethod("digits", function(value, element) {
    return this.optional(element) || /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/i.test(value);
  });
  $.validator.addMethod("valueNotEquals", function(value, element, arg){
    return arg != value;
  }, "Value must not equal arg.");
  $.validator.addMethod( "require_from_group", function( value, element, options ) {
    var $fields = $( options[ 1 ], element.form ),
      $fieldsFirst = $fields.eq( 0 ),
      validator = $fieldsFirst.data( "valid_req_grp" ) ? $fieldsFirst.data( "valid_req_grp" ) : $.extend( {}, this ),
      isValid = $fields.filter( function() {
        return validator.elementValue( this );
      } ).length >= options[ 0 ];
    $fieldsFirst.data( "valid_req_grp", validator );
    if ( !$( element ).data( "being_validated" ) ) {
      $fields.data( "being_validated", true );
      $fields.each( function() {
        validator.element( this );
      } );
      $fields.data( "being_validated", false );
    }
    return isValid;
  }, $.validator.format( "Please fill at least {0} of these fields." ) );
$(function() {
  var $container = $('.js-index');
  $container.find('');
});