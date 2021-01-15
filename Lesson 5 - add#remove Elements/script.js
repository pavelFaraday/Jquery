$(document).ready(function () {
    $('.after').click(function (e) { 
        $('.after').after('<li>add element after "after" li</li>');
    });

    $('.before').click(function (e) { 
        $('.before').before('<li>add element before "before" li</li>');
    });

    $('.append').click(function (e) { 
        $('ul').append('<li>append element to "ul" parent div - last child</li>');
    });

    $('.prepend').click(function (e) { 
        $('ul').prepend('<li>prepend element to "ul" parent div - first child </li>');
    });

});