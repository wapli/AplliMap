/**
 * 以下ons-navigatorのときのjs
 */
/*
let PageEle=document.getElementById("onsNavi");
let onsButEle=document.getElementById("onsbutton");
onsButEle.addEventListener("click",()=>{
    PageEle.pushPage('page1.html');
});


document.addEventListener("init",(event)=>{
    console.log("initイベントが発火しました");
    console.log(document.getElementById("page1"));
    if(event.target.id==="page1"){
        console.log("page1のイベントが実行されています！");
        let butEle=document.getElementById("popButton");
        console.log(butEle);
        butEle.addEventListener("click",()=>{
            console.log("ふむ、ひとまずはaddEventできている");
            //document.getElementById('onsNavi').popPage();
            PageEle.popPage();
        });
    }

})
*/

//以下ons-tabbarにうめこまれたons-navigatorのためのjs
document.addEventListener("init",(event)=>{
    console.log("event:");
    console.log(event);
    let PageEle=document.getElementById("onsNavi");

    if(event.target.id==="onsPage"){
            let onsButEle=document.getElementById("onsbutton");
            onsButEle.addEventListener("click",()=>{
            PageEle.pushPage('page1.html');
        });
    }else if(event.target.id==="page1"){
        console.log("page1のイベントが実行されています！");
        let butEle=document.getElementById("popButton");
        console.log(butEle);
        butEle.addEventListener("click",()=>{
            console.log("ふむ、ひとまずはaddEventできている");
            //document.getElementById('onsNavi').popPage();
            PageEle.popPage();
        });
    }
});
