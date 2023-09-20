$(() => {
  // --- 반응형 resize --- //
  const bgControl = () => {
    if (window.innerWidth <= 1024) {
      $('.gnb_bg').css('left', '-100%');
      $('.gnb_box>ul>li>.sub').css('display', 'none');
    } else {
      $('.gnb_bg').css('left', 0);
      $('.gnb_box>ul>li>.sub').css('display', 'block');
    }
    if (window.innerWidth <= 601) {
      $('#shop #shopBtn').css('display', 'none');
    } else {
      $('#shop #shopBtn').css('display', 'block');
    }
  };
  bgControl();
  $(window).resize(() => {
    bgControl();
  });

  // --- 반응형 resize 종료 --- //

  // --- header --- //

  $('.gnb_list').on('mouseenter', () => {
    if (window.innerWidth > 1024) {
      $('#main_header').css('background', 'rgba(20, 20, 20, 0.95)');
      $('#main_header').css('borderBottom', 'solid 2px #fff');
      $('.gnb_bg').stop().fadeIn();
    }
  });
  $('.gnb_list').on('mouseleave', () => {
    if (window.innerWidth > 1024) {
      $('#main_header').css('background', 'rgba(0,0,0,0)');
      $('#main_header').css('borderBottom', 'solid 2px #888');
      $('.gnb_bg').stop().fadeOut();
    }
  });

  $('.toggle').click((e) => {
    if (window.innerWidth <= 601) {
      if (!$(e.currentTarget).hasClass('active')) {
        $('.gnb').css('left', 0);
        $('.gnb_bg').fadeIn(400).css('left', 0);
        $(e.currentTarget).addClass('active');
      } else {
        $('.gnb').css('left', '100%');
        $('.gnb_bg').fadeOut(400).css('left', '-100%');
        $(e.currentTarget).removeClass('active');
      }
    } else if (window.innerWidth <= 1024) {
      if (!$(e.currentTarget).hasClass('active')) {
        $('.gnb').css('left', '60%');
        $('.gnb_bg').fadeIn(400).css('left', 0);
        $(e.currentTarget).addClass('active');
      } else {
        $('.gnb').css('left', '100%');
        $('.gnb_bg').fadeOut(400).css('left', '-100%');
        $(e.currentTarget).removeClass('active');
      }
    }
  });
  $('.gnb_box > ul > li > a').on('click', (e) => {
    e.preventDefault();
    if (window.innerWidth <= 1024) {
      if ($(e.currentTarget).next().css('display') == 'none') {
        $('.gnb_box>ul>li>.sub:visible').slideUp();
        $(e.currentTarget).next().slideDown();
      } else {
        $(e.currentTarget).next().slideUp();
      }
    }
  });

  // --- header 종료 --- //

  // --- main_banner jQuery --- //
  const btnList = $('.mbanner_btnlist>li');
  let choice = 0;
  let index = 1;
  let changeNum = 0;
  btnList.eq(0).find('strong').css('opacity', 0.5);
  btnList.eq(0).find('.gage2').animate(
    {
      width: '0px',
    },
    5000,
    'linear'
  );
  for (let i = 0; i < btnList.length; i++) {
    const btn = btnList.eq(i).find('a');
    btn.on('click', (e) => {
      e.preventDefault();
      index = $(e.currentTarget).parent().index();
      if (choice != index) {
        choice = index;
        $('.banner_box>div').stop().fadeOut();
        $('.banner_box>div').eq(index).stop().fadeIn();
        btnList.find('strong').css('opacity', 1);
        btnList.find('.gage2').stop().css('width', '55px');
        $(e.currentTarget).find('strong').css('opacity', 0.7);
        $(e.currentTarget).find('.gage2').stop().animate(
          {
            width: '0px',
          },
          5000,
          'linear'
        );
        clearInterval(bChange);
        bChange = setInterval(bannerChange, 5000);
        changeNum = index;
      }
    });
  }
  const bannerChange = () => {
    choice++;
    changeNum++;
    if (changeNum >= btnList.length) {
      changeNum = 0;
    }
    $('.banner_box>div').stop().fadeOut();
    $('.banner_box>div').eq(changeNum).stop().fadeIn();
    btnList.find('strong').css('opacity', 1);
    btnList.find('.gage2').stop().css('width', '55px');
    btnList.eq(changeNum).find('strong').css('opacity', 0.7);
    btnList.eq(changeNum).find('.gage2').stop().animate(
      {
        width: '0px',
      },
      5000,
      'linear'
    );
  };
  let bChange = setInterval(bannerChange, 5000);

  // --- main_banner jQuery 종료 --- //

  // --- slide Text jQuery --- //
  slideToggle = 0;
  itemToggle = 0;
  eventToggle = 0;
  shopToggle = 0;
  ftBgToggle = 0;
  $(window).on('scroll', (e) => {
    const jqScrollPer = ($(window).scrollTop() / $(window).height()) * 100;
    if (jqScrollPer >= 150) {
      if (slideToggle == 0) {
        $('#slide_text>.innerbox').stop().fadeIn(1000);
        slideToggle = 1;
      }
    } else {
      if (slideToggle == 1) {
        $('#slide_text>.innerbox').stop().fadeOut(800);
        slideToggle = 0;
      }
    }
    if (jqScrollPer >= 350) {
      if (itemToggle == 0) {
        $('#apple_items>ul').stop().slideDown(400);
        itemToggle = 1;
      }
    } else {
      if (itemToggle == 1) {
        $('#apple_items>ul').stop().slideUp(400);
        itemToggle = 0;
      }
    }
    // --- slide Text jQuery 종료 --- //

    // --- shop category jQuery --- //

    if (jqScrollPer >= 900) {
      if (shopToggle == 0) {
        $('#shop .items').eq(0).stop().show();
        $('#shop .category a').not($('#shop .category a').eq(0)).removeClass('on');
        $('#shop .category a').eq(0).addClass('on');
        if (window.innerWidth > 601) {
          $('#shop #shopBtn').stop().fadeIn(800);
        }
        shopToggle = 1;
      }
    } else {
      if (shopToggle == 1) {
        $('#shop .items').stop().fadeOut();
        if (window.innerWidth > 601) {
          $('#shop #shopBtn').stop().fadeOut(200);
        }
        shopToggle = 0;
      }
    }

    // --- shop category jQuery 종료 --- //

    if (jqScrollPer >= 1000) {
      if (ftBgToggle == 0) {
        $('#main_footer > .ft_bg').stop().fadeIn();
        ftBgToggle = 1;
      }
    } else {
      if (ftBgToggle == 1) {
        $('#main_footer > .ft_bg').stop().fadeOut();
        ftBgToggle = 0;
      }
    }
  });

  // --- brand event jQuery --- //

  const imgChange = () => {
    for (i = 0; i < $('.swiper-wrapper a').length; i++) {
      const imgSrc = `img/sale/sale${i + 1}.png`;
      $('.swiper-wrapper a').eq(i).find('img').attr('src', imgSrc);
    }
  };
  const imgChangeM = () => {
    for (i = 0; i < $('.swiper-wrapper a').length; i++) {
      const imgSrc = `img/sale/sale${i + 1}_m.png`;
      $('.swiper-wrapper a').eq(i).find('img').attr('src', imgSrc);
    }
  };
  if (window.innerWidth <= 601) {
    imgChangeM();
  }
  $(window).on('resize', () => {
    if (window.innerWidth <= 601) {
      imgChangeM();
    } else {
      imgChange();
    }
  });

  // --- brand event jQuery 종료 --- //

  // --- shop category jQuery --- //
  $('#shop .category a').click((e) => {
    const indexNum = $(e.currentTarget).parent('li').index();
    $('#shop .category a').not($(e.currentTarget)).removeClass('on');
    $(e.currentTarget).addClass('on');
    $('#shop .items').not($('#shop .items').eq(indexNum)).stop().fadeOut();
    $('#shop .items').eq(indexNum).stop().show();
    $('#shop #shopBtn span').removeClass('on');
    $('#shop > .shop_box > .items').removeClass('on');
  });
  $('#shop #shopBtn').click((e) => {
    if ($('#shop #shopBtn span').hasClass('on')) {
      $('#shop #shopBtn span').removeClass('on');
      $('#shop > .shop_box > .items').removeClass('on');
    } else {
      $('#shop #shopBtn span').addClass('on');
      $('#shop > .shop_box > .items').addClass('on');
    }
  });
  // --- shop category jQuery 종료 --- //
});

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};
// javascript //

