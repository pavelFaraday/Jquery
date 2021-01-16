$(document).ready(function () {

    $('#btn_hide').click(function (e) { 
        $('.container').hide(500);
    }); 
    
    $('#btn_show').click(function (e) { 
        $('.container').show(500);
    }); 

    $('#toggle').click(function (e) { 
        $('.container').toggle(500);
    }); 

   
});


