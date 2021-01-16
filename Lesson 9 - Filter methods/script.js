$(document).ready(function () {

    // eq(1) means: equals index #1
    $('#btn1').click(function (e) { 
        $('li').eq(1).toggleClass('border-red');
    });  

    // filter method
    $('#btn2').click(function (e) { 
        $('li').filter('.green').toggleClass('border-green');
    });
    
    // has method - it is applyed on parent (ul)
    $('#btn3').click(function (e) { 
        $('.myUl').has('#yellow').toggleClass('border-yellow');
    });

    // not method
    $('li').not('.green').css('color', 'red');
});


