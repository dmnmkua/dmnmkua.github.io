window.onload = function() {
  var btn = document.getElementById('hide-btn');
  var hideBlock = document.getElementById('hide-block');
  var headerTop = document.getElementById('header-top');
  var flag = false;


  btn.addEventListener("click", function() {
    if(flag) {
      hideBlock.style.display = "none";
      headerTop.style.padding = "0";
      btn.style.bottom = "-25px";
    }
    else {
      hideBlock.style.display = "flex";
      headerTop.style.padding = "9px 0";
      btn.style.bottom = "-35px";
    }

    flag = !flag;
  })
  // btn.onclick = function() {
  //
  //   if(flag) {
  //     hideBlock.style.display = "none";
  //   }
  //   else {
  //     hideBlock.style.display = "block";
  //   }
  //
  //   flag = !flag;
  // }
}
