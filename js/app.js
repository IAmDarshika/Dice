var magicBox=document.querySelector("#stupidBox"),
    titleDom = document.querySelector("title"),
    titleValue = titleDom.textContent;

function dice(elm) {
  var x = Math.floor((Math.random() * 6) + 1);

  elm.textContent = x;
  console.log(x);
  titleDom.textContent = titleValue + ' - ' + x;
}

// page is loaded
dice(magicBox);

magicBox.addEventListener('click',function(){
 dice(this);
});