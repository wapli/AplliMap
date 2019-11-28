//onsready()で実行

// ons.ready(function(){
  var mainStage;
  
document.addEventListener("init", (event) => {
  
    if(event.target.id === 'page-top') {
      /*
      //1~12
      document.getElementById("shop1to12").addEventListener('click', function(){
        document.getElementById("shop_inf1to12").style.display="block";
        document.getElementById("close1to12").style.display="block";
      });
      document.getElementById("close1to12").addEventListener('click', function(){
        document.getElementById("shop_inf1to12").style.display="none";
        document.getElementById("close1to12").style.display="none";
      });
      //13~25
      var shop13to25=document.getElementById("shop13to25");
      shop13to25.addEventListener('click', function(){
        document.getElementById("shop_inf13to25").style.display="block";
        document.getElementById("close13to25").style.display="block";
      });
      var close13to25=document.getElementById("close13to25");
      close13to25.addEventListener('click', function(){
        document.getElementById("shop_inf13to25").style.display="none";
        close13to25.style.display="none";
      });
      //26~41
      var shop26to41=document.getElementById("shop26to41");
      shop26to41.addEventListener('click', function(){
        document.getElementById("shop_inf26to41").style.display="block";
        document.getElementById("close26to41").style.display="block";
      });
      var close26to41=document.getElementById("close26to41");
      close26to41.addEventListener('click', function(){
        document.getElementById("shop_inf26to41").style.display="none";
        close26to41.style.display="none";
      });
      //42~55
      var shop42to55=document.getElementById("shop42to55");
      shop42to55.addEventListener('click', function(){
        document.getElementById("shop_inf42to55").style.display="block";
        document.getElementById("close42to55").style.display="block";
      });
      var close42to55=document.getElementById("close42to55");
      close42to55.addEventListener('click', function(){
        document.getElementById("shop_inf42to55").style.display="none";
        close42to55.style.display="none";
      });
      //56~68
      var shop56to68=document.getElementById("shop56to68");
      shop56to68.addEventListener('click', function(){
        document.getElementById("shop_inf56to68").style.display="block";
        document.getElementById("close56to68").style.display="block";
      });
      var close56to68=document.getElementById("close56to68");
      close56to68.addEventListener('click', function(){
        document.getElementById("shop_inf56to68").style.display="none";
        close56to68.style.display="none";
      });
      //69~72
      var shop69to72=document.getElementById("shop69to72");
      shop69to72.addEventListener('click', function(){
        document.getElementById("shop_inf69to72").style.display="block";
        document.getElementById("close69to72").style.display="block";
      });
      var close69to72=document.getElementById("close69to72");
      close69to72.addEventListener('click', function(){
        document.getElementById("shop_inf69to72").style.display="none";
        close69to72.style.display="none";
      });
      //お食事処
      var nichiryo=document.getElementById("nichiryo");
      nichiryo.addEventListener('click', function(){
        document.getElementById("shop_inf80to87").style.display="block";
        document.getElementById("close80to87").style.display="block";
      });
      var close80to87=document.getElementById("close80to87");
      close80to87.addEventListener('click', function(){
        document.getElementById("shop_inf80to87").style.display="none";
        close80to87.style.display="none";
      });
      // //メニュー開閉ボタン
      /*
      this.getElementById("mogi_menu").addEventListener("click", function(){
      fn.open();
      });
      */

      

      //じゃがバター
      var jaga=document.getElementById("jagaButton");
      jaga.addEventListener('click', function(){
        document.getElementById("jaga").style.display="block";
        document.getElementById("closeJaga").style.display="block";
      });
      var closeJaga=document.getElementById("closeJaga");
      closeJaga.addEventListener('click', function(){
        document.getElementById("jaga").style.display="none";
        closeJaga.style.display="none";
      });
      //ポテト
      var potato=document.getElementById("potatoButton");
      potato.addEventListener('click', function(){
        document.getElementById("potato").style.display="block";
        document.getElementById("closePotato").style.display="block";
      });
      var closePotato=document.getElementById("closePotato");
      closePotato.addEventListener('click', function(){
        document.getElementById("potato").style.display="none";
        closePotato.style.display="none";
      });
      //焼きそば
      var yakisoba=document.getElementById("yakisobaButton");
      yakisoba.addEventListener('click', function(){
        document.getElementById("yakisoba").style.display="block";
        document.getElementById("closeYakisoba").style.display="block";
      });
      var closeYakisoba=document.getElementById("closeYakisoba");
      closeYakisoba.addEventListener('click', function(){
        document.getElementById("yakisoba").style.display="none";
        closeYakisoba.style.display="none";
      });
      //たません・たこせん
      var tamasen=document.getElementById("tamasenButton");
      tamasen.addEventListener('click', function(){
        document.getElementById("tamasen").style.display="block";
        document.getElementById("closeTamasen").style.display="block";
      });
      var closeTamasen=document.getElementById("closeTamasen");
      closeTamasen.addEventListener('click', function(){
        document.getElementById("tamasen").style.display="none";
        closeTamasen.style.display="none";
      });
      //はしまき
      var hashimaki=document.getElementById("hashimakiButton");
      hashimaki.addEventListener('click', function(){
        document.getElementById("hashimaki").style.display="block";
        document.getElementById("closeHashimaki").style.display="block";
      });
      var closeHashimaki=document.getElementById("closeHashimaki");
      closeHashimaki.addEventListener('click', function(){
        document.getElementById("hashimaki").style.display="none";
        closeHashimaki.style.display="none";
      });
      //揚げ物
      var agemono=document.getElementById("agemonoButton");
      agemono.addEventListener('click', function(){
        document.getElementById("agemono").style.display="block";
        document.getElementById("closeAgemono").style.display="block";
      });
      var closeAgemono=document.getElementById("closeAgemono");
      closeAgemono.addEventListener('click', function(){
        document.getElementById("agemono").style.display="none";
        closeAgemono.style.display="none";
      });
      //うどん
      var udon=document.getElementById("udonButton");
      udon.addEventListener('click', function(){
        document.getElementById("udon").style.display="block";
        document.getElementById("closeUdon").style.display="block";
      });
      var closeUdon=document.getElementById("closeUdon");
      closeUdon.addEventListener('click', function(){
        document.getElementById("udon").style.display="none";
        closeUdon.style.display="none";
      });
      //カレー
      var kare=document.getElementById("kareButton");
      kare.addEventListener('click', function(){
        document.getElementById("kare").style.display="block";
        document.getElementById("closeKare").style.display="block";
      });
      var closeKare=document.getElementById("closeKare");
      closeKare.addEventListener('click', function(){
        document.getElementById("kare").style.display="none";
        closeKare.style.display="none";
      });
      //豚汁
      var tonjiru=document.getElementById("tonjiruButton");
      tonjiru.addEventListener('click', function(){
        document.getElementById("tonjiru").style.display="block";
        document.getElementById("closeTonjiru").style.display="block";
      });
      var closeTonjiru=document.getElementById("closeTonjiru");
      closeTonjiru.addEventListener('click', function(){
        document.getElementById("tonjiru").style.display="none";
        closeTonjiru.style.display="none";
      });
      //世界の料理
      var sekair=document.getElementById("sekairButton");
      sekair.addEventListener('click', function(){
        document.getElementById("sekair").style.display="block";
        document.getElementById("closeSekair").style.display="block";
      });
      var closeSekair=document.getElementById("closeSekair");
      closeSekair.addEventListener('click', function(){
        document.getElementById("sekair").style.display="none";
        closeSekair.style.display="none";
      });
      //ソフトドリンク
      var softdrink=document.getElementById("softdrinkButton");
      softdrink.addEventListener('click', function(){
        document.getElementById("softdrink").style.display="block";
        document.getElementById("closeSoftdrink").style.display="block";
      });
      var closeSoftdrink=document.getElementById("closeSoftdrink");
      closeSoftdrink.addEventListener('click', function(){
        document.getElementById("softdrink").style.display="none";
        closeSoftdrink.style.display="none";
      });
      //タピオカ
      var tapioka=document.getElementById("tapiokaButton");
      tapioka.addEventListener('click', function(){
        document.getElementById("tapioka").style.display="block";
        document.getElementById("closeTapioka").style.display="block";
      });
      var closeTapioka=document.getElementById("closeTapioka");
      closeTapioka.addEventListener('click', function(){
        document.getElementById("tapioka").style.display="none";
        closeTapioka.style.display="none";
      });
      //ポップコーン
      var popcorn=document.getElementById("popcornButton");
      popcorn.addEventListener('click', function(){
        document.getElementById("popcorn").style.display="block";
        document.getElementById("closePopcorn").style.display="block";
      });
      var closePopcorn=document.getElementById("closePopcorn");
      closePopcorn.addEventListener('click', function(){
        document.getElementById("popcorn").style.display="none";
        closePopcorn.style.display="none";
      });
      //シューアイス
      var shuice=document.getElementById("shuiceButton");
      shuice.addEventListener('click', function(){
        document.getElementById("shuice").style.display="block";
        document.getElementById("closeShuice").style.display="block";
      });
      var closeShuice=document.getElementById("closeShuice");
      closeShuice.addEventListener('click', function(){
        document.getElementById("shuice").style.display="none";
        closeShuice.style.display="none";
      });
      //ベビーカステラ
      var babykasu=document.getElementById("babykasuButton");
      babykasu.addEventListener('click', function(){
        document.getElementById("babykasu").style.display="block";
        document.getElementById("closeBabykasu").style.display="block";
      });
      var closeBabykasu=document.getElementById("closeBabykasu");
      closeBabykasu.addEventListener('click', function(){
        document.getElementById("babykasu").style.display="none";
        closeBabykasu.style.display="none";
      });
      //フレンチトースト
      document.getElementById("frenchButton").addEventListener('click', function(){
        document.getElementById("french").style.display="block";
        document.getElementById("closeFrench").style.display="block";
      });
      document.getElementById("closeFrench").addEventListener('click', function(){
        document.getElementById("french").style.display="none";
        document.getElementById("closeFrench").style.display="none";
      });
      //チュロス
      var chrosu=document.getElementById("chrosuButton");
      chrosu.addEventListener('click', function(){
        document.getElementById("chrosu").style.display="block";
        document.getElementById("closeChrosu").style.display="block";
      });
      var closeChrosu=document.getElementById("closeChrosu");
      closeChrosu.addEventListener('click', function(){
        document.getElementById("chrosu").style.display="none";
        closeChrosu.style.display="none";
      });
      //綿菓子
      var watagashi=document.getElementById("watagashiButton");
      watagashi.addEventListener('click', function(){
        document.getElementById("watagashi").style.display="block";
        document.getElementById("closeWatagashi").style.display="block";
      });
      var closeWatagashi=document.getElementById("closeWatagashi");
      closeWatagashi.addEventListener('click', function(){
        document.getElementById("watagashi").style.display="none";
        closeWatagashi.style.display="none";
      });
      //サーターアンダギー
      var sata=document.getElementById("sataButton");
      sata.addEventListener('click', function(){
        document.getElementById("sata").style.display="block";
        document.getElementById("closeSata").style.display="block";
      });
      var closeSata=document.getElementById("closeSata");
      closeSata.addEventListener('click', function(){
        document.getElementById("sata").style.display="none";
        closeSata.style.display="none";
      });
      //大学芋
      var daigaku=document.getElementById("daigakuButton");
      daigaku.addEventListener('click', function(){
        document.getElementById("daigaku").style.display="block";
        document.getElementById("closeDaigaku").style.display="block";
      });
      var closeDaigaku=document.getElementById("closeDaigaku");
      closeDaigaku.addEventListener('click', function(){
        document.getElementById("daigaku").style.display="none";
        closeDaigaku.style.display="none";
      });
      //世界のお菓子
      var sekaio=document.getElementById("sekaioButton");
      sekaio.addEventListener('click', function(){
        document.getElementById("sekaio").style.display="block";
        document.getElementById("closeSekaio").style.display="block";
      });
      var closeSekaio=document.getElementById("closeSekaio");
      closeSekaio.addEventListener('click', function(){
        document.getElementById("sekaio").style.display="none";
        closeSekaio.style.display="none";
      });
      //ヨーヨー釣り
      var yoyo=document.getElementById("yoyoButton");
      yoyo.addEventListener('click', function(){
        document.getElementById("yoyo").style.display="block";
        document.getElementById("closeYoyo").style.display="block";
      });
      var closeYoyo=document.getElementById("closeYoyo");
      closeYoyo.addEventListener('click', function(){
        document.getElementById("yoyo").style.display="none";
        closeYoyo.style.display="none";
      });
      //マッサージ
      var massage=document.getElementById("massageButton");
      massage.addEventListener('click', function(){
        document.getElementById("massage").style.display="block";
        document.getElementById("closeMassage").style.display="block";
      });
      var closeMassage=document.getElementById("closeMassage");
      closeMassage.addEventListener('click', function(){
        document.getElementById("massage").style.display="none";
        closeMassage.style.display="none";
      });
      //占い
      var uranai=document.getElementById("uranaiButton");
      uranai.addEventListener('click', function(){
        document.getElementById("uranai").style.display="block";
        document.getElementById("closeUranai").style.display="block";
      });
      var closeUranai=document.getElementById("closeUranai");
      closeUranai.addEventListener('click', function(){
        document.getElementById("uranai").style.display="none";
        closeUranai.style.display="none";
      });
      //ゲーム
      var game=document.getElementById("gameButton");
      game.addEventListener('click', function(){
        document.getElementById("game").style.display="block";
        document.getElementById("closeGame").style.display="block";
      });
      var closeGame=document.getElementById("closeGame");
      closeGame.addEventListener('click', function(){
        document.getElementById("game").style.display="none";
        closeGame.style.display="none";
      });
      //雑貨
      var zakka=document.getElementById("zakkaButton");
      zakka.addEventListener('click', function(){
        document.getElementById("zakka").style.display="block";
        document.getElementById("closeZakka").style.display="block";
      });
      var closeZakka=document.getElementById("closeZakka");
      closeZakka.addEventListener('click', function(){
        document.getElementById("zakka").style.display="none";
        closeZakka.style.display="none";
      });
      //アクセサリー
      var acce=document.getElementById("acceButton");
      acce.addEventListener('click', function(){
        document.getElementById("acce").style.display="block";
        document.getElementById("closeAcce").style.display="block";
      });
      var closeAcce=document.getElementById("closeAcce");
      closeAcce.addEventListener('click', function(){
        document.getElementById("acce").style.display="none";
        closeAcce.style.display="none";
      });
      //布小物
      var nuno=document.getElementById("nunoButton");
      nuno.addEventListener('click', function(){
        document.getElementById("nuno").style.display="block";
        document.getElementById("closeNuno").style.display="block";
      });
      var closeNuno=document.getElementById("closeNuno");
      closeNuno.addEventListener('click', function(){
        document.getElementById("nuno").style.display="none";
        closeNuno.style.display="none";
      });
      //フラワー
      var flower=document.getElementById("flowerButton");
      flower.addEventListener('click', function(){
        document.getElementById("flower").style.display="block";
        document.getElementById("closeFlower").style.display="block";
      });
      var closeFlower=document.getElementById("closeFlower");
      closeFlower.addEventListener('click', function(){
        document.getElementById("flower").style.display="none";
        closeFlower.style.display="none";
      });
      //デイヴィスcafe
      var davis=document.getElementById("davisButton");
      davis.addEventListener('click', function(){
        document.getElementById("davis").style.display="block";
        document.getElementById("closeDavis").style.display="block";
      });
      var closeDavis=document.getElementById("closeDavis");
      closeDavis.addEventListener('click', function(){
        document.getElementById("davis").style.display="none";
        closeDavis.style.display="none";
      });
      //紫苑館
      var shion=document.getElementById("shionButton");
      shion.addEventListener('click', function(){
        document.getElementById("shionMenu").style.display="block";
        document.getElementById("closeShion").style.display="block";
      });
      var closeShion=document.getElementById("closeShion");
      closeShion.addEventListener('click', function(){
        document.getElementById("shionMenu").style.display="none";
        closeShion.style.display="none";
      });
      //専門店街
      var senmon=document.getElementById("senmonButton");
      senmon.addEventListener('click', function(){
        document.getElementById("senmon").style.display="block";
        document.getElementById("closeSenmon").style.display="block";
      });
      var closeSenmon=document.getElementById("closeSenmon");
      closeSenmon.addEventListener('click', function(){
        document.getElementById("senmon").style.display="none";
        closeSenmon.style.display="none";
      });
      //ラッテ
      var ratte=document.getElementById("ratteButton");
      ratte.addEventListener('click', function(){
        document.getElementById("ratte").style.display="block";
        document.getElementById("closeRatte").style.display="block";
      });
      var closeRatte=document.getElementById("closeRatte");
      closeRatte.addEventListener('click', function(){
        document.getElementById("ratte").style.display="none";
        closeRatte.style.display="none";
      });
      //日糧館
      document.getElementById("nichiryoButton").addEventListener('click', function(){
        document.getElementById("nichiryoMenu").style.display="block";
        document.getElementById("closeNichiryo").style.display="block";
      });
      document.getElementById("closeNichiryo").addEventListener('click', function(){
        document.getElementById("nichiryoMenu").style.display="none";
        document.getElementById("closeNichiryo").style.display="none";
      });
      //購買
      var koubai=document.getElementById("koubaiButton");
      koubai.addEventListener('click', function(){
        document.getElementById("koubai").style.display="block";
        document.getElementById("closeKoubai").style.display="block";
      });
      var closeKoubai=document.getElementById("closeKoubai");
      closeKoubai.addEventListener('click', function(){
        document.getElementById("koubai").style.display="none";
        closeKoubai.style.display="none";
      });
      //ジョアミ
      var johermi=document.getElementById("johermiButton");
      johermi.addEventListener('click', function(){
        document.getElementById("johermi").style.display="block";
        document.getElementById("closeJohermi").style.display="block";
      });
      var closeJohermi=document.getElementById("closeJohermi");
      closeJohermi.addEventListener('click', function(){
        document.getElementById("johermi").style.display="none";
        closeJohermi.style.display="none";
      });
      //ファミマ
      var famima=document.getElementById("famimaButton");
      famima.addEventListener('click', function(){
        document.getElementById("famima").style.display="block";
        document.getElementById("closeFamima").style.display="block";
      });
      var closeFamima=document.getElementById("closeFamima");
      closeFamima.addEventListener('click', function(){
        document.getElementById("famima").style.display="none";
        closeFamima.style.display="none";
      });
      
      changeMainStage();
      changeMemoStage();

      
      
      
    }
    ////変更
 
    //変更
    
  
       
  });
   //変更

