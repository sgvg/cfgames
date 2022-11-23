  window.onload = function(){
      
      
         
          var banner = document.querySelector('#banner')
          
          var cricle = document.querySelectorAll('#cricle>li')
          
          var index2 = 0;

         for (let i2 = 0; i2 < cricle.length; i2++) {
                   cricle[i2].onmouseover = function() {
                       index2 = i2
                       removeCLss2()
                       banner.style.left = -index2 * 812 + 'px'
             
         }
               }
           
           
        function removeCLss2() {
            for (let i = 0; i < cricle.length; i++) {
                cricle[i].classList.remove('active2')
            }
            cricle[index2].classList.add('active2')
        }
           
           var timer = setInterval(function(){
               if(index2 ==4){
                   index2 = 0
               }else{
                   index2 +=1
               }
               removeCLss2()
               banner.style.left = -index2 * 812 + 'px'
               
           }, 2000);






          /* $(".centonts2_right_ul>li").mouseover(function(){
                    
		 		    $(".new1").eq($(this).index(".centonts2_right_ul>li")).show().siblings(".new1").hide();
		 			 $(this).children(0).css("color","red").siblings(".contant_table_list>li").children(0).css("color","black");
		 })
		 
		 
		 $(".centonts4_nav_ul>li").mouseover(function(){
		 		    $(".videolist").eq($(this).index(".centonts4_nav_ul>li")).show().siblings(".videolist").hide();
	
		 })
		 */


          var img_List = document.querySelector('.img_List')
          var imgItem = document.querySelectorAll('.imgItem')

          var index = 0

          /* if(index == 4){
            index = 0
        }else{
            index+=1
        }
        
	 img_List.style.left = - index*416 +'px' */

          //轮播图上的小方块
          var cecels = document.querySelectorAll('.cec')
          for (let i = 0; i < cecels.length; i++) {
              cecels[i].onclick = function() {
                  index = i
                  removeCLss()
                  img_List.style.left = -index * 416 + 'px'
        
    }
          }

          //小方块变色
          function removeCLss() {
              for (let i = 0; i < cecels.length; i++) {
                  cecels[i].classList.remove('active')
              }
              cecels[index].classList.add('active')
          }




          document.querySelector('.cecels>li').classList.add('active')

          var time2 = setInterval(function() {

              if (index == 4) {
                  index = 0
              } else {
                  index += 1
              }
              removeCLss()
              img_List.style.left = -index * 416 + 'px'
          }, 3000)




          var centonts5_nav_ul = document.querySelectorAll('.centonts5_nav_ul>li')
          var centonts5_nav_showlist = document.getElementsByClassName('centonts5_nav_showlist')

          for (var e = 0; e < centonts5_nav_ul.length; e++) {

              centonts5_nav_ul[e].index = e
              centonts5_nav_ul[0].style.borderColor = 'red'
              centonts5_nav_ul[0].style.color = 'red'
              centonts5_nav_ul[e].onmouseover = function() {

                  for (var e1 = 0; e1 < centonts5_nav_showlist.length; e1++) {
                      centonts5_nav_showlist[e1].style.display = 'none'
                      centonts5_nav_ul[e1].style.borderColor = '#cecccc'
                      centonts5_nav_ul[e1].style.color = '#2E2E2E'
                  }

                  centonts5_nav_showlist[this.index].style.display = 'flex'
                  this.style.color = 'red'
                  this.style.borderColor = 'red'
              }
          }


          var centonts4_nav_ul = document.querySelectorAll('.centonts4_nav_ul>li')
          var videolist = document.getElementsByClassName('videolist')

          for (var w = 0; w < centonts4_nav_ul.length; w++) {
              centonts4_nav_ul[w].index = w
              centonts4_nav_ul[0].style.color = 'red'
              centonts4_nav_ul[0].style.borderColor = 'red'
              centonts4_nav_ul[w].onmouseover = function() {
                  for (var w1 = 0; w1 < videolist.length; w1++) {
                      videolist[w1].style.display = 'none'
                      centonts4_nav_ul[w1].style.color = '#6C6C6C'
                      centonts4_nav_ul[w1].style.borderColor = '#cecccc'
                  }
                  videolist[this.index].style.display = 'block'
                  this.style.color = 'red'
                  this.style.borderColor = 'red'
              }
          }


          var centonts2_right_ul = document.querySelectorAll('.centonts2_right_ul>li')
          var news = document.getElementsByClassName('new1')

          for (var n = 0; n < centonts2_right_ul.length; n++) {
              centonts2_right_ul[n].index = n
              centonts2_right_ul[0].style.color = 'red'
              centonts2_right_ul[n].onmouseover = function() {

                  for (var n1 = 0; n1 < news.length; n1++) {
                      news[n1].style.display = 'none'
                      centonts2_right_ul[n1].style.color = '#6C6C6C'
                      // centonts2_right_ul[n1].style.borderColor = '#cecccc'

                  }

                  news[this.index].style.display = 'block'
                  this.style.color = 'red'
                  // this.style.borderColor = 'red'
              }
          }



  } 