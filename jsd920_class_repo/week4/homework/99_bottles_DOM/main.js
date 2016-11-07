var bottles = 0,bottle="bottles",text="";
window.onload=function() {
  $('button#btn').on('click', function(event){
    event.preventDefault();

    var bottles = $('input#bottles').val(); 
    var team = $('select#team').val(); 

    var numberOfBottles = $('input#bottles').val();
    $('span#num_bottles').text(numberOfBottles);

    var nameOfTeam = $('input#team').val();
    $('span#name_team').text(nameOfTeam);

    while (bottles > 0) {
      if (bottles==1) bottle="bottle"; 
      text = "<p>"+bottles+" "+bottle+" of beer on the wall, "+bottles+" "+bottle+" of beer.<br/>";
      bottles = bottles - 2; //this is the same as bottles = bottles - 1;
      if (bottles==0) bottles="no more"; 
      text += "Take one down and pass it around, "+bottles+" bottles of beer on the wall.</p>"
      count.innerHTML += text;
    }
    count.innerHTML += "<p>No more bottles of beer on the wall, no more bottles of beer.<br>Better go get some coffee!!!</p>"
  });

};