$(document).ready(function() { 
    $('h2').on({
        click: () => {
            console.log('click event');
        },
        mouseenter: () => {
            console.log('mouseenter');
        },
        mouseleave: () => {
            console.log('mouseleave');
        }
    });
});


