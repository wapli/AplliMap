//ver1.1 onclickの実装をaddEventListenerの実装に変更しました.

//拡大倍率（グローバル変数）
var ratio=1;

document.addEventListener('init', (event) => {
    var page =event.target;
    //マップ機能ページを読み込んだ場合
    if(page.id = "ons-map"){
        console.log("Loaded zoom.js");
        //マップ画像を取得
        var map = document.getElementById("map");
        var mapImage = document.getElementById("mapImage");
        //建物の集合と建物情報の集合をそれぞれ取得
        let objs = document.getElementsByClassName("obj");
        let objInfs = document.getElementsByClassName("obj_inf");

        //拡大機能
        document.getElementById("zoomin").addEventListener("click", function(){
            ratio *= 1.1;
            console.log("Increased ratio:"+ratio);

            //マップ領域とマップ画像の拡大
            map.style.width=String(ratio*100)+"vw";
            map.style.height=String(ratio*100)+"vh";
            mapImage.style.width=String(ratio*100)+"vw";
            mapImage.style.height=String(ratio*100)+"vh";
            console.log("mapWidth:"+map.style.width);
            console.log("mapImageWidth:"+mapImage.style.width);

            //拡大倍率の最大値を2.5に上書き調整
            if(ratio>2.5){
                ratio=2.5;
                map.style.width=String(ratio*100)+"vw";
                map.style.height=String(ratio*100)+"vh";
                mapImage.style.width=String(ratio*100)+"vw";
                mapImage.style.height=String(ratio*100)+"vh";
            }
        }, false);

        //縮小機能
        document.getElementById("zoomout").addEventListener("click", function(){
            ratio *= 0.9;
            console.log("Decreased ratio:"+ratio);

            //マップ領域とマップ画像の縮小
            map.style.width=String(ratio*100)+"vw";
            map.style.height=String(ratio*100)+"vh";
            mapImage.style.width=String(ratio*100)+"vw";
            mapImage.style.height=String(ratio*100)+"vh";
            console.log("mapWidth:"+map.style.width);
            console.log("mapImageWidth:"+mapImage.style.width);

            //拡大倍率の最小値を1に上書き調整
            if(ratio<1){
                ratio=1;
                map.style.width=String(ratio*100)+"vw";
                map.style.height=String(ratio*100)+"vh";
                mapImage.style.width=String(ratio*100)+"vw";
                mapImage.style.height=String(ratio*100)+"vh";
            }
            //拡大倍率ratioが2倍を下回った場合、全ての吹き出しを非表示
            else if(ratio<2){
                for(var i=0;i<objs.length;i++){
                    objInfs[i].style.display="none";
                }
            }
        }, false);
    }
},false);