// --- main_banner js --- //

appleToggle = 0;
appleTextTog = 0;
brandEventTog = 0;
window.addEventListener('scroll', (e) => {
  const mBanner_sect = document.querySelector('#main_banner');
  const mBanner = document.querySelector('#main_banner>.banner_box');
  const scrollIc = document.querySelector('#scroll');
  const slideText = document.querySelectorAll('#slide_text>.innerbox>p');
  const scrollPo = window.scrollY;
  const clientHe = document.documentElement.clientHeight;
  const scrollPer = (scrollPo / clientHe) * 100;
  if (scrollPer >= 50) {
    scrollIc.classList.add('hidden');
  } else {
    scrollIc.classList.remove('hidden');
  }

  if (scrollPer >= 149) {
    mBanner.classList.add('hidden');
  } else {
    mBanner.classList.remove('hidden');
  }
  // --- slide Text --- //

  slideText.forEach((txt) => {
    if (scrollPer >= 151 && scrollPer <= 349) {
      const startPo = 0;
      const slideTextAreaH = document.querySelector('#slide_text').clientHeight;
      const scrollIncre = ((scrollPer - 151) / slideTextAreaH) * 150;
      const newPo = startPo + scrollIncre;
      if (txt.classList.contains('left')) {
        txt.style.transform = `translateX(-${newPo}%)`;
      } else if (txt.classList.contains('right')) {
        txt.style.transform = `translateX(${newPo}%)`;
      }
      txt.classList.remove('hidden');
    } else if (scrollPer >= 350) {
      txt.classList.add('hidden');
    }
  });
  // --- slide Text 종료 --- //

  // --- apple items ---//
  const appleItems = document.querySelector('#apple_items>ul');
  const appleSales = document.querySelector('#apple_sale>.innerbox');
  const saleText = appleSales.querySelector('.sale_text');
  const leftIncre = (scrollPer - 460).toFixed(0);

  if (scrollPer >= 360 && scrollPer < 460) {
    saleText.style.left = -((scrollPer - 360) / 2) + 10 + 'px';
    if (appleTextTog == 0) {
      appleTextTog = 1;
    }
  } else if (scrollPer < 360) {
    saleText.style.left = '3px';
    if (appleTextTog == 1) {
      appleTextTog = 0;
    }
  } else if (scrollPer >= 460) {
    saleText.style.left = '-40px';
    if (appleTextTog == 1) {
      appleTextTog = 0;
    }
  }
  if (scrollPer >= 460 && scrollPer < 660) {
    appleItems.style.transition = 'none';
    appleSales.style.transition = 'none';
    appleItems.style.left = `calc(50% - (${leftIncre}%))`;
    appleSales.style.left = `calc(200% - (${leftIncre}%))`;
    if (appleToggle == 1) {
      appleToggle = 0;
    }
  } else if (appleToggle == 0) {
    appleItems.style.transition = `left 0.4s`;
    if (scrollPer < 460) {
      appleItems.style.left = `50%`;
      appleSales.style.left = `200%`;
      appleToggle = 1;
    } else if (scrollPer >= 700) {
      appleSales.style.transition = `left 1s`;
      appleItems.style.left = `-100%`;
      appleSales.style.left = `-100%`;
      appleToggle = 1;
    }
  }
  if (scrollPer >= 660 && scrollPer < 700 && appleToggle == 1) {
    appleSales.style.transition = `left 0.4s, transform 0.4s`;
    appleItems.style.left = `-100%`;
    appleSales.style.left = `-100%`;
    appleSales.style.transform = `translateX(0)`;
  } else {
    appleSales.style.transform = `translateX(-50%)`;
  }

  // --- apple items 종료 ---//

  const sectBanner = document.querySelectorAll('#section_banner>div');
  sectBanner.forEach((banner) => {
    if (scrollPer >= 700 && scrollPer < 800) {
      banner.classList.add('on');
    } else {
      banner.classList.remove('on');
    }
  });
  const brandEvent = document.querySelector('#brand_event > .innerbox');
  if (scrollPer >= 800 && scrollPer < 900) {
    brandEvent.classList.add('on');
    brandEvent.querySelector('h2').style.top = '-2vw';
    brandEventTog = 1;
  } else {
    brandEvent.classList.remove('on');
    brandEvent.querySelector('h2').style.top = '5vw';
    brandEventTog = 0;
  }

  const brandShop = document.querySelector('#shop > .shop_box');
  const ftBg = document.querySelector('#main_footer > .ft_bg');
  if (scrollPer >= 900 && scrollPer < 1000) {
    brandShop.classList.add('on');
    brandShop.classList.remove('ft_on');
  } else if (scrollPer >= 1000) {
    brandShop.classList.remove('on');
    brandShop.classList.add('ft_on');
  } else {
    brandShop.classList.remove('on');
  }

  // --- fullGage --- //

  const fullGageBar = document.querySelector('#fullGage');
  const fullHe = document.documentElement.offsetHeight;
  const fullGageArea = (scrollPo / (fullHe - clientHe)) * 100;
  fullGageBar.style.width = fullGageArea + '%';

  // --- fullGage 종료 --- //
});
// --- main_banner js 종료 --- //
var swiper;
swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  enabled: 1,
  initialSlide: 3,
  coverflowEffect: {
    rotate: 4,
    stretch: 157,
    depth: 220,
    modifier: 1,
    slideShadows: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});
const swiperChange1 = () => {
  swiper.destroy();
  swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    enabled: 1,
    initialSlide: 3,
    coverflowEffect: {
      rotate: 4,
      stretch: 157,
      depth: 220,
      modifier: 1,
      slideShadows: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
  });
};
const swiperChange2 = () => {
  swiper.destroy();
  swiper = new Swiper('.mySwiper', {
    effect: 'cards',
    grabCursor: true,
    initialSlide: 3,
  });
};
if (window.innerWidth > 1024) {
  swiperChange1();
} else {
  swiperChange2();
}
let swiperToggle = 0;
window.addEventListener('resize', () => {
  const shadowAll = document.querySelector('.swiper-slide-shadow');
  const shadowLeft = document.querySelector('.swiper-slide-shadow-left');
  const shadowRight = document.querySelector('.swiper-slide-shadow-right');
  if (window.innerWidth > 1024) {
    if (swiperToggle == 0) {
      swiperChange1();
      swiperToggle = 1;
    }
  } else {
    if (swiperToggle == 1) {
      swiperChange2();
      swiperToggle = 0;
    }
  }
});
