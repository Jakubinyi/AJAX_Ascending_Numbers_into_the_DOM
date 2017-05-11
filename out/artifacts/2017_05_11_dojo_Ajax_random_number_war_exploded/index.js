$(document).ready(function() {
    var numbers = [];

    $.ajax({
        method: 'GET',
        url: '/a',
        contentType: 'application/json; charset=utf-8',
        success:  displayNum,
        error: function () {
            alert("Fail");
        }
    })

    $.ajax({
        method: 'GET',
        url: '/b',
        contentType: 'application/json; charset=utf-8',
        success:  displayNum,
        error: function () {
            alert("Fail");
        }
    })

    $.ajax({
        method: 'GET',
        url: '/c',
        contentType: 'application/json; charset=utf-8',
        success:  displayNum,
        error: function () {
            alert("Fail");
        }
    })

    function  displayNum(data) {
        console.log(data)
        //$("#numbers").append(data.randomNumber + "<br>");
        numbers.push(data.randomNumber);
        sortNumberAndDisplayThem(numbers);
    }

    function sortNumberAndDisplayThem(numbers) {
        if (numbers.length ===3) {
            numbers.sort()

            numbers.forEach(function (n) {
                var ul = $('#numbers');
                var li = $('<li>');
                li.text(n);
                ul.append(li);
            })
        }
    }
})
