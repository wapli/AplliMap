var settingList,
 settings,
 settingPage,
 setting_list,
 pageNum,
setting_list
document.addEventListener("init", (event) => {
    if('Tab3'===event.target.id){
    console.log(event.target.id);


    console.log("settingが動きました");
    settingList=document.getElementById("settingList");
    setting_list=document.getElementsByClassName('setting_list');
    setting_lists=document.querySelectorAll('[id^=setting_list]');
    settingPage=document.querySelectorAll('[id^=settingPage]');
    
    setting_list[0].addEventListener("click", () => {
        settingList.pushPage('settingPage0');
    });
    setting_list[1].addEventListener("click", () => {
        settingList.pushPage('settingPage1');
    });
    setting_list[2].addEventListener("click", () => {
        settingList.pushPage('settingPage2');
    });
    setting_list[3].addEventListener("click", () => {
        settingList.pushPage('settingPage3');
    });
    setting_list[4].addEventListener("click", () => {
        settingList.pushPage('settingPage4');
    });
    setting_list[5].addEventListener("click", () => {
        settingList.pushPage('settingPage5');
    });
    setting_list[6].addEventListener("click", () => {
        window.open('https://cloverfes.com/', '_blank');
 
        // settingList.pushPage('settingPage6');
    });
    setting_list[7].addEventListener("click", () => {
        window.open('https://wapiwapi1729.wixsite.com/website', '_blank');
       
        // settingList.pushPage('settingPage7');
    });
    setting_list[8].addEventListener("click", () => {
        window.open('https://wapiwapi1729.wixsite.com/website/blank-4', '_blank');
   ;
        // settingList.pushPage('settingPage8');
    });
    setting_list[9].addEventListener("click", () => {
        settingList.pushPage('settingPage9');
    });
}
});