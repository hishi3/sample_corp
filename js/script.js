$( function() {

     // headerをスクロールすると、色が変わる
  jQuery(window).on('scroll', function () {
    if (jQuery('.main-visual').height() < jQuery(this).scrollTop()) {
        jQuery('.header').addClass('add-scrolled');
    } else {
        jQuery('.header').removeClass('add-scrolled');
    }
  });

  // header__navのアンダーライン
  jQuery('.header__nav__item__link ').click(function() {
    jQuery('.header__nav__item__link ').removeClass( 'is-active' );
    jQuery(this).addClass( 'is-active' );
    return false;
  });

  // drawer
  $(function() {
    $('.drawer').drawer()
  })

  $(document).ready(function() {
    $('.drawer').drawer();
    $('.header__nav__item__link').on('click', function() {
        $('.drawer').drawer('close');
    });
  });
  

  // #から始まるURLがクリックされた時
  $('a[href^="#"]').click(function() {
    // 移動速度を指定
    let speed = 300;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // .headerクラスがついた要素の高さを取得
    let header = jQuery("header").innerHeight();
    // トップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません
    $("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });

 // results
  new Swiper( '.swiper-container', {
    speed: 400,
    spaceBetween: 40,
    width: 400,
    loop: true,
    loopedSlides: 6,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
        spaceBetween: 24,
        width: 274,
      }
    }
  });

 //Q&A
  $( '.qa__item__question' ).on( 'click', function() {
    $( this ).next().slideToggle(300);
    $( this ).toggleClass( 'add-active' );
  });

  // プライバシーポリシー
  $( '#form__privacy' ).on( 'change', function() {
    privacyFlg =  ( $( this ).prop( 'checked' ) ? true : false );
    setSubmitProp();
  });

  // googleform
  let $form = $('#js-form')
  $form.submit(function(e){
    $.ajax({
      url: $form.attr('action'),
      data: $form.serialize(),
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function(){
          //送信に成功した時の処理
          $form.slideUp();
          $('#js-success').slideDown();
        },
        200: function(){
          //送信に失敗した時の処理
          $form.slideUp();
          $('#js-error').slideDown();
        }
      }
    });

    return false;
  });
  
  //formの入力確認
  let $submit = $('#js-submit');
  $('#js-form input,#js-form textarea').on('change',function(){
    if(
      $('#js-form input[type="text"]').val() !=="" &&
      $('#js-form input[name="entry.1997177122"]').prop('checked') === true
    ){
      //全て入力された時
      $submit.prop('disabled', false);
      $submit.addClass('-active');
    }else{
      //入力されていない時
      $submit.prop('disabled', true);
      $submit.removeClass('-active')
    }
  })

})

