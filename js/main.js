let isContainerOpen = false;
$('.header>button').on('click', () => {
    $('.header-container').css({
        backgroundColor : isContainerOpen ? 'transparent' : '#16171A',
        transition : 'all 1s'
    });
    isContainerOpen = !isContainerOpen;
});
function search() {
    if( $('.sch').val().length > 0)
    {
        $('.srch-icon').attr('src','assets/icons/search-icon-processing.svg');
        $('.sch').css('padding-right', '35px');
        $('.search-bar').css('opacity', '1');
        $('.srch-icon').css({
            animation: 'imgrt 1300ms infinite'
        });
        $('.search-res').fadeIn();
    }
    else
    {
        $('.srch-icon').attr('src','assets/icons/Search.svg');
        $('.sch').css('padding-right', '15px');
        $('.srch-icon').css({
            animation: 'none'
        });
        $('.search-bar').css('opacity', '0');
        $('.search-res').fadeOut();
    }
}
$('.sch').on('input',function(e){
    search();
});
$('.search-bar').on('click',function (){
    $('.sch').val('');
    search();
});
$('.submenu>a').focus(function () {
    $(this).parent().find('.submenu-container').fadeIn();
}).blur(function () {
    $(this).parent().find('.submenu-container').fadeOut();
});
$('.gototop > img').on('click',function () {
    $(window).scrollTop(0);
})
$(window).on( 'scroll', function(){
    if (document.documentElement.scrollTop > 1)
    {
        $('.gototop > img').css('display', 'initial');
    }
    else{
        $('.gototop > img').css('display', 'none');
    }
});

$('.submenu-container').hover(function () {
    $(this).parent().css('background-color', '#FBCF16');
    $(this).parent().find('a').css('color', '#212226');
    $(this).parent().addClass('submenu-on');
    $(this).parent().removeClass('submenu-off');
},function () {
    $(this).parent().css('background-color', 'transparent');
    $(this).parent().find('a').css('color', '#FFFFFF');
    $(this).parent().addClass('submenu-off');
    $(this).parent().removeClass('submenu-on');
})