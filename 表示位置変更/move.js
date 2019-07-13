var mo = function(){
    var a=document.getElementsByClassName("kuku");
    var rect=a[0].getBoundingClientRect();
    var to =rect.top;
    var le=rect.left;
  
    console.log("a");
    

    var sw = screen.availWidth;  // 表示可能領域の横幅
    var sh = screen.availHeight; // 表示可能領域の高さ
    console.log(sw);
    console.log(sh);
    scrollBy(le-(sw/2),to-sh/2-100);
}