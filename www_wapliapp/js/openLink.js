document.addEventListener('init',function(event){
  var page = event.target;
  if(page.id == "ons-map"){
    window.open = cordova.InAppBrowser.open;
  }
})
function linkOpen(num){
  switch(num){
    case 1:
      //オプションなし
      window.open('https://www.google.co.jp/','_blank','');
      break;
    case 2:
      //アドレス表示
      window.open('https://www.google.co.jp/','_blank','location=yes');
      break;
    case 3:
      //アドレス非表示
      window.open('https://www.google.co.jp/','_blank','location=no');
      break;
    case 4:
      //アドレス表示、閉じるボタンのキャプション変更（iOSのみ）
      window.open('https://www.google.co.jp/','_blank','location=yes,closebuttoncaption=おしまい');
      break;
    case 5:
      //アドレス表示、ツールバー非表示（iOSのみ）
      window.open('https://www.google.co.jp/','_blank','location=yes,toolbar=no');
      break;
  }
}