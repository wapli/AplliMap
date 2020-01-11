//ver1.0 マップ機能内で建物情報を提示する機能

//建物の集合と建物情報の集合をそれぞれ取得
var objs = document.getElementsByClassName("obj");
var objInfs = document.getElementsByClassName("obj_inf");

document.addEventListener('init', function(event){
    var page = event.target;
    if(page.id == "ons-map"){
        console.log("Loaded zoom.js");
        for(let i=0;i<objs.length;i++){
            objs[i].addEventListener("click", function(){
                console.log("obj"+i+" was clicked.");

                //拡大倍率1.7倍以上の場合のみ、吹き出しを表示
                if(ratio>=1.7){
                    console.log("possible to open information.");
                    objInfs[i].style.display="block";
                }
                else{
                    console.log("not possible to open information.");
                }
            }, false);
        }
            
        
    }
},false);

//addEventListenerが効かない場合に備えて関数
function openInf(num)
{
    console.log("obj"+num+" was clicked.");

    //クリックされた建物以外の吹き出しを非表示
    for(var i=0;i<objInfs.length;i++){
        if(i==num){
            continue;
        }
        objInfs[i].style.display="none";
    }

    //拡大倍率1.7倍以上の場合のみ、吹き出しを表示
    if(ratio>=1.7){
        console.log("possible to open Information.");
        objInfs[num].style.display="block";
    }
    else{
        console.log("not possible to open Information.");
    }
}
