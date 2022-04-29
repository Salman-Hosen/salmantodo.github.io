var olist = document.querySelector("ol");

var fname = document.querySelector("#name");
var date = document.querySelector("#date");
var form = document.querySelector("form");
var button = document.querySelector(".add");
var body = document.querySelector("body");
var themeclass = document.querySelector(".mood");


form.addEventListener("submit",function(e){
    e.preventDefault();
    var list = document.createElement("li");                 
    list.innerHTML = "Date: "+date.value+"<br>" + "Work: "   + fname.value; 
    var del = document.createElement("small");
    //bacground color
    var selectbgcolor = document.querySelector("#listcolor").selectedIndex;
    switch(selectbgcolor){
      case 0:
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      list.style.backgroundColor = "#"+ randomColor;break;
      case 1:   list.style.backgroundColor = "red";  break;
      case 2:   list.style.backgroundColor = "blue";  break;
      case 3:   list.style.backgroundColor = "green";  break;
      case 4:   list.style.backgroundColor = "yellow";  break;
      case 5:   list.style.backgroundColor = "purple";  break;
      case 6:   list.style.backgroundColor = "orange";  break;
      case 7:   list.style.backgroundColor = "pink";  break;
    }  
  // background color end

  //font color start
  var selectfontcolor = document.querySelector("#fontcolor").selectedIndex;
    switch(selectfontcolor){
      case 0:   list.style.color = "black";  break;
      case 1:   list.style.color = "white";  break;
    }
    //font color end
   
    del.innerHTML= "X";
    list.appendChild(del);
    olist.appendChild(list); 
    var small = document.querySelectorAll("small");
    small.forEach(function(e){
    e.addEventListener("click", salman);
    });
    date.value= '';
    fname.value= '';
})



function salman(e){
    e.target.parentElement.remove();
}
// Theme color change..........
var i=0;
function themecreate(){
  i++;
  if(i==1){
    body.classList.add("bgthemedark");
    themeclass.innerHTML="White Mood";
  }
  

  if(i==2){
    body.classList.remove("bgthemedark");
    body.classList.add("bgthemewhite");
    themeclass.innerHTML="Generel Mood";
  }
  if(i>2){
    body.classList.remove("bgthemewhite");
    themeclass.innerHTML="Dark Mood";
    i=0;
  }

}
    
   
