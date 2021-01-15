$(document).ready(function () {
    $('button').click(function (e) { 
        var answer = $('#answer-box').val();

        if (answer == 'London' || answer == 'london') {
            $('#result')
            .text('Your answer is correct')
            .css('color', 'green');
        } else if (answer == '') {
            $('#result')
            .text('Please, fill the input field!')
            .css('color', 'red');
        } else {
            $('#result')
            .html('<span style="color:red;">Your answer is incorrect!</span> ');
            $('#correct-answer')
            .text('correct answer is LONDON')
            .css('color', 'blue');
        }
    });

});