function aaa(num){
   
   
    //6限表示
      if(num==0){
         document.getElementById("period_6").style.visibility="visible"; 
      
                }
   
   //6限非表示
      else if(num==1){
          document.getElementById("period_6").style.visibility="collapse"; 
      }
      //7限表示
      else if(num==2){
          document.getElementById("period_7").style.visibility="visible"; 
      }
      //7限非表示
      else if(num==3){
          document.getElementById("period_7").style.visibility="collapse"; 
      }
      else {
          alert("error");
      }
         }