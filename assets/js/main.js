menuicon = document.querySelector(".menuButton");
menuicon.onclick = function(){
  menuList= document.querySelector(".menuList");
  menuList.classlist.toggle("active");
}
