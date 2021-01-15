$(document).ready(function () {
    $('#linkFix').click(function (e) { 
        $('a').attr('target', '_blank');
    });

    $('#removeAttr').click(function (e) { 
        $('#myDiv a')
        .removeAttr('id')
        .removeAttr('target');
    });

    
    $('#changeClass').click(function (e) {
        if ($('#myDiv').hasClass('myBox')=== true) {
            $('#myDiv')
            .removeClass('myBox')
            .addClass('border-red');
        } 
    });

    
    $('#toggleClass').click(function (e) {
            $('#myDiv').toggleClass('border-green');
    });

});