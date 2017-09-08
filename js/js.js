$(function()
 {
    $(window).scroll(function()
                   {
        var s=$(this).scrollTop();
        if(s>200)
            {
                $('.scroll').slideDown();
            }
        else
            
            {
               $('.scroll').slideUp();
            }
        
    });
    $('.head li a').click(function(){
        $('html,body').animate({
            scrollTop:$('#ab').offset().top;
        },1500)
    })
});
