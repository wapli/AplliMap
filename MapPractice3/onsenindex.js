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
  $('#ibuibutton').click(function(){
      $('div.box').show('slow');
  });



  $('.cancel').click(function(){
      $('.box').hide('slow');
  });

});   