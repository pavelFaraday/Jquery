$(document).ready(function() { 
    $('input').on('click', function (event) {
        console.log(event.type);
        console.log(event.which);
        console.log(event.target);
        console.log(event.pageX);
        console.log(event.pageY);
    });
});


