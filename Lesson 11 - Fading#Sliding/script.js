$(document).ready(function () {

    $('#btn_fadeOut').click(function (e) { 
        $('.container').fadeOut(500);
    }); 
    
    $('#btn_fadeIn').click(function (e) { 
        $('.container').fadeIn(500);
    }); 

    $('#btn_fadeTo').click(function (e) { 
        $('.container').fadeTo(500, 0.5);
    }); 

    $('#btn_slideUp').click(function (e) { 
        $('.container').slideUp(500);
    }); 

    $('#btn_slideDown').click(function (e) { 
        $('.container').slideDown(500);
    }); 

    $('#btn_slideToggle').click(function (e) { 
        $('.container').slideToggle(500);
    });
   
});


