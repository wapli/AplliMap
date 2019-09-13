//時間帯別表示js
var now_hour=new Date().getHours();
var now_minute=new Date().getMinutes();

var evewin = document.getElementById('eventWindow');

switch(now_hour){
    case 5:
        console.log("case 4 was used.");

        if(now_minute>=0 && now_minute<30){
            evewin.innerHTML='<img src="eventImg/フレンズ.png">';
        }
        else{
            evewin.innerHTML='<br><img src="eventImg/ハンブレッダーズ.png">';
        }
        break;
    case 6:
        evewin.innerHTML='<img src="eventImg/mainartist2019-300x253.png"><br>They are フレンズ.';
        break;
}
//時間帯別表示js

//吹き出しjs
$(function(){
    //フェードイン
    var cnt=0;
    $('#button').on('click', function() {
        console.log("clicked.");
        $('#eventWindow').fadeIn(300);
        cnt++;
    })
    //フェードアウト
    window.addEventListener('click', function(){
        if(cnt%2===0){
            console.log("clicked.");
            $('#eventWindow').fadeOut(300); 
        }
    },false);
});
//吹き出しjs