
/*Code ceate tab menu in website*/
<script type="text/javascript">
        jQuery(function($) {
		var h = $('.menu-nav-top').closest('.span8').height();
		$('.menu-nav-top').closest('.span8').css('height', h);
		fixmenu();
                $(window).scroll(function() {
			fixmenu();
                });
		function fixmenu() {
			var c = $('.menu-nav-top').closest('.navbar');
			if($(this).scrollTop() > h) {
				if(!c.hasClass('navbar-fixed-top')) {
					c.addClass('navbar-fixed-top');
					c.css('position', 'fixed');
				}
			} else {
				c.removeClass('navbar-fixed-top');
				c.css('position', 'static');
			}
		}
        });
</script>