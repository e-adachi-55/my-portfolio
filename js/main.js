
	// ウィンドウを開く
	$( '.js-modal-open' ).each( function() {
		$( this ).on( 'click', function() {
			var target = $( this ).data( 'target' );
			var modal = document.getElementById( target );
			$( modal ).fadeIn( 300 );
			return false;
		});
	});

	// ウィンドウを閉じる
	$( '.js-modal-close' ).on( 'click', function() {
		$( '.js-modal' ).fadeOut( 300 );
		return false;
	});

	$(window).on("scroll", function() {
		//フェードイン
		$('[data-fadeIn]').each(function(index, el) {
			if( $(window).scrollTop() > ( $(el).offset().top - $(window).height() / 2 ) ){
				$(el).addClass('is-over');
			}
		});
	});

	$(function() {
        //スムーズスクロール
        let runScroll = function() {
            $('a[href^="#"]').click(function() {
                let speed = 400;
                let href = $(this).attr("href");
                let $target = $(href == "#" || href == "" ? 'html' : href);
                let position = $target.offset().top - 100;

                $('body,html').animate({
                    scrollTop: position
                }, speed, 'swing');
                return false;
            });
        };

        // ハンバーガーメニューチェックボックス外す処理
        let unlockCheckBox = function() {
            let $trigger = $('.header__navi a');
            let $target = $('input[type="checkbox"]');

            $trigger.click(function() {
                $target.prop('checked', false);
            });
        };
		// Document Ready
            runScroll();
            unlockCheckBox();

		//モーダルを表示したときの背景を固定する
		var scrollPosition;
		$('.js-modal-open').on("click", function() {
			scrollPosition = $(window).scrollTop();
			$('body').addClass('fixed').css({'top': -scrollPosition});
		});
		$('.js-modal-close').on("click", function() {
			$('body').removeClass('fixed').css({'top': 0});
			window.scrollTo( 0 , scrollPosition );
		});	
    });

