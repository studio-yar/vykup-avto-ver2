$(document).ready(function() {
	
	 $("a.scroll").on("click", function(e) {
        if ($('body').width() < 769 && $(this).parent().is('.main-menu li')) {
            $('.navbar').trigger('click');
        }
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 130
        }, 777);

        e.preventDefault();
        return false;
    });
	
	$('.popup').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#name',
            removalDelay: 160,
            modal: true
    });
	
    $(document).on('click', '.popup-close, .modal-form-close', function (e) {
    	e.preventDefault();
    	$(this).closest('.mfp-content').find('form')[0].reset();
    	$(this).closest('.mfp-content').find('.not_validate').removeClass('not_validate');
    	$(this).closest('.mfp-content').find('.fullStar').removeClass('fullStar');
        $.magnificPopup.close();
	});
	
	 $('.navbar').on('click', function() {
        if ($(this).is('.active')) {
            $(this).removeClass('active');
            $(this).parent().find('img.close').hide();
            $(this).parent().find('img.open').show();
            $('.header-bottom').hide();
        } else {
            $('.header-bottom').show();
            $(this).addClass('active');
            $(this).parent().find('img.open').hide();
            $(this).parent().find('img.close').show();
        }
    });
	
	var $topblock = $(".header-bottom");
	 $(window).scroll(function(){
            if ( $(this).scrollTop() > 163 && $topblock.hasClass("fixed") ){
            	if($('body').width() < 820) {
            		$topblock.removeClass("fixed");
            	} else {
            		$topblock.removeClass("fixed").addClass("default").slideToggle();
            	}
            } else if($(this).scrollTop() <= 163 && $topblock.hasClass("default")) {
            	$topblock.removeClass("default").addClass("fixed").slideToggle();
            }
        });//scroll
	
	
	$(function(){
  		$("#phone, #phone1, #phone2").mask("+7(999) 999-9999");
	});
	$("#marks1, #marks2").select2({
		placeholder: 'Марка*',
		width: '100%',
	});
	$("#models1, #models2").select2({
		placeholder: 'Модель',
		width: '100%',
	});
	$("#year1, #year2").select2({
		placeholder: 'Год выпуска',
		width: '100%',
	});
	
	(function($) {
        $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
                $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
            });
        });
    })(jQuery);
	
	$('#marks-section .btn-show').click(function(e){
		e.preventDefault();
		$('.marks-item').removeClass('not-active');
		$('.marks-block').addClass('opened');
		$(this).hide();
		$('#marks-section .btn-hide').show();
	});
	
	$('#marks-section .btn-hide').click(function(e){
		e.preventDefault();
        $('.marks-item').each(function (a,b) {
            if(a > 9) {
                console.log(a);
                $(this).addClass('not-active');
            }
        });
        $('.marks-block').removeClass('opened')
		$(this).hide();
		$('#marks-section .btn-show').show();
		$('html, body').animate({
        	scrollTop: $("#marks-section").offset().top - 100
        }, 300);
	});
	
	
	if($('body').width() > 1025) {
		$('.marks-item, .allmarks-item').on('click',function(){

            $('#models2').prop("disabled", false);
			if ($('#marks2').find("option[value='" + $(this).attr('data-val') + "']").length) {
				$('#marks2').val($(this).attr('data-val')).trigger('change');
				$('html, body').animate({
						scrollTop: $("#form-section").offset().top - 100
				}, 300);
				$('#models2').select2('open');
			} else {
				$('#marks2').select2('open');
				$('html, body').animate({
						scrollTop: $("#form-section").offset().top - 100
				}, 300);
			}
		});	
	}
	if($('body').width() < 1025) {

    $('.marks-item').click(function(){

        $('#models2').prop("disabled", false);
        if($(this).hasClass('show-name')) {
                if ($('#marks2').find("option[value='" + $(this).attr('data-val') + "']").length) {
          $('#marks2').val($(this).attr('data-val')).trigger('change');
          $('html, body').animate({
            scrollTop: $("#form-section").offset().top - 100
          }, 300);
          $('#models2').select2('open');
                } else {
          			$('#marks2').select2('open');
					$('html, body').animate({
						scrollTop: $("#form-section").offset().top - 100
				}, 300);
        }
            } else {
				$('#marks2').select2('close');
                $('#models2').select2('close');
                $('#year2').select2('close');
                $('.marks-item').removeClass('show-name');
                $('.mark-name').removeClass('active');
                $(this).addClass('show-name');
                $(this).find('.mark-name').toggleClass('active');
            }

    });
  }
	
	$('#examples .btn-more').click(function(e){
		e.preventDefault();
		$('.examples-item.not-active').each(function(a,b){
		    if($('body').width() < 631) {
                if(a<2){
                    $(this).removeClass('not-active');
                }
            } else {
                if(a<3){
                    $(this).removeClass('not-active');
                }
            }
		});
        if($('.examples-item.not-active').length == 0) {
            $('#examples .btn-more').hide();
            $('#examples .btn-hide').show();
        }
	});
	
	$('#examples .btn-hide').click(function(e){
		e.preventDefault();
		$('.examples-item').each(function(a,b){
		    if($('body').width() < 631) {
                if(a>1){
                    $(this).addClass('not-active');
                }
            } else {
                if(a>2){
                    $(this).addClass('not-active');
                }
            }
		});
        $('#examples .btn-more').show();
        $('#examples .btn-hide').hide();
		$('html, body').animate({
        	scrollTop: $("#examples").offset().top - 100
        }, 300);
	});
	
	if($('body').width()<631) {
		$('.examples-item:nth-child(3)').addClass('not-active');
		$('.clients-reviews-item:nth-child(2)').addClass('not-active');
		
		
	}

    $('#marks1').on('select2:select', function (e) {
        $('#models1').prop("disabled", false);
        $('#models1').select2('open');
    });
    $('#models1').on('select2:select', function (e) {
        $('#year1').prop("disabled", false);
        $('#year1').select2('open');
    });
    $('#marks2').on('select2:select', function (e) {
        $('#models2').prop("disabled", false);
        $('#models2').select2('open');
    });
    $('#models2').on('select2:select', function (e) {
        $('#year2').prop("disabled", false);
        $('#year2').select2('open');
    });
	
    $('.examples-item').each(function() {
        var height = $('.examples-item').height();
        $(this).hover(function () {
                var height_new = $(this).find('.examples-item__body__hidden').outerHeight() + height + 25;
                $(this).css('height', height);
                $(this).find('.layer').css('height',height_new);
        },function () {
                $(this).css('height',height);
                $(this).find('.layer').css('height',height);
        });
    });
	
	$('#reviews .btn-show').click(function(e) {
		e.preventDefault();
		
		if($('.clients-reviews-item.not-active').length > 0) {
			$('.clients-reviews-item.not-active').each(function(a,b) {
				if(a<2) { 
					$(this).removeClass('not-active');
				}
			});
			if($('.clients-reviews-item.not-active').length < 1){
				$('#reviews .btn-show').hide();
				$('#reviews .btn-hide').show();
			}
		} else {
			$('#reviews .btn-show').hide();
			$('#reviews .btn-hide').show();
		}

	});
	$('#reviews .btn-hide').on('click',function(e){
		e.preventDefault();
		
		$('.clients-reviews-item').each(function(a,b) {
			if (a>1) {
				$(this).addClass('not-active');
			}
		});
		$('#reviews .btn-hide').hide();
		$('#reviews .btn-show').show();
		$('html, body').animate({
                    scrollTop: $("#reviews").offset().top - 100
            }, 300);
	})
	
	$('#questions .btn-more').click(function(e){
		e.preventDefault();
		$('.questions-block-item').removeClass('not-active');
		$('#questions .btn-hide').show();
		$('#questions .btn-show').hide();
	});
	$('#questions .btn-hide').click(function(e){
		e.preventDefault();
		
		$('.questions-block-item').each(function(a,b) {
			if (a>4) {
				$(this).addClass('not-active');
			}
		});
		$('#questions .btn-hide').hide();
		$('#questions .btn-show').show();
		$('html, body').animate({
                    scrollTop: $("#questions").offset().top - 100
            }, 300);
	});
	
	$(".questions-block-item__title").on('click',function () {
        $(this).siblings(".questions-block-item__answer").slideToggle("slow");
		if($(this).is('.active')){
			$(this).removeClass('active');
			$(this).parent().find('img.up').hide();
            $(this).parent().find('img.down').show();
		} else {
			$(this).addClass('active');
            $(this).parent().find('img.down').hide();
            $(this).parent().find('img.up').show();
		}
		$(this).toggleClass('opened');
     });
	
	
	$('.raiting').rating();
	
	var myMap;

	ymaps.ready(init);

	function init () {
        var myMap = new ymaps.Map('map', {
            center: [55.82, 37.63],
            zoom: 10.1,
            type: 'yandex#map',
            controls: ['fullscreenControl']
        });
		if($('body').width() < 480) {
            console.log(123);
            myMap.setCenter([55.82, 37.49]);
		}

				myMap.behaviors.disable('scrollZoom');

	var ctrlKey = false;
	var ctrlMessVisible = false;
	var timer;
		
	var myGeocoder = ymaps.geocode("Москва, Большая Тульская улица, 2");
        myGeocoder.then(function (res) {
            var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
            myMap.geoObjects
                .add(new ymaps.Placemark(coordinates, {
                    balloonContent: 'г. Москва, Большая Тульская улица, 2'
                }));
        });
		
	var myGeocoder = ymaps.geocode("Москва, Шенкурский проезд, 3Б");
        myGeocoder.then(function (res) {
            var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
            myMap.geoObjects
                .add(new ymaps.Placemark(coordinates, {
                    balloonContent: 'г. Москва, Шенкурский проезд, 3Б'
                }));
        });

	// Отслеживаем скролл мыши на карте, чтобы показывать уведомление
	myMap.events.add(['wheel', 'mousedown'], function(e) {
		if (e.get('type') == 'wheel') {
			if (!ctrlKey) { // Ctrl не нажат, показываем уведомление
				$('#ymap_ctrl_display').fadeIn(300);
				ctrlMessVisible = true;
				clearTimeout(timer); // Очищаем таймер, чтобы продолжать показывать уведомление
				timer = setTimeout(function() {
					$('#ymap_ctrl_display').fadeOut(300);
					ctrlMessVisible = false;
				}, 1500);
			}
			else { // Ctrl нажат, скрываем сообщение
				$('#ymap_ctrl_display').fadeOut(100);
			}
		}
		if (e.get('type') == 'mousedown' && ctrlMessVisible) { // Скрываем уведомление при клике на карте
			$('#ymap_ctrl_display').fadeOut(100);
		}
	});

	// Обрабатываем нажатие на Ctrl
	$(document).keydown(function(e) {
		if (e.which === 17 && !ctrlKey) { // Ctrl нажат: включаем масштабирование мышью
			ctrlKey = true;
			myMap.behaviors.enable('scrollZoom');
		}
	});
	$(document).keyup(function(e) { // Ctrl не нажат: выключаем масштабирование мышью
		if (e.which === 17) {
			ctrlKey = false;
			myMap.behaviors.disable('scrollZoom');
		}
	});
	}

});
$(document).ready(function() {
   // var maxFileSize = 2 * 1024 * 1024; // (байт) Максимальный размер файла (2мб)
    var queue = {};
    var imageID = 0;
    var getIndexImg = function() {
        imageID = $(this).index();
    }

    function deleteImg(array, index, obj, sel) {
        var nodes = [].slice.call(array);
        nodes.splice(index, 1);
        $(obj).children().remove();

        for (var i = 0; i <= nodes.length; i++) {
            var div = document.createElement('div');
            div = nodes[i];
            $(obj).append(div);
        }
        $(obj).children().text();
		if(array.length == 0) {
			sel.parent().find('.label').show();
			sel.parent().find('.image').show();
			sel.parent().find('.name').show();
		}
		if(array.length == 7) {
			sel.parent().find('.image').show();
		}
		if(array.length < 8) {
			sel.removeClass('full');
		}
		if(array.length < 5) {
			sel.parent().parent().parent().parent().parent().find('.check-block').removeClass('active');
			sel.parent().parent().parent().parent().parent().parent().parent().find('.submit-block').removeClass('active');
		}
    }
    $('.result').click(function(e) {
        e.preventDefault();
        var imageArray = this.childNodes;
        deleteImg(imageArray, imageID, this, $(this));

    });
    var imagesList = $('#first-screen .form-block_attach-field .result');
    var imagesList2 = $('#form-section .form-block_attach-field .result');
    var imagesList3 = $('#leave_review .form-block_attach-field .result');

    // Вычисление лимита
    function limitUpload() {
        return 8 - imagesList.children().length;
    }

    function limitUpload2() {
        return 8 - imagesList2.children().length;
    }

    function limitUpload3() {
        return 8 - imagesList3.children().length;
    }
    // Отображение лимита
    function limitDisplay() {
        var sTxt;
        switch (limitUpload()) {
            case 8:
                sTxt = '+ (можно добавить ' + limitUpload() + ' изображений)';
                break;
            case 0:
                alert('Нельзя больше добавить - достигнут лимит');
                break;
            default:
                sTxt = '+ (можно добавить ещё ' + limitUpload() + ')';
        }
    }
    // Отображение лимита
    function limitDisplay2() {
        let sTxt;
        switch (limitUpload2()) {
            case 8:
                sTxt = '+ (можно добавить ' + limitUpload2() + ' изображений)';
                break;
            case 0:
                alert('Нельзя больше добавить - достигнут лимит');
                break;
            default:
                sTxt = '+ (можно добавить ещё ' + limitUpload2() + ')';
        }
    }
    // Отображение лимита
    function limitDisplay3() {
        let sTxt;
        switch (limitUpload3()) {
            case 8:
                sTxt = '+ (можно добавить ' + limitUpload3() + ' изображений)';
                break;
            case 0:
                alert('Нельзя больше добавить - достигнут лимит');
                break;
            default:
                sTxt = '+ (можно добавить ещё ' + limitUpload3() + ')';
        }
    }

    $('#first-screen .pick-file input').on('change', function() {
        var files = this.files;
        // $('#first-screen .result').html('');
        // Перебор файлов до лимита
		var k = 0;
        for (var i = 0; i < limitUpload(); i++) {
            var file = files[i];
            if (file) {
				k++;
                if (!file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
                    alert('Фотография должна быть в формате jpg, png или gif');
                    continue;
                }
                /*if (file.size > maxFileSize) {
                    alert('Размер фотографии не должен превышать 2 Мб');
                    continue;
                }*/
                renderImage(file, '#first-screen .result', i);
            }
        }
        $('#first-screen .form-block_attach-field span.label .name').hide();
        imagesList.show();
		var count = 0;
		count = $('#first-screen .result .result-pic').length + k;
		if(count == 8) {
			$('#first-screen .form-block_attach-field span.label .image').hide();
			$('#first-screen .result').addClass('full');
		} else {
			$('#first-screen .result').removeClass('full');
		}
        this.value = '';
    });

    $('#form-section .pick-file input').on('change', function() {
        var files = this.files;
        // Перебор файлов до лимита
		var k = 0;
        for (var i = 0; i < limitUpload2(); i++) {
            var file = files[i];
            if (file) {
				k++;
                if (!file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
                    alert('Фотография должна быть в формате jpg, png или gif');
                    continue;
                }
                /*if (file.size > maxFileSize) {
                    alert('Размер фотографии не должен превышать 2 Мб');
                    continue;
                }*/
                renderImage(file, '#form-section .result', i);
            }
        }
        $('#form-section .form-block_attach-field span.label .name').hide();
		/*if(d > 4) {
			$('#form-section .check-block').addClass('active')	;
		}*/
        imagesList2.show();
		var count = 0;
		count = $('#form-section .result .result-pic').length + k;
		if(count == 8) {
			$('#form-section .form-block_attach-field span.label .image').hide();
			$('#form-section .result').addClass('full');
		} else {
			$('#form-section .result').removeClass('full');
		}
		if (count > 4) {
			$('#form-section .check-block').addClass('active');
			$('#form-section .submit-block').addClass('active');
		} else {
			$('#form-section .check-block').removeClass('active');
			$('#form-section .submit-block').removeClass('active');
		}
        this.value = '';
    });


    $('#leave_review .pick-file input').on('change', function() {
        var files = this.files;
        // Перебор файлов до лимита
		var k = 0;
        for (var i = 0; i < limitUpload3(); i++) {
            var file = files[i];
            if (file) {
				k++;
                if (!file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
                    alert('Фотография должна быть в формате jpg, png или gif');
                    continue;
                }
                /*if (file.size > maxFileSize) {
                    alert('Размер фотографии не должен превышать 2 Мб');
                    continue;
                }*/
                renderImage(file, '#leave_review .result', i);
            }
        }
        $('#leave_review .form-block_attach-field span.label').hide();
        imagesList3.show();
		var count = 0;
		count = $('#leave_review .result .result-pic').length + k;
		if(count == 8) {
			$('#leave_review .form-block_attach-field span.label .image').hide();
		}
        this.value = '';
    });

    function renderImage(file, block, n) {
        var reader = new FileReader();
        reader.onload = function(event) {
            the_url = event.target.result;
            // console.log(the_url);
            var div = document.createElement('div');
            div.classList.add('result-pic');
            var img = document.createElement('img');
            img.src = the_url;

            div.append(img);
            div.addEventListener('click', getIndexImg);
            $(block).append(div);
        }
        reader.readAsDataURL(file);
    }

    limitDisplay3();
    limitDisplay2();
    limitDisplay();
});


