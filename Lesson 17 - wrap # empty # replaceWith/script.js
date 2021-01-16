$(document).ready(function() {
    // wrap 
    $('#para').wrap("<div class='container'>");

    // empty
    $('#btn_empty').click(function (e) { 
        $('h3').empty();
    });

    // replaceWith
    $('#btn_replace').click(function (e) { 
        $('h4').replaceWith('<p>Lorem ipsum dolor sit amet</p>');
    });
    
});


