var global_container = document.getElementById('app-main');

function containerResizeY(window_height){

	var height = window_height - global_container.offsetTop;

	$('#app-main, #col_main, #col_right').css({
		'height': height + 'px',
		'max-height': height + 'px'
	});
}

/* UI Stuff */
$(window).on("load resize",function(){
	containerResizeY(window.innerHeight);
});

/* Dummy code for now to apply active style to items in the list */
$('.js-list-item a').on('click', function(e){
	e.preventDefault();
	$('.js-list-item').removeClass('active');
	$(this).parents('.js-list-item').addClass('active');
});
