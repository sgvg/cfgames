window.onload = function(){
    
           var img_List = document.querySelector('.img_List')
           var imgItem = document.querySelectorAll('.img_List>.imgItem')
           var Leftbtn = document.querySelector('.Left')
           var Rightbtn = document.querySelector('.Right')
           var titleList = document.querySelector('.titleList')
           var titleItem = document.querySelectorAll('.titleList>.titleItem')
           
           var index = 0
     
     
     
     Leftbtn.onclick = function(){
         if(index == 4){
             index = 0
         }else{
             index +=1
            
         }
          img_List.style.left = - index*760 + 'px'
          titleList.style.left = - index*760 + 'px'
     }
     
     Rightbtn.onclick = function(){
         if(index == 0){
             index = 4
         }else{
             index -=1
            
         }
          img_List.style.left = - index*760 + 'px'
          titleList.style.left = - index*760 + 'px'
     }
     
     
     var timer  = setInterval(function(){
         
          if(index == 4){
              index = 0
          }else{
              index +=1
              
          }
         img_List.style.left = - index*760 + 'px'
         titleList.style.left = - index*760 + 'px'
     },3000) 
           
           
      var hasxiala = document.querySelector('.hasxiala') 
      var xiala = document.querySelector('.xiala')
       
       hasxiala.onmouseover = function(){
           xiala.style.display = 'flex'
       }
       hasxiala.onmouseout = function(){
           xiala.style.display = 'none'
       }
       
       xiala.onmouseover = function(){
           xiala.style.display = 'flex'
       }   
       xiala.onmouseout = function(){
           xiala.style.display = 'none'
       }  
       
       
       var li_item = document.querySelectorAll('.li_item')
       var item_img = document.querySelectorAll('.li_item>.tu')   
       var li_item2 = document.querySelectorAll('.li_item2')
       var item_img2 = document.querySelectorAll('.li_item2>.tu')    
       var li_item3 = document.querySelectorAll('.li_item3')
       var item_img3 = document.querySelectorAll('.li_item3>.tu')    
      /* var li_item4 = document.querySelectorAll('.li_item4')
       var item_img4 = document.querySelectorAll('.li_item4>.tu')    */
       // console.log(li_item)
       
       for(var l = 0;l<li_item.length;l++){
           li_item[l].index = l
           li_item[0].style.height = '90px'
           item_img[0].style.height = '90px'
           li_item[l].onmouseover = function(){
               
               for(var k = 0;k<item_img.length;k++){
                   item_img[k].style.height = 0
                   li_item[k].style.height = 16+'px'
               }
               
               item_img[this.index].style.height = '90px'
               // li_item[l].style.height = '90px'
               this.style.height = '90px'
           } 
       }
       
       
       for(var l2 = 0;l2<li_item2.length;l2++){
           li_item2[l2].index = l2
           li_item2[0].style.height = '90px'
           item_img2[0].style.height = '90px'
           li_item2[l2].onmouseover = function(){
               
               for(var k2 = 0;k2<item_img2.length;k2++){
                   item_img2[k2].style.height = 0
                   li_item2[k2].style.height = 16+'px'
               }
               
               item_img2[this.index].style.height = '90px'
               // li_item[l].style.height = '90px'
               this.style.height = '90px'
           } 
       }
       
       for(var l3 = 0;l3<li_item3.length;l3++){
           li_item3[l3].index = l3
           li_item3[0].style.height = '90px'
           item_img3[0].style.height = '90px'
           li_item3[l3].onmouseover = function(){
               
               for(var k3 = 0;k3<item_img3.length;k3++){
                   item_img3[k3].style.height = 0
                   li_item3[k3].style.height = 16+'px'
               }
               
               item_img3[this.index].style.height = '90px'
               // li_item[l].style.height = '90px'
               this.style.height = '90px'
           } 
       }
    
    
    
    
    
       var header_left_logo2 = document.querySelector('.header_left_logo2')
       var BigLogo =document.querySelector('.BigLogo')
    
        header_left_logo2.onmouseover = function(){
            
         BigLogo.style.display = 'block'      
            
        }
        
         BigLogo.onmouseout = function(){
         BigLogo.style.display = 'none'
        } 
        
}