document.addEventListener("show", function(event) {
  
    if(event.target.id === 'Map') {
      
      

    }

  });


//メニュー機能の開閉
window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};
window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};


//MainStage
function mainStage(){
  document.getElementById("mainStage_inf").style.display="block";
  document.getElementById("closeMain").style.display="block";
}
function closeMain(){
  document.getElementById("mainStage_inf").style.display="none";
  document.getElementById("closeMain").style.display="none";
}
//MemorialStage
function memoStage(){
  document.getElementById("memoStage_inf").style.display="block";
        document.getElementById("closeMemo").style.display="block";
}
function closeMemo(){
  document.getElementById("memoStage_inf").style.display="none";
  document.getElementById("closeMemo").style.display="none";
}


//変更
//tc1
// var tc1=document.getElementById("tc1");
// tc1.addEventListener('click', function(){
//   myNavigator.pushPage('tc1.html', { animation : 'slide' } );
// });
      

//メニュー決定時の模擬店表示
/*
var name_st;
function mogi_show(name){
  console.log({name});
  if(name==name_st){
    var a=document.getElementsByClassName(name);
      for(var i=0; i<a.length;i++){
        a[i].style.display="none";    
      }
  }
  else{
    var b=document.getElementsByClassName(name_st);
    for(var i=0; i<b.length;i++){
      b[i].style.display="none";
    }
    var c=document.getElementsByClassName(name);
    console.log(c);
    for(var i=0; i<c.length;i++){
      c[i].style.display="block";
    }
    name_st=name;
  }
}

function mogi_show1(name){
  alert(name);
  console.log({name});
  if(name==name_st){
    var a=document.getElementsByClassName(name);
      for(var i=0; i<a.length;i++){
        a[i].style.display="none";    
      }
  }
  else{
    var b=document.getElementsByClassName(name_st);
    for(var i=0; i<b.length;i++){
      b[i].style.display="none";
    }
    var c=document.getElementsByClassName(name);
    console.log(c);
    for(var i=0; i<c.length;i++){
      c[i].style.display="block";
    }
    name_st=name;
  }
}
*/
//建物吹き出し表示
/*
function objInfo(){

window.alert("吹き出し表示");

var index = $('.obj').index(this);

var a=document.getElementById("obj_inf"+index);
var b=document.getElementsByClassName("obj");

for(var i=0;i<b.length;i++){
  if(document.getElementById("obj_inf"+i).style.display==="block"&&i!=index) {
    console.log("fadeout.");
    document.getElementById("obj_inf"+i).style.display="none";
  }
}

var index1 = $('.shop').index(this);

var d=document.getElementsByClassName("shop");

for(var i=0;i<d.length;i++){
  console.log(i);
  if(document.getElementById("shop_inf"+i).style.display==="block"&&i!=index1) {
    console.log("fadeout.");
    document.getElementById("shop_inf"+i).style.display="none";
  }
}


  var rect=b[index].getBoundingClientRect();
  var to =rect.top+$("#page-top .page__content").scrollTop();
  var le=rect.left+$("#page-top .page__content").scrollLeft();
  a.style.left=le+"px";
  a.style.top=to-240+"px";
  a.style.display="block";

  console.log(a);
  console.log($("#page-top .page__content").scrollLeft()+"スクロールレフト");
  console.log($("#page-top .page__content").scrollTop()+"スクロールトップ");
  console.log(rect.top+"上からの絶対座標");
  console.log(rect.left+"左からの絶対座標");
  console.log(rect.top+$("#page-top .page__content").scrollTop()+"スクロールを見込んだ上からの絶対座標");
}


//模擬店吹き出し表示
// $('.shop').click(function(){

//   alert("Query動いてるね〜");

//   var index = $('.shop').index(this);
  
//   var a=document.getElementById("shop_inf"+index);
//   var b=document.getElementsByClassName("shop");

//   for(var i=0;i<b.length;i++){
//     console.log(i);
//     if(document.getElementById("shop_inf"+i).style.display==="block"&&i!=index) {
//       console.log("fadeout.");
//       document.getElementById("shop_inf"+i).style.display="none";
//     }
//   }

//   var rect=b[index].getBoundingClientRect();
//   var to =rect.top+$("#page-top .page__content").scrollTop();
//   var le=rect.left+$("#page-top .page__content").scrollLeft();
//   a.style.left=le+"px";
//   a.style.top=to-240+"px";
//   a.style.display="block";

//   console.log(a);
//   console.log($("#page-top .page__content").scrollLeft()+"スクロールレフト");
//   console.log($("#page-top .page__content").scrollTop()+"スクロールトップ");
//   console.log(rect.top+"上からの絶対座標");
//   console.log(rect.left+"左からの絶対座標");
//   console.log(rect.top+$("#page-top .page__content").scrollTop()+"スクロールを見込んだ上からの絶対座標");
// });
*/



