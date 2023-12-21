var audio = new Audio('audio/hbd.mp3');
var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;

    var r_left1 = Math.floor(Math.random() * 100) + 1;
    var r_time1 = Math.floor(Math.random() * 5) + 7;

    if(!checkTime()){
        $('.bg_heart').css("visibility", "hidden");
        $('.countdownmain').css("visibility", "visible");
        $('.countdownmain').css("display", "flex");
    }else{
        $('.bg_heart').css("visibility", "visible");
        $('.countdownmain').css("visibility", "hidden");
        $('.countdownmain').css("display", "none");
        if(audio.currentTime == 0 || audio.ended)
            audio.play();
        $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

        $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

        var hbdTexts = ["Happyyy b'dayyy Simpi!", "Happy b'day Shivani!", "Happy b'day Vaani!"]
        var hbdText = hbdTexts[Math.floor(Math.random()*(hbdTexts.length))]

        $('.bg_heart').append("<div class='heart-text' style='width: 68px;height: 68px;left:" + r_left1 + "%;-webkit-animation:love " + r_time1 + "s ease;-moz-animation:love " + r_time1 + "s ease;-ms-animation:love " + r_time1 + "s ease;animation:love " + r_time1 + "s ease; text-align: center; color: #ffffff'><div class='hbd-text'><p style=\"z-index: 1000; position:absolute;\">" + hbdText +"</p></div></div>");

        var detachElement = function() {
            var top = $(this).css("top").replace(/[^-\d\.]/g, '');
            var width = $(this).css("width").replace(/[^-\d\.]/g, '');
            if (top <= -100 || width >= 150) {
                $(this).detach();
            }
        };
        $('.heart-text').each(detachElement);
        $('.heart').each(detachElement);
    }
}, 500);



function checkTime(){
    var date = new Date($.now());
    if(date.getTime() >= end.getTime() && date.getTime() <= animEndTime.getTime())
        return true;
    return false;
}