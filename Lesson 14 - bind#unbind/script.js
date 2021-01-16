$(document).ready(function () { 
   $('h2').bind('click', function (e) {
       alert('H2 was clicked');
       console.log('Binding works');
   });

   $('p').bind('mouseenter mouseleave', function (e) {
       console.log('Binding works');
       $(this).unbind('mouseleave');
   });
});


