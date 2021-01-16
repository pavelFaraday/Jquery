$(document).ready(function () {

    $('#btn_animate').click(function (e) { 
        $('.container').animate({
            'width': '300px',
            'margin-top':  '40px',
            'margin-left':  '40px',
            'opacity':  '0.7'
        }, 1000);
    }); 
      
});


