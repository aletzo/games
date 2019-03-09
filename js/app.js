$('.iframe').show();

$('#accordion').accordion({
    change: function(ev, ui) {
        $('a.questionmark').each(function(i, el) {
            if ( ! $(el).is(':visible')) {
                $(el).siblings('div.help').hide();
            }
        });
    }
});

$('a.questionmark').click(function() {
    $(this).siblings('div.help').fadeToggle(300);

    return false;
});
