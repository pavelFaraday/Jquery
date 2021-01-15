$(document).ready(function () {
    // Hole Body
    // $('*').css('color', 'red');

    $('h1').css('color', 'red');
    $('h1').text('This is H1');

    $('.head').css('color', 'blue');

    $('#para').css('color', 'green');

    $('a[target=_blank]')
    .css('color', 'yellow')
    .css('font-size', '2rem');

    $('a[target=_self]')
    .css('color', 'magenta')
    .css('font-style', 'italic');

/* -------------------------------------------------------------------------- */

    $('#item-list > li').css('color', 'red');
    $('#item-list > li:last').css('color', 'blue');

});