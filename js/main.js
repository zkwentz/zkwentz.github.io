require(["jquery"], function($) {

    $(document).on('click','#hamburgerButton',function(){
      $('.blog-wrapper').toggleClass('is-flipped');
    });

});
