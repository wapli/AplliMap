function BodyOnLoad() {

    var map = document.getElementById('test');
    var ratio=1;
    var w = map.width;
    var h = map.height;
    map.width = window.innerWidth*2;
    map.height = window.innerHeight*2;
    map.style.position = 'fixed';
    map.style.left = '0%';
    map.style.top = '0%';
 
    var touchstart_bar = 0;
    var touchmove_bar = 0;
    var touchstart_flg = false;
    el = window;
    
    //タッチの場合
    el.addEventListener('touchstart',function(e){
        touchstart_bar = 0;
        touchmove_bar = 0;
        //2本指だったらAndroidではgesturestartは使えない
        if(e.touches.length > 1){
            //絶対値を取得
            w_abs_start = Math.abs(e.touches[1].pageX - e.touches[0].pageX);
            h_abs_start = Math.abs(e.touches[1].pageY - e.touches[0].pageY);
            //はじめに2本指タッチした時の面積
            touchstart_bar = w_abs_start*h_abs_start;
        }
    },false);
     
    //画像を一本指でタッチした場合だけ画像を動かす
    map.addEventListener('touchstart',function(e){
        if(e.touches.length == 1)touchstart_flg = true;
    },false);

    el.addEventListener('touchmove', function(e) {
        //2本指だったらAndroidではgesturestartは使えない
        //ピンチイン・ピンチアウト
        if(e.touches.length > 1){
            //絶対値を取得
            w_abs_move = Math.abs(e.touches[1].pageX - e.touches[0].pageX);
            h_abs_move = Math.abs(e.touches[1].pageY - e.touches[0].pageY);
            //ムーブした時の面積
            touchmove_bar = w_abs_move*h_abs_move;
            //はじめに2タッチ面積からムーブした時の面積を引く
            area_bar = touchstart_bar-touchmove_bar;


            if((map.width>=window.innerWidth && map.width<=window.innerWidth*2) 
            && (map.height>=window.innerHeight && map.height<=window.innerHeight*2)){
                if(area_bar<0){//拡大する
                    ratio *= 1.001;
                }
                else if(area_bar>0){//縮小する
                    ratio *= 0.999;
                }

                map.width *= ratio;
                map.height *= ratio;

                if(map.width<window.innerWidth || map.height<window.innerHeight){
                    map.width=window.innerWidth;
                    map.height=window.innerHeight;
                }
                else if(map.width>window.innerWidth*2 || map.height>window.innerHeight*2){
                    map.width=window.innerWidth*2;
                    map.height=window.innerHeight*2;
                }
            }
        }
        
        //スクロール
        else if(touchstart_flg){
            /*
            for (var i = 0; i < touches.length; i++) {
                var idx = ongoingTouchIndexById(touches[i].identifier);
                if (idx >= 0) {
                log("continuing touch "+idx);
                ctx.beginPath();
                log("ctx.moveTo(" + ongoingTouches[idx].pageX + ", " + ongoingTouches[idx].pageY + ");");
                ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
                log("ctx.lineTo(" + touches[i].pageX + ", " + touches[i].pageY + ");");
                ctx.lineTo(touches[i].pageX, touches[i].pageY);

                ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record
                log(".");
                } 
                else {
                log("can't figure out which touch to continue");
                }
            }
            */
            map.style.position = 'fixed';
            map.style.left = String(100)+'px';
            map.style.top = String(0)+'px';
            /*
            var left = map.style.left;
            var top = map.style.top;
            var move_x = e.touches[0].pageX-(w*ratio)/2;
            var move_y = e.touches[0].pageY-(h*ratio)/2;
            */

            
            //map.style.transform ="translateX(50px)";

            /*
            alert(move_x); //-2000近く。原因はw
            alert(w); //wは4000近く
            alert(ratio); //ratioは初期値のままで1
            alert(e.touches[0].pageX); //40とかそれくらい
            */
            
        }
        
        
    
    
    //タッチの終了
    el.addEventListener('touchend',function(e){
        touchstart_flg = false;
    },false);
    //タッチの中断
    el.addEventListener('touchcancel',function(e){
        touchstart_flg = false;
    },false);
    

    
},false);

}