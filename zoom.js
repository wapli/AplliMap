//ver1.0
document.addEventListener('init', (event) => {
    var page =event.target;
    
    //マップ機能ページを読み込んだ場合
    if(page.id = "ons-map"){
        var map = document.getElementById('map');
        map;
    }

},false);

//拡大倍率
var ratio=1;

//拡大関数
function zoomIn(){
    ratio *= 1.1;

    map.style.width=String(ratio*100)+"vw";
    map.style.height=String(ratio*100)+"vh";

    if(map.width<window.innerWidth || map.height<window.innerHeight){
        ratio=1;
    }
    else if(map.width>window.innerWidth*2 || map.height>window.innerHeight*2){
        map.style.width=String(200)+"vw";
        map.style.height=String(200)+"vh";
    }
}

//縮小関数
function zoomOut(){
    ratio *= 0.9;

    map.style.width=String(ratio*100)+"vw";
    map.style.height=String(ratio*100)+"vh";


    if(map.width<window.innerWidth || map.height<window.innerHeight){
        ratio=1;
    }
    else if(map.width>window.innerWidth*2 || map.height>window.innerHeight*2){
        map.style.width=String(200)+"vw";
        map.style.height=String(200)+"vh";
    }
}