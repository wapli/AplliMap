var now_hour=new Date().getHours();
var now_minute=new Date().getMinutes();

switch(now_hour){
    case 2:
        if(now_minute>=0 && now_minute<30){
            document.write('<img src="eventImg/和牛.jpg">');
        }
        else{
            document.write('<img src="eventImg/藤崎マーケット.jpg">');
        }
        break;
    case 17:
        document.write('<img src="eventImg/mainartist2019-300x253.png">');
        break;
    default:
        document.write('<div>イベント当日までお待ちください。<br><img src="eventImg/申し訳ございません.jpg"></div>');
        break;
}
