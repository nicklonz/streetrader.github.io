var bottles = 99,bottle="bottles",text="";
window.onload=function() {
  var count = document.getElementById('count');  
  while (bottles > 0) {
    if (bottles==1) bottle="bottle"; 
    text = "<p>"+bottles+" "+bottle+" of beer on the wall, "+bottles+" "+bottle+" of beer.<br/>";
    bottles--;
    if (bottles==0) bottles="no more"; 
    text += "Take one down and pass it around, "+bottles+" bottles of beer on the wall.</p>"
    count.innerHTML += text;
  }
  count.innerHTML += "<p>No more bottles of beer on the wall, no more bottles of beer.<br>Better go get some coffee!!!</p>"
} 