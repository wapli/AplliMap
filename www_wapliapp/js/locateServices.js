document.addEventListener("init", function(event){
   
    var page = event.target;
    if(page.id == "ons-map"){
        var pins = document.getElementsByClassName("pin");
        var lib = pins[0];
        var rohm = pins[1];
        var shigyo = pins[2];
        var rika = pins[3];
        var jm = pins[4];
        var mk = pins[5];
        var nichiryo = pins[6];
        var hoken = pins[7];
        var shion = pins[8];
        var davis = pins[9];
        var vend1 = pins[11];
        var vend2 = pins[12];
        var kd = pins[13];

        for(var i=0;i<pins.length;i++){
            document.addEventListener("click", function(){
                if(ratio<=1.7){
                    switch(i){
                        case 0:
                            allDisappear();
                            console.log("WiFi");
                            lib.style.display="block";
                            rohm.style.display="block";
                            jm.style.display="block";
                            mk.style.display="block";
                            break;
                        case 1:
                            allDisappear();
                            console.log("DokodemoPrint");
                            lib.style.display="block";
                            jm.style.display="block";
                            break;
                        case 2:
                            allDisappear();
                            console.log("DocMachine");
                            jm.style.display="block";
                            seishin.style.display="block";
                            break;
                        case 3:
                            allDisappear();
                            console.log("PrintMachine");
                            mk.style.display="block";
                            seishin.style.display="display";
                            break;
                        case 4:
                            allDisappear();
                            console.log("VendingMachine");
                            rohm.style.display="block";
                            lib.style.display="block";
                            nichiryo.style.display="block";
                            vend1.style.display="block";
                            vend2.style.display="block";
                            break;
                        case 5:
                            allDisappear();
                            console.log("Meal");
                            nichiryo.style.display="block";
                            jm.style.display="block";
                            shion.style.display="block";
                            break;
                        case 6:
                            allDisappear();
                            console.log("PC");
                            jm.style.display="block";
                            kd.style.display="block";
                            break;
                    }
                }
                
            }, false);
        }
    }
}, false);

//サービスのある位置をピンの表示で特定する関数
function locateServices(num)
{
    var pins = document.getElementsByClassName("pin");
    var lib = pins[0];
    var rohm = pins[1];
    var shigyo = pins[2];
    var rika = pins[3];
    var jm = pins[4];
    var mk = pins[5];
    var nichiryo = pins[6];
    var hoken = pins[7];
    var shion = pins[8];
    var davis = pins[9];
    var seishin = pins[10];
    var vend1 = pins[11];
    var vend2 = pins[12];
    var kd = pins[13];

    if(ratio>=1.7){
        switch(num){
            case 0:
                allDisappear();
                console.log("WiFi");
                lib.style.display="block";
                rohm.style.display="block";
                jm.style.display="block";
                mk.style.display="block";
                kd.style.display="block";
                break;
            case 1:
                allDisappear();
                console.log("DokodemoPrint");
                lib.style.display="block";
                jm.style.display="block";
                break;
            case 2:
                allDisappear();
                console.log("DocMachine");
                jm.style.display="block";
                seishin.style.display="block";
                break;
            case 3:
                allDisappear();
                console.log("PrintMachine");
                mk.style.display="block";
                nichiryo.style.display="block";
                break;
            case 4:
                allDisappear();
                console.log("VendingMachine");
                rohm.style.display="block";
                lib.style.display="block";
                nichiryo.style.display="block";
                vend1.style.display="block";
                vend2.style.display="block";
                break;
            case 5:
                allDisappear();
                console.log("Meal");
                nichiryo.style.display="block";
                rohm.style.display="block";
                shion.style.display="block";
                break;
            case 6:
                allDisappear();
                console.log("PC");
                jm.style.display="block";
                kd.style.display="block";
                break;
            case 7:
                allDisappear();
                break;
        }
    }
    
}

//全てのピンを非表示にする関数
function allDisappear()
{
    console.log("Disappear all pins");
    var pins = document.getElementsByClassName("pin");
    for(var i=0;i<pins.length;i++){
        pins[i].style.display="none";
    }
}