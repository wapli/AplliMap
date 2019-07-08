var pokemonbox1;
var pokemonbox2;
var box_cha=function(boxname){
  pokemonbox2=pokemonbox1;
  pokemonbox1=boxname;
};

var toast_name=function(name){
  var a=document.getElementById("pokename")
  a.innerHTML=name;
  
}
//ons-splitter-content
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
//ons-splitter-content

//Toast
var showToast = function() {
  ons.notification.toast('ローム記念館', {
    timeout: 4000
  });
};
//Toast

$(function(){

  $('#toastbutton').click(function(){
    $('#'+pokemonbox2).hide('slow');
});

  $('#toastbutton').click(function(){
      $('#'+pokemonbox1).show('slow');
  });



  $('.cancel').click(function(){
      $('#'+pokemonbox1).hide('slow');
  });

});   