// //お気に入りボタン
//     $(function() {
//       // clickイベントでクリックすると発動
//       $('.ai').click(function heart() {
//         // クリックした要素をthisで取得してclassの追加または削除
//         $(this).toggleClass('heart3');
//       });
//     });



//メインステージ時間帯別表示
function changeMainStage(){

  var now_date=new Date().getDate();
  var now_hour=new Date().getHours();
  var now_minute=new Date().getMinutes();
  var mainTitle=document.getElementById("mainTitle");
  var mainSentence=document.getElementById("mainSentence");

  switch(now_date){
    //メインステージ1日目
    case 2:
      switch(now_hour){
        case 12:
          if(now_minute>=30 && now_minute<45){
            mainTitle.innerHTML="オープニング";
            mainSentence.innerHTML='Dive into Clover!!というテーマのようにクローバー祭に夢中になって楽しんでください!ステージには素敵なアーティストさんが勢揃い!そして、今年もあのヒーロー達がクローバー祭に駆けつけてくれる?!皆さん、一緒に盛り上がりましょう!';
          }
          else if(now_minute>=45){
            mainTitle.innerHTML='田辺幼稚園・大住幼稚園';
            mainSentence.innerHTML='情報なし';
          }
          break;
        case 13:
          if(now_minute<15){
            mainTitle.innerHTML='田辺幼稚園・大住幼稚園';
            mainSentence.innerHTML='情報なし';
          }
          else if(now_minute>=15 && now_minute<35){
            mainTitle.innerHTML='同志社女子大学ダンス部 AmistaD^2';
            mainSentence.innerHTML='今日のためにみなさんを楽しませるダンスを準備してきました！是非見に来てください！';
          }
          else if(now_minute>=35 && now_minute<55){
            mainTitle.innerHTML='同志社モダンジャズバレエサークル';
            mainSentence.innerHTML='部員で選曲、振り付けを行い年に１回の自主公演に向けて楽しく練習しています！！';

          }
          else if(now_minute>=55){
            mainTitle.innerHTML='タップダンスサークル ShimSham';
            mainSentence.innerHTML='いったいどうやって鳴らしているのか！？不思議なタップダンスをご覧下さい！';
          }
          break;
        case 14:
          if(now_minute<15){
            mainTitle.innerHTML='タップダンスサークル ShimSham';
            mainSentence.innerHTML='いったいどうやって鳴らしているのか！？不思議なタップダンスをご覧下さい！';
          }
          else if(now_minute>=15 && now_minute<40){
            mainTitle.innerHTML='同志社室内楽団';
            mainSentence.innerHTML='少人数編成で、馴染みのある曲を楽しく演奏します！是非お越しください！';
          }
          else if(now_minute>=40){
            mainTitle.innerHTML='同志社大學應援團';
            mainSentence.innerHTML='全同志社人を応援する為に、指導部、チアリーダー部、吹奏学部で活動しております。';
          }
          break;
        case 15:
          if(now_minute<20){
            mainTitle.innerHTML='アカペラサークル One Voices';
            mainSentence.innerHTML='私たちOne Voicesは、自分たちの声だけを使って音楽を奏でる"アカペラ"を楽しむサークルです。';
          }
          else if(now_minute>=25 && now_minute<50){
            mainTitle.innerHTML='HOY-SMITH';
            mainSentence.innerHTML='新体制にして集大成。<br>ラストライブも歌って踊って、打ち上げで会いましょう。';
          }
          else if(now_minute>=50){
            mainTitle.innerHTML='カサヴェ';
            mainSentence.innerHTML='昨年一番練習した曲でミスった津田をクビにしたのでもうミスりません。皆来てください。';
          }
          break;
        case 16:
          if(now_minute<15){
            mainTitle.innerHTML='カサヴェ';
            mainSentence.innerHTML='昨年一番練習した曲でミスった津田をクビにしたのでもうミスりません。皆来てください。';
          }
          else if(now_minute>=15 && now_minute<35){
            mainTitle.innerHTML='LAPH ROI GLENN';
            mainSentence.innerHTML='日々の悩みは音楽で発散！<br>笑い、泣き、声を出して一緒に楽しみましょう！';
          }
          else if(now_minute>=35){
            mainTitle.innerHTML='フォーク・アライブ・クラブ（F.A.C）';
            mainSentence.innerHTML='私たちFACは幅広いジャンルの音楽をコピーしています。是非見に来てください！';
          }
          break;
        case 18:
          mainTitle.innerHTML='フレンズ';
          mainSentence.innerHTML='2015年に結成された男女５人組バンドの「フレンズ」。都会的なライフスタイル、友情や愛情を、オフビートな独特のユーモアでコメディに仕立て上げている"神泉系"バンド。リズミカルなシティポップに深みのある歌詞で顧客を魅了！今年のクローバー祭のステージをフレンズの皆様に盛り上げていただきます！';
          break;
        default:
          mainTitle.innerHTML='イベント時間外';
          mainSentence.innerHTML='ただいまイベント時間外です。<br>もうしばらくお待ちください。';
          break;
      }
      break;
    
    //メインステージ2日目
    case 3:
      switch(now_hour){
        case 9:
          if(now_minute<25){
            mainTitle.innerHTML='文情ロッカーズ';
            mainSentence.innerHTML='文化情報学部の生徒と先生で構成されたバンドです。';
          }
          else if(now_minute>=25&&now_minute<50){
            mainTitle.innerHTML='GCバンド';
            mainSentence.innerHTML='学部の中で集めたメンバーでクローバー祭の思い出作りのためバンドを組みました。';
          }
          else{
            mainTitle.innerHTML='同志社大学落語研究会<br>南京玉すだれ芸人ジンバブエ原';
            mainSentence.innerHTML='ケルン大聖堂前ゲリラ公演や日仏会館フランス語公演を決行。国境なき玉すだれ芸人';
          }
          break;
        case 10:
            mainTitle.innerHTML='お笑いステージ';
            mainSentence.innerHTML='笑い飯<br>尼神インター<br>祇園';
            break;
        case 11:
          if(now_minute<20){
            mainTitle.innerHTML='Trip nostalgia';
            mainSentence.innerHTML='ヨーロッパ民謡を演奏しています。';
          }
          else if(now_minute>=20&&now_minute<40){
            mainTitle.innerHTML='Meahula Nohealani';
            mainSentence.innerHTML='私達は「心に届くフラ」をモットーに1・2・3回生総勢125名で活動しています！';
          }
          else{
            mainTitle.innerHTML='「Dream Zone」<br>Withプロデューサー竹森みずほ';
            mainSentence.innerHTML='日本の文化や伝統を伝承し人々の人生を豊かにする情報を発信する次世代ユニット。';
          }
          break;
        case 12:
          if(now_minute<20){
            mainTitle.innerHTML='京炎 そでふれ！志舞踊';
            mainSentence.innerHTML='私達は創作ダンスをしており4学年が合わさって約200人で披露いたします！';
          }
          else if(now_minute>=20&&now_minute<50){
            mainTitle.innerHTML='培良中学校吹奏楽部';
            mainSentence.innerHTML='';
          }
          else if(now_minute>=55){
            mainTitle.innerHTML='VOCALOID研究会<br>Arpeggio';
            mainSentence.innerHTML='サークル員でバンドを組みボーカロイド曲を演奏します！みんなで盛り上がりましょう！';
          }
          break;
        case 13:
            if(now_minute<20){
              mainTitle.innerHTML='VOCALOID研究会<br>Arpeggio';
              mainSentence.innerHTML='サークル員でバンドを組みボーカロイド曲を演奏します！みんなで盛り上がりましょう！';
            }
            else if(now_minute>=20&&now_minute<45){
              mainTitle.innerHTML='BOYHOOD';
              mainSentence.innerHTML='ジャンルにとらわれないFreeスタイル"雑食系"ROCKバンドBOYHOOD';
            }
            else{
              mainTitle.innerHTML='Portoneon';
              mainSentence.innerHTML='neonかな，うえでぃーによるポップスバンド．10月には大阪音楽堂公演を開催';
            }
            break;
        case 14:
            if(now_minute<10){
              mainTitle.innerHTML='Portoneon';
              mainSentence.innerHTML='neonかな，うえでぃーによるポップスバンド．10月には大阪音楽堂公演を開催';
            }
            else if(now_minute>=10&&now_minute<35){
              mainTitle.innerHTML='軽音楽研究会I.P.C';
            mainSentence.innerHTML='フレンズもいいけど僕たちも負けないぐらい楽しませてみせます！是非来てください！';
            }
            else{
              mainTitle.innerHTML='PENTA';
            mainSentence.innerHTML='邦楽からロック、インストまで様々なバンドをコピーしている軽音サークルです!';
            }
            break;
        case 16:
            mainTitle.innerHTML='ハンブレッダーズ';
            mainSentence.innerHTML='<li>Profile</li>2009 年結成の「老若男女共感できる、まっすぐで思わず青春を思い出す。」そんな音楽を届ける、ネバーエンディング思春期な同志社卒 3 人組のバンドグループ!ギターボーカルのムツムロアキラさんが綴る、リアルな情景が浮かぶ歌詞と心に響く歌声、サウンドによる最高のステージを届けていただきます! !<li>Comment</li>母校の学祭に出られて光栄です。同志社前駅からの少々長すぎる坂を登って、ぜひ見にきてください。ハンブレッダ―ズ/ムツムロアキラ (Vo&Gt)';
            break;
        default:
          break;
      }
      break;
  
  }
}



