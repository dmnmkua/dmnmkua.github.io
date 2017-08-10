window.onload = function() {
  var navigation = document.getElementById('navigation');
  var elemNav = document.getElementsByClassName('element_menu');
  var mainImg = document.getElementsByClassName('main')[0];
  var blockItems = document.getElementsByClassName('block_items');
  
  for(var i = 0; i < elemNav.length; i++) {
    elemNav[i].addEventListener("click", function(e) {
      reset();
      e.target.style.background = "white";
      e.target.style.color = "#fc7844";
      document.getElementsByClassName(e.target.classList[1])[1].style.display = "flex";
      
    }, false);
  }
  
  function reset() {
    for(var i = 0; i < elemNav.length; i++) {
      elemNav[i].style.background = "transparent";
      elemNav[i].style.color = "#a61f22";
      mainImg.style.display = "none";
      blockItems[i].style.display = "none";
    }
  }
  
  
};
