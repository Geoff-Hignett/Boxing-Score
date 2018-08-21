let boxer1 = 0;
let boxer2 = 0;
let ask = 1;

while(ask == 1 || ask == 2){
  ask = prompt("Choose 1 or 2 to indicate which boxer scored the point");
  if(ask == 1){
    boxer1++;
  }else if(ask == 2){
    boxer2++;
  }
}

alert("boxer1: " + boxer1 + "\nboxer2: " + boxer2);