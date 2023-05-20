/*-----скроллстраницы---*/

var btnDown = document.getElementById('sidebar-nav__btn');
var massBlockSectNum = Array.from(document.querySelectorAll('.section'));
//скролл страницы при клике на кнопку
btnDown.addEventListener('click', function(e) {
    var scrollerBlock = document.getElementById('scroller');
    var heightScroll = massBlockSectNum[0].offsetHeight;
    scrollerBlock.scrollBy({ left: 0, top: heightScroll, behavior: 'smooth' });
});

/*--------JQUERY-------*/

$(document).ready(function() {
    /*-------МОБИЛЬНОЕ МЕНЮ-------*/

    $('.header__mobile').click(function() {
        $('.header__nav').toggleClass('active-mobile-menu');
        $('body').toggleClass('hidden');
    });

    /*---------ПРОГРЕСС БАР И БЛОКИ С КОНТЕНТОМ-----*/

    //---количество секций в прогресс баре зависимо от количества блоков
    //находим первую линию в прогрессбаре
    var firstLine = document.getElementById('line1');
    //получаем в массив колличество блоков с контентом
    var massBlockSectNum = Array.from(document.querySelectorAll('.section'));
    //получаем колличество объектов в массиве меньше на 1
    var lenghtMassBlockSectNum = parseInt(massBlockSectNum.length) - 1;
    //добавляем количество секций в прогрессбар в зависимости от количества блоков с контентом
    for (var j = 0; j < lenghtMassBlockSectNum; j++) {
        firstLine.insertAdjacentHTML(
            'afterend',
            '<div class="sidebar-nav__progress-bar-line page-number" data-id="02"><div class="placeholder-page-nav">02 page</div></div>'
        );
    }
    //добавляем линии прогрессбара в массив и выводим количество элементов в массиве
    var massNavLine = [];
    $('.sidebar-nav__progress-bar-line').each(function(index) {
        massNavLine.push(this);
    });
    $.each(massNavLine, function(index, elementLine) {
        $(elementLine).attr('data-id', index + 1);
        var numberPagePlaceholder = index + 1;
        $(elementLine)
            .children('div')
            .text('0' + numberPagePlaceholder + ' page');
        $(elementLine).click(function() {
            $('.active-page-nav').text('0' + numberPagePlaceholder);
        });
    });

    /*-------ПРОГРЕССБАР НАВИГАЦИИ--------*/
    //высота ползунка зависимо от колличества блоков
    var heightFirstLineProgressBar = Math.round($('#line1').outerHeight(true));
    $('#active-line-nav').css('height', heightFirstLineProgressBar);
    //меняем высоту ползунка при изменении окна
    window.addEventListener(
        'resize',
        function() {
            var heightFirstLineProgressBar = Math.round(
                $('#line1').outerHeight(true)
            );
            $('#active-line-nav').css('height', heightFirstLineProgressBar);
        },
        false
    );

    //НАХОДИМ предпоследний элемент массива
    var lastNavLine = massNavLine[massNavLine.length - 1];

    //получаем координаты предпоследнего элемента массива
    var lastNavLinePosition = lastNavLine.offsetTop;

    //получаем размеры ползунка
    var trackNavLineHeight = $('#active-line-nav').outerHeight(true);

    //высчитываем точку для коллизии
    var differenceTrackAndLastPosition = Math.trunc(
        lastNavLinePosition - heightFirstLineProgressBar - 2
    );

    //при клике на кнопку и делаем коллизию с последней секцией
    $('.sidebar-nav__btn').click(function() {
        $('.sidebar-nav__btn').prop('disabled', true);
        //получаем координаты ползунка
        var trackNavLinePosition =
            document.getElementById('active-line-nav').offsetTop;
        //коллизия
        if (trackNavLinePosition >= differenceTrackAndLastPosition) {
            $('.sidebar-nav__btn').prop('disabled', true);
            $('.last-page').css('opacity', '1');
            $('.active-page-nav').css('opacity', '0.3');
        } else {
            setTimeout(function() {
                $('.sidebar-nav__btn').prop('disabled', false);
            }, 1000);
        }
    });
    //смещаем ползунок при клике на кнопку
    $('.sidebar-nav__btn').click(function() {
        $('.active-line-nav').animate({ top: '+=' + trackNavLineHeight + 'px' }, 0);
    });
    //

    //перемещаем ползунок на место клика
    $('.page-number').click(function() {
        var thisElemLinePosition = Math.round($(this).position().top);
        $('.active-line-nav').css('top', thisElemLinePosition);
        //если меняем стили блоков в которых написаны номера страницы в зависимости от положения ползунка
        if (thisElemLinePosition < lastNavLinePosition) {
            $('.active-page-nav').css('opacity', '1');
            $('.last-page').css('opacity', '0.3');
            $('.sidebar-nav__btn').prop('disabled', false);
        } else {
            $('.last-page').css('opacity', '1');
            $('.active-page-nav').css('opacity', '0.3');
            $('.sidebar-nav__btn').prop('disabled', true);
        }
    });
    //

    //-------отображение в прогрессбаре количества листаемых блоков-----
    //создаем массив с блоками контента
    var massBlock = [];
    $('.section').each(function(lenghtBlock) {
        massBlock.push(this);
    });
    //меняем значение количества страниц исходя из колличества блоков
    if (massBlock.length < 10) {
        $('.last-page').text('0' + massBlock.length);
    } else {
        $('.last-page').text(massBlock.length);
    }
    //

    /*----------РАБОТА С БЛОКАМИ КОНТЕНТА----------*/

    //--СКРОЛЛ СТРАНИЦЫ И ПРИВЯЗКА СОЗДАННОГО СКРОЛЛА

    //находим в документе все блоки c контентом и определяем их координаты

    $.each(massBlock, function(index, element) {
        //координаты блока относительно верха документа
        var positionBlockTop = $(element).offset().top;
        //определение виимой секции при скролле
        $('#scroller').scroll(function() {
            //координаты блока относительно верха документа
            var positionBlockTop = $(element).offset().top;
            //коорддинаты относительно верха окна
            var top = 0;
            if (positionBlockTop === top) {
                var activenumberPage = $(element).attr('data-id');
                //получаем значение атрибута видимого блока
                var activeBlockContentOrLineTop = $(element).attr('data-id');
                //обращаемся к массиву прогрессбара с секциями
                //получаем колличество объектов в массиве
                $.each(massNavLine, function(index, elementLine) {
                    //находим все объекты и получаем начения их атрибутов
                    var massAttrSectProgressBar = $(elementLine).attr('data-id');
                    if (activeBlockContentOrLineTop === massAttrSectProgressBar) {
                        //
                        var sectionActivePosition = $(elementLine).position().top;
                        $('.active-line-nav').css('top', sectionActivePosition);
                        $('.sidebar-nav__btn').prop('disabled', true);
                    }
                });
                //
                //---коллизия---
                //если видимый блок крайний в массиве отключаем кнопку листания страниц
                if (activeBlockContentOrLineTop >= massNavLine.length) {
                    $('.sidebar-nav__btn').prop('disabled', true);
                    $('.sidebar-nav__btn').css('opacity', '0.1');
                    $('.last-page').css('opacity', '1');
                    $('.active-page-nav').css('opacity', '0.3');
                } else {
                    $('.active-page-nav').css('opacity', '1');
                    $('.last-page').css('opacity', '0.3');
                    setTimeout(function() {
                        $('.sidebar-nav__btn').css('opacity', '1');
                        $('.sidebar-nav__btn').prop('disabled', false);
                    }, 1000);
                }
                //
                //меняем цифру номера активной страницы
                $('.active-page-nav').text('0' + activenumberPage);
            }
        });
        //

        //-------СМЕЩЕНИЕ БЛОКОВ КОНТЕНТА ПРИ КЛИКЕ НА ПРОГРЕССБАР
        $('#blockLineContainer')
            .children(this)
            .click(function() {
                //при клике на секцию прогрессбара получаем значение атрибута данной секции для дальнейшей связи с блоком контента
                var idLineActive = $(this).attr('data-id');
                //присваиваем в переменную все блоки со значениями аттрибута
                var activeBlockContentOrLineTop = $(element).attr('data-id');
                //находим блок с контентом имеющий такой же атрибут что и секция прогрессбара
                if (activeBlockContentOrLineTop === idLineActive) {
                    //определяем позицию блоков относительно верха экрана
                    var positionBlockTop = $(element).offset().top;
                    var scrollerBlock = document.getElementById('scroller');
                    //смещаем контейнер с блоком на координаты которые принадлежать блоку с контентом нужного атрибута
                    scrollerBlock.scrollBy({
                        left: 0,
                        top: positionBlockTop,
                        behavior: 'smooth',
                    });
                    return false;
                }
            });
    });
    //проверка на странице блока с текстом на превышение  допустимой размерности при загрузке страницы
    var massTextBlock = [];
    $('.content-container__text').each(function(lenghtBlock) {
        massTextBlock.push(this);
    });
    //функция перестроения блоков и изменения их размеров в зависимости от размеров окна
    function windowSize() {
        var massTextBlock = [];
        $('.content-container__text').each(function(lenghtBlock) {
            massTextBlock.push(this);
        });
        $.each(massTextBlock, function(index, elementText) {
            var textBlockHeight = $(elementText).outerHeight(true);
            //если меньше предельного значения скролл не добавляется
            //внутренний размер окна без полос прокрутки
            var windowInnerWidth = document.documentElement.clientWidth;
            var windowInnerHeight = document.documentElement.clientHeight;

            //
            //
            //ширина прогрессбара
            var sideBarWidth = $('.saidbar-nav__wrapper1').css('width');
            //

            //узнаем максимальную высоту контента с текстом
            //получаем значения грид размеров сетки по высоте
            var gridRowsHeight = $('.content-container').css('grid-template-rows');
            //образуем массив из значений разбивая значения после знаков px
            var massgridRowsHeight = gridRowsHeight.split('px');
            //выявляем максимально допустмое значение блока с текстом
            var maxHeightTextContainer = massgridRowsHeight[1];
            //
            //
            var widthContentContainer = $('.content-container').css('width');

            //
            //
            if (windowInnerHeight <= 315 && windowInnerWidth > windowInnerHeight) {
                $('.scroller').css('height', windowInnerHeight);
                $('.section')
                    .css('height', windowInnerHeight)
                    .css('width', windowInnerWidth)
                    .css('padding-left', sideBarWidth);
                $('.header').css('width', widthContentContainer);
                $('.footer').css('left', sideBarWidth);
                if (textBlockHeight < maxHeightTextContainer) {
                    $(elementText).css('overflow-y', 'unset');
                } else {
                    $(elementText).css('overflow-y', 'scroll');
                }
            } else {
                $('.scroller').removeAttr('style');
                $('.section').removeAttr('style');
                $('.header').removeAttr('style');
                $('.footer').removeAttr('style');
                //
                if (windowInnerHeight >= 580) {
                    if (textBlockHeight < 290) {
                        $(elementText).css('overflow-y', 'unset');
                    } else {
                        $(elementText).css('overflow-y', 'scroll');
                    }
                } else if (windowInnerHeight < 580 && 400 <= windowInnerHeight) {
                    if (textBlockHeight < 200) {
                        $(elementText).css('overflow-y', 'unset');
                    } else {
                        $(elementText).css('overflow-y', 'scroll');
                    }
                } else if (windowInnerHeight < 400 && 370 <= windowInnerHeight) {
                    if (textBlockHeight < 120) {
                        $(elementText).css('overflow-y', 'unset');
                    } else {
                        $(elementText).css('overflow-y', 'scroll');
                    }
                } else if (windowInnerHeight <= 315) {
                    //ширина прогрессбара
                    var sideBarWidth = $('.saidbar-nav__wrapper1').css('width');
                    //

                    //узнаем максимальную высоту контента с текстом
                    //получаем значения грид размеров сетки по высоте
                    var gridRowsHeight =
                        $('.content-container').css('grid-template-rows');
                    //образуем массив из значений разбивая значения после знаков px
                    var massgridRowsHeight = gridRowsHeight.split('px');
                    //выявляем максимально допустмое значение блока с текстом
                    var maxHeightTextContainer = massgridRowsHeight[1];
                    //
                    //
                    var widthContentContainer = $('.content-container').css('width');

                    //
                    $('.scroller').css('height', windowInnerHeight);
                    $('.section')
                        .css('height', windowInnerHeight)
                        .css('width', windowInnerWidth)
                        .css('padding-left', sideBarWidth);
                    $('.header').css('width', widthContentContainer);
                    $('.footer').css('left', sideBarWidth);
                    if (textBlockHeight < maxHeightTextContainer) {
                        $(elementText).css('overflow-y', 'unset');
                    } else {
                        $(elementText).css('overflow-y', 'scroll');
                    }
                }
            }
        });
    }

    windowSize();

    //проверка на странице блока с текстом на превышение  допустимой размерности при изменении окна или ориентации устройства
    window.addEventListener(
        'resize',
        function() {
            windowSize();
        },
        false
    );

    //
    var windowInnerWidth = document.documentElement.clientWidth;
    var windowInnerHeight = document.documentElement.clientHeight;
    //

    $('.scroller').scroll(function() {
        var windowInnerHeight2 = document.documentElement.clientHeight;
        if (windowInnerWidth > windowInnerHeight) {
            if (windowInnerHeight2 > windowInnerHeight) {
                windowSize();
                console.log('увеличение окна !!!!!');
            } else if (windowInnerHeight2 < windowInnerHeight) {
                windowSize();
                console.log('уменьшение окна !!!!!');
            }
        }
        //
    });
});