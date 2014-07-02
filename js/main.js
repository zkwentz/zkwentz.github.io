require(["jquery"], function($) {

    $(document).on('click','#hamburgerButton',function(){
      $('.blog').toggleClass('is-flipped');
    });

});
