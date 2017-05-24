<script>
    $(function () {
       var navOffset = $('nav').offset().top;
        $(window).scroll(function () {
            var scrollPos = jQuery(window).scrollTop();
            
            $('nav').wrap('<div class="nav-placeholder"></div>');
            $('.nav-placeholder').height($('nav').outerHeight());
            
            if (scrollPos >= navOffset) {
                $('nav').addClass('fixed');
            } else {
                $('nav').removeClass('fixed');
            }
        });
        
        var name = $('#name').val();
        var email = $('#email').val();
        var telephone = $('#telephone').val();
        
        $('#name').blur(function () {
            window.alert('test');
        })
        
    }); 
</script>
