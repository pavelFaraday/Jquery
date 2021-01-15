let arr_2 = [1, 'a', 2, 'k', 3, 4, 'f'];
for (let i = 0; i < arr_2.length; i++) {
    console.log(i, arr_2[i]);
}

/* -------------------------------------------------------------------------- */

$(document).ready(function () {
    let arr = [1, 'a', 2, 'k', 3, 4, 'f'];

    $.each(arr, function (indexInArray, valueOfElement) { 
         console.log(indexInArray, valueOfElement);
    });
});

/* -------------------------------------------------------------------------- */

$(document).ready(function () {
    $('li').each(function (indexInArray, valueOfElement) { 
         console.log(indexInArray, valueOfElement);
         console.log($(this).text());
    });
});


