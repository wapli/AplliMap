/**
 * 以下ons-navigatorのときのjs
 */

// let PageEle=document.getElementById("onsNavi");
// let onsButEle=document.getElementById("onsbutton");
// onsButEle.addEventListener("click",()=>{
//     PageEle.pushPage('page1.html');
// });

// document.addEventListener("init",(event)=>{
//     console.log("initイベントが発火しました");
//     console.log(document.getElementById("page1"));
//     if(event.target.id==="page1"){
//         console.log("page1のイベントが実行されています！");
//         let butEle=document.getElementById("popButton");
//         console.log(butEle);
//         butEle.addEventListener("click",()=>{
//             console.log("ふむ、ひとまずはaddEventできている");
//             //document.getElementById('onsNavi').popPage();
//             PageEle.popPage();
//         });
//     }

// });


//以下ons-tabbarにうめこまれたons-navigatorのためのjs
/*
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

*/

// let butEle=document.getElementById("onsbutton");
// butEle.addEventListener("click",function(event){
//     console.log("ボタンが押されました");
// });

//以下carouselの練習
console.log(document.getElementById("item0"));


document.getElementById("ons-carousel").addEventListener("postchange", (event) => {
    if (event.activeIndex === 0) {
        console.log("左端だね。");
        document.getElementById("ons-carousel").setActiveIndex(3, { animation: 'none' });

    } else if (event.activeIndex === 4) {
        console.log("右端だね。");
        document.getElementById("ons-carousel").setActiveIndex(1, { animation: 'none' });

    }
    //console.log(event.activeIndex);
    //postchangeのときはinitイベントは起きてないみたいね
});