//メモリアルステージ時間帯別表示
function changeMemoStage(){

  var now_date=new Date().getDate();
  var now_hour=new Date().getHours();
  var now_minute=new Date().getMinutes();
  var memoTitle=document.getElementById("memoTitle");
  var memoSentence=document.getElementById("memoSentence");

  switch(now_date){
  //メモリアルステージ1日目
  case 2:{
  switch(now_hour){
    case 12:
      if(now_minute>=45){
        memoTitle.innerHTML="同志社大学 チアダンスサークルSWEETiEZ";
        memoSentence.innerHTML='メンバー全員で、笑顔をお届けできるようなステージにします！！ぜひご覧ください！！';
      }
      break;
    case 13:
      if(now_minute<5){
        memoTitle.innerHTML="同志社大学チアダンスサークルSWEETiEZ";
        memoSentence.innerHTML='メンバー全員で、笑顔をお届けできるようなステージにします！！ぜひご覧ください！！';
      }
      else if(now_minute>=5 && now_minute<25){
        memoTitle.innerHTML="同志社大学よさこいサークルよさ郎";
        memoSentence.innerHTML='私たちは高知系の学生よさこいサークルです。力強い演舞をぜひ楽しんでご覧ください！';
      }
      break;
    case 14:
      if(now_minute<30){
        memoTitle.innerHTML='Re:Complex';
        memoSentence.innerHTML='';
      }
      else if(now_minute>=30 && now_minute<50){
        memoTitle.innerHTML='萌々奈';
        memoSentence.innerHTML='人気LINELIVER萌々奈。女子の本音をポップにダークにお届けします！';
      }
      else if(now_minute>=50){
        memoTitle.innerHTML='P.S.';
        memoSentence.innerHTML='アコースティックなバンドが持つ特有の雰囲気を感じてもらえたら嬉しいです！';
      }
      break;
    case 15:
      if(now_minute<10){
        memoTitle.innerHTML='P.S.';
        memoSentence.innerHTML='アコースティックなバンドが持つ特有の雰囲気を感じてもらえたら嬉しいです！';
      }
      else if(now_minute>=10 && now_minute<30){
        memoTitle.innerHTML='ユルイスト';
        memoSentence.innerHTML='アコギと女性ボーカルのデュオ！パーカッシブなアレンジで楽しいポップスをします！';
      }
      else if(now_minute>=30 && now_minute<50){
        memoTitle.innerHTML='ひなちょりーず';
        memoSentence.innerHTML='前へ進むための橋渡しに来ました。湧き上がる興奮とエナジーをお届けします。';
      }
      else if(now_minute>=50){
        memoTitle.innerHTML='GC教員グループ<br>〜アンサンブル・アランフェス';
        memoSentence.innerHTML='ギターの多賀谷を中心に、フルートやバイオリンとのアンサンブルを楽しむグループ。';
      }
      break;
    case 16:
      if(now_minute<10){
        memoTitle.innerHTML='GC教員グループ<br>〜アンサンブル・アランフェス';
        memoSentence.innerHTML='ギターの多賀谷を中心に、フルートやバイオリンとのアンサンブルを楽しむグループ。';
      }
      else if(now_minute>=10 && now_minute<40){
        memoTitle.innerHTML='PENTA';
        memoSentence.innerHTML='邦楽からロック、インストまで様々なバンドをコピーしている軽音サークルです！';
      }
      else if(now_minute>=40){
        memoTitle.innerHTML='ゲス mika';
        memoSentence.innerHTML='僕たち一回生有志バンドでゲスの極み乙女。とsumikaの曲を演奏します！';
      }
      break;
    case 17:
      memoTitle.innerHTML='みんなで察して！<br>ANSWER THE QUIZ!';
      memoSentence.innerHTML='';
      break;
    default:
        memoTitle.innerHTML='イベント時間外';
        memoSentence.innerHTML='ただいまイベント時間外です。<br>もうしばらくお待ちください。';
  }
}

//メモリアルステージ2日目
    case 3:{
      switch(now_hour){
        case 10:
          if(now_minute<20){
            mainTitle.innerHTML='Meahula Nohealani';
            mainSentence.innerHTML='私達は「心に届くフラ」をモットーに1・2・3回生総勢125名で活動しています！';
          }
          else if(now_minute>=20&&now_minute<40){
            mainTitle.innerHTML='京炎そでふれ！志舞踊';
            mainSentence.innerHTML='私達は創作ダンスをしており4学年が合わさって約200人で披露いたします！';
          }
          else{
            mainTitle.innerHTML='Kapuamohala';
            mainSentence.innerHTML='京都を中心に活動しています．年齢や性別問わず，仲良くフラを楽しんでいます．';
          }
          break;
        case 11:
            if(now_minute<20){
              mainTitle.innerHTML='ナイスゴーイングダンスサークル';
              mainSentence.innerHTML='皆様からの「手拍子・足拍子」を頂くのが大きな子供たちです．応援宜しくお願いします．';
            }
            else if(now_minute>=20&&now_minute<30){
              mainTitle.innerHTML='京都よさこい連　心粋';
            mainSentence.innerHTML='総勢164名で活動しているよさこいサークルです．大迫力の演舞をご覧ください！';
            }
            else if(now_minute>=30&&now_minute<50){
              mainTitle.innerHTML='アカペラサークル One Voices';
              mainSentence.innerHTML='私たち One Voices は、自分たちの声だけを使って音楽を奏でる“アカペラ”を楽しむサークルです。';
            }
            else{
              mainTitle.innerHTML='タップダンスサークル<br>ShiSham';
              mainSentence.innerHTML='いったいどうやって鳴らしているのか!?不思議なタップダンスをご覧下さい!';
            }
            break;
        case 12:
          if(now_minute>=10&&now_minute<30){
            mainTitle.innerHTML='Meahula Nohealani OG';
            mainSentence.innerHTML='引退から一年経ったメンバーが再結集し，フラの魅力を伝えられるよう精一杯踊ります！';
          }
          else if(now_minute>=30&&now_minute<50){
            mainTitle.innerHTML='同志社ヒーローショー同好会';
            mainSentence.innerHTML='同志社の愛と平和と単位のため，同志社戦隊タナレンジャーの戦いが今日も幕を切る！';
          }
          else{
            mainTitle.innerHTML='同志社室内楽団';
            mainSentence.innerHTML='少人数編成で、馴染みのある曲を楽しく演奏します!是非お越しください!';
          }
          break;
        case 13:
          if(now_minute<15){
            mainTitle.innerHTML='同志社室内楽団';
            mainSentence.innerHTML='少人数編成で、馴染みのある曲を楽しく演奏します!是非お越しください!';
          }
          else if(now_minute>=25&&now_minute<45){
            mainTitle.innerHTML='京都府立田辺高等学校ダンス部';
            mainSentence.innerHTML='大学生に囲まれて緊張していますが頑張って盛り上げるので応援よろしくお願いします．';
          }
          else if(now_minute>=50){
            mainTitle.innerHTML='cock10';
            mainSentence.innerHTML='早速ですがオリジナル曲やります！大事なことなのでもう一回！オリジナル曲やります！';
          }
          break;
        case 14:
            if(now_minute<20){
              mainTitle.innerHTML='cock10';
              mainSentence.innerHTML='早速ですがオリジナル曲やります！大事なことなのでもう一回！オリジナル曲やります！';
            }
            else if(now_minute>=20&&now_minute<50){
              mainTitle.innerHTML='フォーク・アライブ・クラブ(F.A.C)';
              mainSentence.innerHTML='私たち FAC は幅広いジャンルの音楽をコピーしています。是非見に来てください!';
            }
            break;
        default:
          break;
      }
    }
  }
}

// });



//以下、変数宣言・関数定義
  