$('.form button[type=button]').on('click',function(e){
    e.preventDefault();
    var validate = true;

  if(!$(this).closest('.form').find('input[type=checkbox]').is(":checked")) {
      $(this).closest('.form').find('.check').addClass('not_validate');
      validate = false;
  }
  $(this).closest('.form').find('select[required]').each(function (a,b) {
      if(!$(this).is(':disabled')) {
          if($(this).val().length  <1) {
              var id_val = $(this).attr('id');
              $('#select2-'+id_val+'-container').closest('.select2-container').addClass('not_validate');
              $('#select2-'+id_val+'-container span').addClass('not_validate');
              validate = false;
          }
      }
  })
  $(this).closest('.form').find('input[required]').each(function (a,b) {
      if($(this).val().length  <1) {
          $(this).addClass('not_validate');
          validate = false;
      }
  })
  $(this).closest('.form').find('textarea[required]').each(function (a,b) {
      if($(this).val().length  <1) {
          $(this).addClass('not_validate');
          validate = false;
      }
  })

  if(validate) {
      $(this).closest('.form').find('.hidden-submit').trigger('click');
  }

});

$('body').on('click','.not_validate',function () {
    $(this).removeClass('not_validate');
});
$('select').on('select2:open',function () {
    $(this).parent().find('.not_validate').removeClass('not_validate');
});

$('input[type=checkbox]').on('change',function(){
	$('.c-check .check').css('box-shadow', '0px 0px 22.5px 2.5px rgba(1, 21, 45, 0.25)');
});

if($('body').width() < 1025) {
    $('.examples-item').on('click',function() {
        if($(this).is('.active_mobile')) {
            $(this).toggleClass('active_mobile');
            $(this).find('.layer').toggleClass('active_mobile');
        } else {
            $('.examples-item').removeClass('active_mobile');
            $('.examples-item').find('.layer').removeClass('active_mobile');
            $(this).toggleClass('active_mobile');
            $(this).find('.layer').toggleClass('active_mobile');
        }
    });
}

$(document).on('click', '.leave-review', function (e) {
        $('.options-review-item').each(function (a,b) {
            $(this).find('.stars a[title=5]').trigger('click');
        })
  });

$(document).mouseup(function (e){ 
        var div = $(".marks-block"); 
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) { 
            $('.marks-item').removeClass('show-name')
            $('.mark-name').removeClass('active')
        }
    });