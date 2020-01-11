//ver1.0 マップ機能内で表示中の建物情報を閉じる機能
var count=0;
    $(document).on('click',function(e) {
        for(var i=0;i<objInfs.length;i++){
            if(objInfs[i].style.display=="block"){
                if(!$(e.target).closest('#obj_inf'+i).length) {
                    // ターゲット要素の外側をクリックした時の操作
                    count++;
                    console.log(count);
                    if(count%2==0){
                        console.log("close information.");
                        objInfs[i].style.display="none";
                    }
                }
                else {
                    // ターゲット要素をクリックした時の操作
                    console.log("clicked inside information.");
                }
            }
            if(count==2)
                count=0;
        }
    });