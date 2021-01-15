$(document).ready(function () {
    $('#cloneLink').click(function (e) { 
        $('#google').clone().insertAfter('hr');
        $('#break').clone().insertAfter('hr');
    });
});