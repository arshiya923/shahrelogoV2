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
        $('.sch').css('padding-right', '5px');
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