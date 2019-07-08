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