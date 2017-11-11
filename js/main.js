/* Activity tags or chips */
$('.activityOther').on('awesomplete-selectcomplete', function ( event ) {
	$('.other-bubbles').append('<div class="btn btn-activity other-bubble">' + $(this).val() + '</div>');
	$('.activityOther').val('');
	$('.other-bubble').click(function () {
		$(this).remove();
	});
});

/* setting the shapes container to be the same height as the body */
$( document ).ready(function() { 
	$(".shapes").css({'height':($("body").height()+'px')});
});

/* faking the generation of the connection list */
placesAutocomplete.on('change', function resultSelected(e) {
    $('.section-listing').css("height","auto");
	$('.connection-list').css("transform","scale(1)");
	$('.list-item').css("opacity","1");
	$('.section-howitworks').css("margin-top","200px");
	$(".shapes").css({'height':($("body").height()+'px')}); /* resetting shapes container height */
});