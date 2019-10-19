$(function () {
    $('#mybtn').on('click', function () {
        toDoList();
    });
    $('#myItem').on('keypress', function (e) {
        if (e.keyCode === 13) {
            toDoList();
        }
    });

    function toDoList() {
        var inputField = $('#myItem');
        var inputData = inputField.val();

        if (inputData) {
            var myData = " <div style=\"width: 300px;border: 1px solid black;padding:10px 10px; margin-bottom: 10px\">"+inputData+"<span class=\"xBtn\" style=\"float: right\">X</span></div>";
            $('#todolist').append(myData);
        }
        $('.xBtn').on('click', function (e) {
            console.log(e);
            // $(this).parent().remove();
        });
        inputField.val('');
    }

});