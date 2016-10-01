var bottles;
for (counter = 99; counter >= 1; counter = counter - 1) 
{
    if (counter === 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter+" "+bottles+" of beer on the wall.");
    console.log("");
    if (counter < 99) {
        console.log(counter+" "+bottles+" of beer on the wall.");
    }
    if (counter <= 98) {
      console.log("");
    }
    console.log(counter+" "+bottles+" of beer.");
    console.log("");
    console.log("Take one down.");
    console.log("");
    console.log("Pass it around.");
    console.log("");
    if (counter === 1) {
    console.log("No bottles of beer on the wall.");
    console.log("")
    }
    
}