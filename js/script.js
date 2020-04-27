$('button').mouseenter(function() {
    $(this).removeClass('makeRed').addClass('makeBlue');
});

$('button').mouseLeave(function() {
    $(this).removeClass('makeBlue').addClass('makeRed');
});