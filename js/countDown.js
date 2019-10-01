$(function () {
    var year;
    var mon;
    var date;
    var hr;
    var min;
    var sec;
    var before;
    var after;
    var fun;
    var t;

    Counter('2019','Oct','5',0,0,0,'Dashain Starts In','Happy Dashain',Counter('2019','Oct','10',0,0,0,'Happy Dashain','Ended'));


    function Counter(year, mon,date,hr,min,sec,before,after,fun) {
        clearInterval(t);
        if (year) {
            t = setInterval(function () {
                var new_date = (new Date).getTime();
                var myDate = new Date(mon + ' ' + date + ',' + year + ' ' + hr + ':' + min + ':' + sec).getTime();
                var difference = myDate - new_date;
                if (difference < 0) {
                    clearInterval(t);
                    $('#Text_item').css({"font-size":"30px"}).text(after);
                    fun;
                    $('#countDown').text('Expired');
                }

                else {
                    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((difference % (1000 * 60)) / 1000);
                    var countDown = days + ' Days ' + hours + ' hrs ' + minutes + ' minutes ' + seconds + ' seconds';
                    $('#Text_item').text(before);
                    $('#countDown').text(countDown);

                }
            }, 1000);

        } else {

        }
    }
    $('#start_countdown').on('click', function () {
        clearInterval(t);
        year = $('#yr').val();
        mon = $('#mon').val();
        date = $('#date').val();
        hr = $('#hr').val();
        min = $('#min').val();
        sec = $('#sec').val();
        text='Count Down';
        Counter(year,mon,date,hr,min,sec,text,'ended');
    });
    $('#stop_countdown').on('click', function () {
        clearInterval(t);
        var countDown = '0 Days 0 hr 0 Min 0 Sec';
        $('#Text_item').text('Stopped');
        $('#countDown').text(countDown);
    });

    
    
    $("#custom").on('click',function () {
        $('#add_custom').slideToggle(1000);
    })
    
    
});