//メニュー機能の開閉
document.addEventListener("init", (event) => {
  var page = event.target;

  if(page.id == "ons-map"){

    window.fn1 = {};
    
    window.fn1.open = function() {
      var menu = document.getElementById('map_menu'); //<ons-splitter>のidをmap_menuに変えて下さい
      menu.open();
    };

    window.fn1.load = function(page) { 
      var content = document.getElementById('ms_content'); //<ons-splitter-content>のidをms_contentに変えて下さい
      var menu = document.getElementById('map_menu');
      content.load(page)
        .then(menu.close.bind(menu));
    };
    
  }
  
  if(page.id == "ons-timetable"){

    window.fn2 = {};
    
    window.fn2.open = function() {
      var menu = document.getElementById('timetable_menu'); //<ons-splitter>のidをtimetable_menuに変えて下さい
      menu.open();
    };

    window.fn2.load = function(page) { 
      var content = document.getElementById('ts_content'); //<ons-splitter-content>のidをts_contentに変えて下さい
      var menu = document.getElementById('timetable_menu');
      content.load(page)
        .then(menu.close.bind(menu));
    };
    
  }

},false);
